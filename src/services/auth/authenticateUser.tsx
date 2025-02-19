import { CheckAuthenticateUserResponse } from "../../types/auth";

export const authenticateUser = async (
  email: string,
): Promise<CheckAuthenticateUserResponse> => {
  try {
    const response = await fetch("/api/auth/check-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data: CheckAuthenticateUserResponse = await response.json();
    if (!data) {
      throw new Error("Empty response from server");
    }
    return data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};
