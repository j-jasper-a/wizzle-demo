import { UserType } from "@wizzle-demo/shared";
import axios from "axios";

export const createUser = async (user: UserType) => {
  try {
    const response = await axios.post("/api/users", user);

    return response.data;
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

export const getUserById = async (userId: string) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);

    return response.data;
  } catch (error) {
    console.error("Error getting user by ID:", error);
  }
};
