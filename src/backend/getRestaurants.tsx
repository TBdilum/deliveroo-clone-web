export const getRestaurants = async (orgId: string) => {
  try {
    const response = await fetch(
      `/api/restaurants/${encodeURIComponent(orgId)}`,
    );

    if (!response.ok) {
      throw new Error("Restaurant not found");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching Restaurant", error);
  }
};
