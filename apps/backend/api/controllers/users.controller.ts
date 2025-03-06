import { Request, Response, NextFunction } from "express";
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

export const getUserByUsername = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const username = request.params.username;
    const userSnapshot = await db
      .collection("users")
      .where("username", "==", username)
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
    const userDoc = await db.collection("users").add(userData);
    response.status(201).json({ id: userDoc.id });
  } catch (error) {
    next(error);
  }
};
