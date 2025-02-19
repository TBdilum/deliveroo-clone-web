import { CheckLogInResponse } from "../../types/auth";

export const logInUser = async (
  email: string,
  password: string,
): Promise<CheckLogInResponse> => {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data: CheckLogInResponse = await response.json();

    if (!response.ok) {
      return { message: data.message || "Login failed" };
    }

    return data;
  } catch (error) {
    console.error("Error Logging in user:", error);
    return { message: "Something went wrong. Please try again." };
  }
};
