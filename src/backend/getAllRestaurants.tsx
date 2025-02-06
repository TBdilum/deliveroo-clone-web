export const getAllRestaurants = async () => {
  try {
    const response = await fetch("http://localhost:3000/restaurants");
    if (!response.ok) {
      throw new Error("Failed to fetch all Restaurants.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching all Restaurants.", error);
  }
};
