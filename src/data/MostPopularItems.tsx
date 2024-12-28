import saladImage from "../assets/salad.jpeg";
import { faker } from "@faker-js/faker";

export const mostPopularItems = [
  {
    id: 1,
    name: "Chicken Caesar Salad",
    description:
      "Fresh lettuce, grilled chicken, Caesar dressing, and croutons.",
    price: "£8.50",
    image: saladImage,
  },
  {
    id: 2,
    name: "Rainbow Veggie Wrap",
    description: "A mix of colorful veggies wrapped in a soft tortilla.",
    price: "£6.75",
    image: saladImage,
  },
  {
    id: 3,
    name: "Protein Power Bowl",
    description: "Grilled chicken, quinoa, avocado, and greens.",
    price: "£9.50",
    image: saladImage,
  },
  {
    id: 4,
    name: "Vegan Delight",
    description: "A delightful mix of fresh veggies and vegan dressing.",
    price: "£7.25",
    image: saladImage,
  },
  {
    id: 5,
    name: "Beef Burrito",
    description: "Beef, beans, cheese, and salsa wrapped in a tortilla.",
    price: "£8.00",
    image: saladImage,
  },
];

for (let i = 6; i <= 105; i++) {
  mostPopularItems.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: `£${parseFloat(faker.commerce.price()).toFixed(2)}`,
    image: saladImage,
  });
}
