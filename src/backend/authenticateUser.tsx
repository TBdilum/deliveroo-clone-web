export const authenticateUser = async (name: string, password: string) => {
  try {
    const response = await fetch("/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Authentication failed");
    }

    return data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};
