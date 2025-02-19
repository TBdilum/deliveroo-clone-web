export const authenticateUser = async (email: string) => {
  try {
    const response = await fetch("/api/auth/check-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();
    if (!data) {
      throw new Error("Empty response from server");
    }
    return data;
  } catch (error) {
    console.error("Error authenticating user:", error);
    throw error;
  }
};
