import { ICategory } from "../../data/Sides";

export const getCategories = async (): Promise<ICategory[]> => {
  try {
    const response = await fetch("/api/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories.");
    }
    const result = await response.json();

    return Array.isArray(result.data) ? result.data : [];
  } catch (error) {
    console.error("Error fetching categories.", error);
    return [];
  }
};
