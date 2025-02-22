import { Request, Response, NextFunction } from "express";
import { QuizSchema, QuizType } from "@wizzle-demo/shared";
import dayjs from "dayjs";
import { nanoid as generateId } from "nanoid";
import { auth, db } from "..";

export const getQuizzes = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const quizzesSnapshot = await db.collection("quizzes").get();
    const quizzesData = await Promise.all(
      quizzesSnapshot.docs.map((doc) => doc.data())
    );
    response.status(200).json(quizzesData);
  } catch (error) {
    next(error);
  }
};

export const getQuizzesByUserId = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userId = request.params.userId;
    const quizzesSnapshot = await db
      .collection("quizzes")
      .where("userId", "==", userId)
      .get();
    const quizzesData = await Promise.all(
      quizzesSnapshot.docs.map((doc) => doc.data())
    );
    response.status(200).json(quizzesData);
  } catch (error) {
    next(error);
  }
};

export const getQuizById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const quizId = request.params.quizId;
    const quizSnapshot = await db
      .collection("quizzes")
      .where("id", "==", quizId)
      .limit(1)
      .get();

    const quizData = await Promise.all(
      quizSnapshot.docs.map((doc) => doc.data())
    );
    response.status(200).json(quizData);
  } catch (error) {
    next(error);
  }
};

export const createQuiz = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const requestIdToken = request.headers.authorization?.split("Bearer ")[1];

    if (!requestIdToken) {
      response.status(401).json({ message: "Unauthorized: No token provided" });
      return;
    }

    const decodedToken = await auth.verifyIdToken(requestIdToken);
    const userId = decodedToken.uid;

    const requestQuizData = request.body;
    const validationOutput = QuizSchema.safeParse(requestQuizData);

    if (!validationOutput.success) {
      response.status(400).json(validationOutput.error);
      return;
    }

    const finalQuizData: QuizType = {
      id: generateId(),
      title: validationOutput.data.title,
      category: validationOutput.data.category,
      creatorId: userId,
      questions: validationOutput.data.questions.map((question) => ({
        id: generateId(),
        text: question.text,
        options: question.options.map((option) => ({
          id: generateId(),
          text: option.text,
        })),
      })),
      metadata: {
        createdAt: dayjs().toISOString(),
      },
    };

    await db.collection("quizzes").doc(finalQuizData.id).set(finalQuizData);
    response.status(201).json(finalQuizData);
  } catch (error) {
    next(error);
  }
};
