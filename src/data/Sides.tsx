import { faker } from "@faker-js/faker";
import saladImage from "../assets/salad.jpeg";

interface Salad {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export const salads: Salad[] = [];

for (let i = 0; i <= 30; i++) {
  salads.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: `£${parseFloat(faker.commerce.price()).toFixed(2)}`,
    image: saladImage,
  });
}
