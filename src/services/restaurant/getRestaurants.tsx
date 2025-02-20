import axios from "axios";
import { CheckRestaurantsResponse } from "../../types/restaurants";

export const getRestaurants = async (orgId: string) => {
  try {
    const response = await axios.get(
      `/api/restaurants/${encodeURIComponent(orgId)}`,
    );

    if (!response.data) {
      throw new Error("Restaurant not found");
    }
    const data: CheckRestaurantsResponse = await response.data;
    return data.data;
  } catch (error) {
    console.error("Error fetching Restaurant", error);
  }
};
