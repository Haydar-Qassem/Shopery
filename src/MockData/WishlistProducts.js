import GreenApple from "../assets/images/Products/GreenApple.png";
import FreshIndianMalta from "../assets/images/Products/FreshIndianMalta.png";
import ChineseCabbage from "../assets/images/Products/ChineseCabbage.png";

export const wishlistProducts = [
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
];
