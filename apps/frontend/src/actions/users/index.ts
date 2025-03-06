import { UserType } from "@wizzle-demo/libs";
import axios from "axios";

export const createUser = async (user: UserType) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_WIZZLE_API_URL}/users`,
      user,
    );

    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_WIZZLE_API_URL}/users/${userId}`,
    );

    return response.data;
  } catch (error) {
    console.error("Error getting user by ID:", error);
  }
};
