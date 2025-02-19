import { CheckCreateNewUserResponse } from "../../types/auth";

export const createNewUser = async (
  email: string,
  password: string,
): Promise<CheckCreateNewUserResponse> => {
  try {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data: CheckCreateNewUserResponse = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to create user");
    }

    return data;
  } catch (error) {
    console.error("Error Creating user:", error);
    throw error;
  }
};
