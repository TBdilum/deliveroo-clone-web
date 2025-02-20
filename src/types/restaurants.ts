export type CheckGetAllRestaurantsResponse = {
  data: [string];
  message: string;
};

export type CheckFilteredRestaurantsResponse = {
  data: [string];
  message: string;
};

export type CheckRestaurantsResponse = {
  data: {
    name: string;
    image: string;
    description: string;
    tags: [string];
    openingAt: string;
    closingAt: string;
    minimumValue: string;
    deliveryCharge: string;
  };
  message: string;
};
