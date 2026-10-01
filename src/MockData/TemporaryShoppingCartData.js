import { products } from "./Products";

export const myCart = [
  { ...products[0], quantity: 1 },
  { ...products[1], quantity: 2 },
  { ...products[2], quantity: 3 },
];
