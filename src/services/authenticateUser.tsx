export const authenticateUser = async (email: string) => {
  try {
    const response = await fetch("/api/authUsers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const text = await response.text();
    if (!text) {
      throw new Error("Empty response from server");
    }

    const data = JSON.parse(text);
    return data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};
