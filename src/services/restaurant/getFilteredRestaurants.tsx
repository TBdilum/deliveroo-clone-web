import { CheckFilteredRestaurantsResponse } from "../../types/restaurants";

export const getFilteredRestaurants = async () => {
  try {
    const response = await fetch("/api/restaurants/");
    if (!response.ok) {
      throw new Error("Failed to fetch filtered Restaurants.");
    }
    const data: CheckFilteredRestaurantsResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching filtered Restaurants.", error);
  }
};
