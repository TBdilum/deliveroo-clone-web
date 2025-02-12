import { authenticateUser } from "./authenticateUser";

export const createNewUser = async (name: string, password: string) => {
  try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    if (!response.ok) {
      throw new Error("failed");
    } else {
      const token = await authenticateUser(name, password);
      if (token) {
        localStorage.setItem("token", token);
        console.log(token, `successfully logged in as ${name}`);
      } else {
        throw new Error("Invalid username or password");
      }
    }
  } catch (error) {
    console.error("Error Creating user:", error);
    throw error;
  }
};
