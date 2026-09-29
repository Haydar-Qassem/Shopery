import GreenApple from "../assets/images/Products/GreenApple.png";
import FreshIndianMalta from "../assets/images/Products/FreshIndianMalta.png";
import ChineseCabbage from "../assets/images/Products/ChineseCabbage.png";
import GreenLettuce from "../assets/images/Products/GreenLettuce.png";
import Eggplant from "../assets/images/Products/Eggplant.png";
import BigPotatoes from "../assets/images/Products/BigPotatoes.png";
import Corn from "../assets/images/Products/Corn.png";
import FreshCauliflower from "../assets/images/Products/FreshCauliflower.png";
import GreenCapsicum from "../assets/images/Products/GreenCapsicum.png";
import GreenChili from "../assets/images/Products/GreenChili.png";

export const products = [
  {
    id: 1,
    name: "Green Apple",
    price: 14.99,
    oldPrice: 20.99,
    rating: 4,
    reviewsCount: 120,
    Tags: [
      {
        tagType: "sale",
        tagText: "Sale 50%",
      },
    ],
    image: GreenApple,
    OfferExpDate: Date.now() + 2 * 24 * 60 * 60 * 1000,
    stockStatus: "inStock",
  },
  {
    id: 2,
    name: "Fresh Indian Malta",
    price: 20.0,
    oldPrice: null,
    rating: 4,
    reviewsCount: 80,
    Tags: [],
    image: FreshIndianMalta,
    offerExpDate: Date.now() + 2 * 24 * 60 * 60 * 1000,
    stockStatus: "inStock",
  },
  {
    id: 3,
    name: "Chinese Cabbage",
    price: 12.0,
    oldPrice: null,
    rating: 4,
    reviewsCount: 50,
    Tags: [],
    image: ChineseCabbage,
    stockStatus: "outOfStock",
  },
  {
    id: 4,
    name: "Green Lettuce",
    price: 9.0,
    oldPrice: null,
    rating: 4,
    reviewsCount: 30,
    Tags: [],
    image: GreenLettuce,
    offerExpDate: Date.now() + 3 * 24 * 60 * 60 * 1000,
    stockStatus: "inStock",
  },
  {
    id: 5,
    name: "Eggplant",
    price: 34.0,
    oldPrice: null,
    rating: 5,
    reviewsCount: 10,
    Tags: [],
    image: Eggplant,
    stockStatus: "inStock",
  },
  {
    id: 6,
    name: "Big Potatoes",
    price: 20.0,
    oldPrice: null,
    rating: 4,
    reviewsCount: 70,
    Tags: [],
    image: BigPotatoes,
    offerExpDate: Date.now() + 2 * 24 * 60 * 60 * 1000 + 15 * 60 * 60 * 1000,
    stockStatus: "outOfStock",
  },
  {
    id: 7,
    name: "Corn",
    price: 20.0,
    oldPrice: null,
    rating: 4,
    reviewsCount: 6045,
    Tags: [
      {
        tagType: "bestSale",
        tagText: "Best Sale",
      },
    ],
    image: Corn,
    stockStatus: "outOfStock",
  },
  {
    id: 8,
    name: "Fresh Cauliflower",
    price: 12.0,
    oldPrice: null,
    rating: 4,
    reviewsCount: 25,
    Tags: [],
    image: FreshCauliflower,
  },
  {
    id: 9,
    name: "Green Capsicum",
    price: 9.0,
    oldPrice: 20.99,
    rating: 4,
    reviewsCount: 15,
    Tags: [
      {
        tagType: "sale",
        tagText: "Sale 50%",
      },
    ],
    image: GreenCapsicum,
    stockStatus: "inStock",
  },
  {
    id: 10,
    name: "Green Chili",
    price: 34.0,
    oldPrice: null,
    rating: 4,
    reviewsCount: 5,
    Tags: [],
    image: GreenChili,
    stockStatus: "outOfStock",
  },
];
