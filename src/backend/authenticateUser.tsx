export const authenticateUser = async (email: string) => {
  try {
    const response = await fetch("/api/authUsers/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
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
