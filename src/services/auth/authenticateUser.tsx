import { CheckAuthenticateUserResponse } from "../../types/auth";
import axios from "axios";

export const authenticateUser = async (
  email: string,
): Promise<CheckAuthenticateUserResponse> => {
  try {
    const response = await axios.post("/api/auth/check-email", {
      email,
    });

    const data: CheckAuthenticateUserResponse = await response.data;

    return data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};
