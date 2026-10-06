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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    description: [
      {
        type: "paragraph",
        content:
          "Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.",
      },
      {
        type: "paragraph",
        content:
          "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra. ",
      },
      {
        type: "list",
        items: [
          "100 g of fresh leaves provides",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa. ",
      },
    ],
    SKU: "2,51,594",
    brand: "farmay",
    brandImage: "https://via.placeholder.com/100x50?text=Brand+Logo",
    category: "vegetables",
    additionalInfo: [
      { label: "Weight", value: "03" },
      { label: "Color", value: "Green" },
      { label: "Type", value: "Organic" },
      { label: "Category", value: "Vegetables" },
      { label: "Stock Status", value: "Available (5,413)" },
      {
        label: "Tags",
        value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
      },
    ],
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",

    description: [
      {
        type: "paragraph",
        content:
          "Sed commodo aliquam dul ac porta. Fusce ipsum fells, imperdiet at posuere ac, viverra at mauris...",
      },
      {
        type: "paragraph",
        content:
          "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui...",
      },
      {
        type: "list",
        items: [
          "100 g of fresh leaves provides",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Cras et diam maximus, accumsan sapien et, sollicitudin velit...",
      },
    ],
    SKU: "2,51,594",
    brand: "farmay",
    brandImage: "https://via.placeholder.com/100x50?text=Brand+Logo",
    category: "vegetables",
    additionalInfo: [
      { label: "Weight", value: "03" },
      { label: "Color", value: "Green" },
      { label: "Type", value: "Organic" },
      { label: "Category", value: "Vegetables" },
      { label: "Stock Status", value: "Available (5,413)" },
      {
        label: "Tags",
        value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
      },
    ],
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",

    description: [
      {
        type: "paragraph",
        content:
          "Sed commodo aliquam dul ac porta. Fusce ipsum fells, imperdiet at posuere ac, viverra at mauris...",
      },
      {
        type: "paragraph",
        content:
          "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui...",
      },
      {
        type: "list",
        items: [
          "100 g of fresh leaves provides",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Cras et diam maximus, accumsan sapien et, sollicitudin velit...",
      },
    ],
    SKU: "2,51,594",
    brand: "farmay",
    brandImage: "https://via.placeholder.com/100x50?text=Brand+Logo",
    category: "vegetables",
    additionalInfo: [
      { label: "Weight", value: "03" },
      { label: "Color", value: "Green" },
      { label: "Type", value: "Organic" },
      { label: "Category", value: "Vegetables" },
      { label: "Stock Status", value: "Available (5,413)" },
      {
        label: "Tags",
        value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
      },
    ],
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    description: [
      {
        type: "paragraph",
        content:
          "Sed commodo aliquam dul ac porta. Fusce ipsum fells, imperdiet at posuere ac, viverra at mauris...",
      },
      {
        type: "paragraph",
        content:
          "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui...",
      },
      {
        type: "list",
        items: [
          "100 g of fresh leaves provides",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Cras et diam maximus, accumsan sapien et, sollicitudin velit...",
      },
    ],
    SKU: "2,51,594",
    brand: "farmay",
    brandImage: "https://via.placeholder.com/100x50?text=Brand+Logo",
    category: "vegetables",
    additionalInfo: [
      { label: "Weight", value: "03" },
      { label: "Color", value: "Green" },
      { label: "Type", value: "Organic" },
      { label: "Category", value: "Vegetables" },
      { label: "Stock Status", value: "Available (5,413)" },
      {
        label: "Tags",
        value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
      },
    ],
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    description: [
      {
        type: "paragraph",
        content:
          "Sed commodo aliquam dul ac porta. Fusce ipsum fells, imperdiet at posuere ac, viverra at mauris...",
      },
      {
        type: "paragraph",
        content:
          "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui...",
      },
      {
        type: "list",
        items: [
          "100 g of fresh leaves provides",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Cras et diam maximus, accumsan sapien et, sollicitudin velit...",
      },
    ],
    SKU: "2,51,594",
    brand: "farmay",
    brandImage: "https://via.placeholder.com/100x50?text=Brand+Logo",
    category: "vegetables",
    additionalInfo: [
      { label: "Weight", value: "03" },
      { label: "Color", value: "Green" },
      { label: "Type", value: "Organic" },
      { label: "Category", value: "Vegetables" },
      { label: "Stock Status", value: "Available (5,413)" },
      {
        label: "Tags",
        value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
      },
    ],
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    description: [
      {
        type: "paragraph",
        content:
          "Sed commodo aliquam dul ac porta. Fusce ipsum fells, imperdiet at posuere ac, viverra at mauris...",
      },
      {
        type: "paragraph",
        content:
          "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui...",
      },
      {
        type: "list",
        items: [
          "100 g of fresh leaves provides",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Cras et diam maximus, accumsan sapien et, sollicitudin velit...",
      },
    ],
    SKU: "2,51,594",
    brand: "farmay",
    brandImage: "https://via.placeholder.com/100x50?text=Brand+Logo",
    category: "vegetables",
    additionalInfo: [
      { label: "Weight", value: "03" },
      { label: "Color", value: "Green" },
      { label: "Type", value: "Organic" },
      { label: "Category", value: "Vegetables" },
      { label: "Stock Status", value: "Available (5,413)" },
      {
        label: "Tags",
        value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
      },
    ],
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
    description: [
      {
        type: "paragraph",
        content:
          "Sed commodo aliquam dul ac porta. Fusce ipsum fells, imperdiet at posuere ac, viverra at mauris...",
      },
      {
        type: "paragraph",
        content:
          "Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui...",
      },
      {
        type: "list",
        items: [
          "100 g of fresh leaves provides",
          "Aliquam ac est at augue volutpat elementum.",
          "Quisque nec enim eget sapien molestie.",
          "Proin convallis odio volutpat finibus posuere.",
        ],
      },
      {
        type: "paragraph",
        content:
          "Cras et diam maximus, accumsan sapien et, sollicitudin velit...",
      },
    ],
    SKU: "2,51,594",
    brand: "farmay",
    brandImage: "https://via.placeholder.com/100x50?text=Brand+Logo",
    category: "vegetables",
    additionalInfo: [
      { label: "Weight", value: "03" },
      { label: "Color", value: "Green" },
      { label: "Type", value: "Organic" },
      { label: "Category", value: "Vegetables" },
      { label: "Stock Status", value: "Available (5,413)" },
      {
        label: "Tags",
        value: "Vegetables, Healthy, Chinese, Cabbage, Green Cabbage",
      },
    ],
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
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
    shortDescription:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar.",
  },
];
