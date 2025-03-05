import { Request, Response, NextFunction } from "express";
import { db } from "..";

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

export const getQuizBySlug = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const quizSlug = request.params.quizSlug;
    const quizSnapshot = await db
      .collection("quizzes")
      .where("slug", "==", quizSlug)
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
