export const getFilteredRestaurants = async () => {
  try {
    const response = await fetch("http://localhost:3000/restaurants/");
    if (!response.ok) {
      throw new Error("Failed to fetch filtered Restaurants.");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching filtered Restaurants.", error);
  }
};
