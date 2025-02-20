import axios from "axios";
import { CheckGetAllRestaurantsResponse } from "../../types/restaurants";

export const getAllRestaurants = async () => {
  try {
    const response = await axios.get("/api/restaurants");
    if (!response.data) {
      throw new Error("Failed to fetch all Restaurants.");
    }
    const data: CheckGetAllRestaurantsResponse = await response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching all Restaurants.", error);
  }
};
