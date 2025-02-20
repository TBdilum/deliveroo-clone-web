import axios from "axios";
import { CheckLogInResponse } from "../../types/auth";

export const logInUser = async (
  email: string,
  password: string,
): Promise<CheckLogInResponse> => {
  try {
    const response = await axios.post("/api/auth/login", {
      email,
      password,
    });

    const data: CheckLogInResponse = await response.data;

    if (!data.token) {
      return { message: data.message || "Login failed" };
    }

    return data;
  } catch (error) {
    console.error("Error Logging in user:", error);
    return { message: "Something went wrong. Please try again." };
  }
};
