export const createNewUser = async (name: string, password: string) => {
  try {
    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();

    if (data.token) {
      return data.token;
    }

    if (!response.ok) {
      throw new Error("failed");
    }
  } catch (error) {
    console.error("Error Creating user:", error);
    throw error;
  }
};
