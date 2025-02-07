export const getCategories = async () => {
  try {
    const response = await fetch("http://localhost:3000/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching categories.", error);
  }
};
