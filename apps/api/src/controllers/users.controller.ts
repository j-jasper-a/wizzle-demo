import { Request, Response, NextFunction } from "express";
import { UserSchema, UserType } from "@wizzle-demo/shared";
import dayjs from "dayjs";
import { db } from "..";

export const getUsers = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const usersSnapshot = await db.collection("users").get();
    const usersData = await Promise.all(
      usersSnapshot.docs.map((doc) => doc.data())
    );
    response.status(200).json(usersData);
  } catch (error) {
    next(error);
  }
};

export const getUserById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userId = request.params.userId;
    const userSnapshot = await db
      .collection("users")
      .where("id", "==", userId)
      .limit(1)
      .get();

    const userData = await Promise.all(
      userSnapshot.docs.map((doc) => doc.data())
    );
    response.status(200).json(userData);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userData = request.body;
    const validationResult = UserSchema.safeParse(userData);

    if (!validationResult.success) {
      response.status(400).json(validationResult.error);
      return;
    }

    const preparedUserData: UserType = {
      id: validationResult.data.id,
      name: validationResult.data.name,
      avatarUrl: validationResult.data.avatarUrl,
      metadata: {
        createdAt: dayjs().toISOString(),
      },
    };

    await db.collection("users").doc(preparedUserData.id).set(preparedUserData);
    response.status(201).json(preparedUserData);
  } catch (error) {
    next(error);
  }
};
