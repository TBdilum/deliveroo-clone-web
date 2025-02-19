import { CheckGetAllRestaurantsResponse } from "../../types/restaurants";

export const getAllRestaurants = async () => {
  try {
    const response = await fetch("/api/restaurants");
    if (!response.ok) {
      throw new Error("Failed to fetch all Restaurants.");
    }
    const data: CheckGetAllRestaurantsResponse = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching all Restaurants.", error);
  }
};
