import axios from "axios";
import { CheckCreateNewUserResponse } from "../../types/auth";

export const createNewUser = async (
  email: string,
  password: string,
): Promise<CheckCreateNewUserResponse> => {
  try {
    const response = await axios.post("/api/auth/signup", {
      email,
      password,
    });

    const data: CheckCreateNewUserResponse = await response.data;

    if (!data.token) {
      throw new Error(data.message || "Failed to create user");
    }

    return data;
  } catch (error) {
    console.error("Error Creating user:", error);
    throw error;
  }
};
