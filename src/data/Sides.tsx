import { faker } from "@faker-js/faker";
import saladImage from "/public/assets/salad.jpeg";

interface IDish {
  id: number;
  name: string;
  price: string;
  image: string;
  categoryId: number;
}
interface ICategory {
  id: number;
  name: string;
}

export const dishes: IDish[] = Array.from({
  length: 40,
}).map((_, index) => ({
  id: index,
  name: faker.food.dish(),
  price: faker.commerce.price({ symbol: "$" }),
  image: saladImage,
  categoryId: faker.number.int({ max: 30, min: 0 }),
}));

export const categories: ICategory[] = Array.from({
  length: 30,
}).map((_, index) => ({
  id: index,
  name: faker.food.ethnicCategory(),
}));
