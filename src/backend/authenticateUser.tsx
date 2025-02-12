export const authenticateUser = async (UserName: string, Password: string) => {
  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ UserName, Password }),
    });

    if (!response.ok) {
      throw new Error("Authentication failed");
    }

    const data = await response.json();

    if (data.token) {
      return data.token;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};
