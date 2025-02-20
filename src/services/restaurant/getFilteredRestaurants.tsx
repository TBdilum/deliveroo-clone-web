import axios from "axios";
import { CheckFilteredRestaurantsResponse } from "../../types/restaurants";

export const getFilteredRestaurants = async () => {
  try {
    const response = await axios.get("/api/restaurants/");
    if (!response.data) {
      throw new Error("Failed to fetch filtered Restaurants.");
    }
    const data: CheckFilteredRestaurantsResponse = await response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching filtered Restaurants.", error);
  }
};
