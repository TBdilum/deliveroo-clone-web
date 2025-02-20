import { faker } from "@faker-js/faker";

export interface IDish {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  categoryId: number;
}

export interface ICategory {
  data?: [string];
  id: number;
  name: string;
}

export const dishes: IDish[] = Array.from({
  length: 40,
}).map((_, index) => ({
  id: index,
  name: faker.food.dish(),
  description: faker.food.description(),
  price: faker.commerce.price({ symbol: "$" }),
  image: faker.image.url(),
  categoryId: faker.number.int({ max: 30, min: 0 }),
}));

export const specials: IDish[] = Array.from({ length: 25 }).map((_, index) => ({
  id: index,
  image: faker.image.url(),
  name: faker.food.dish(),
  description: faker.food.description(),
  price: faker.commerce.price(),
  categoryId: faker.number.int({ max: 30, min: 0 }),
}));

export const popular: IDish[] = Array.from({ length: 25 }).map((_, index) => ({
  id: index,
  image: faker.image.url(),
  name: faker.food.dish(),
  description: faker.food.description(),
  price: faker.commerce.price(),
  categoryId: faker.number.int({ max: 30, min: 0 }),
}));
