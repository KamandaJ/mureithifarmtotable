import terereImg from "@assets/generated_images/fresh_amaranth/terere_leaves.png";
import managuImg from "@assets/generated_images/fresh_black_nightshade/managu_leaves.png";
import kundeImg from "@assets/generated_images/fresh_cowpeas/kunde_leaves.png";
import comfreyImg from "@assets/generated_images/fresh_comfrey_leaves.png";
import tomatoImg from "@assets/generated_images/fresh_red_tomatoes.png";
import cabbageImg from "@assets/generated_images/fresh_green_cabbage.png";
import butternutImg from "@assets/generated_images/fresh_butternut_squash.png";
import pumpkinImg from "@assets/generated_images/fresh_pumpkin.png";

export interface Product {
  id: string;
  name: string;
  category: "Leafy Green" | "Vegetable" | "Spice";
  priceUnit: string; // e.g., "per bunch", "per piece"
  price: number; // Price in Ksh
  image: string;
}

export const products: Product[] = [
  {
    id: "terere",
    name: "Amaranth (Terere)",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 50,
    image: terereImg,
  },
  {
    id: "managu",
    name: "Black Nightshade (Managu)",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 50,
    image: managuImg,
  },
  {
    id: "kunde",
    name: "Cowpeas (Kunde)",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 50,
    image: kundeImg,
  },
  {
    id: "comfrey",
    name: "Comfrey",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 100, // Medicinal usually more expensive
    image: comfreyImg,
  },
  {
    id: "tomato",
    name: "Tomato",
    category: "Vegetable",
    priceUnit: "piece",
    price: 15,
    image: tomatoImg,
  },
  {
    id: "cabbage",
    name: "Cabbage",
    category: "Vegetable",
    priceUnit: "piece",
    price: 80,
    image: cabbageImg,
  },
  {
    id: "butternut",
    name: "Butternut",
    category: "Vegetable",
    priceUnit: "piece",
    price: 150,
    image: butternutImg,
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    category: "Vegetable",
    priceUnit: "piece",
    price: 200,
    image: pumpkinImg,
  },
  {
    id: "onion",
    name: "Bunching Onion",
    category: "Vegetable",
    priceUnit: "piece",
    price: 10,
    image: comfreyImg, // Fallback
  },
  {
    id: "cayenne",
    name: "Cayenne",
    category: "Spice",
    priceUnit: "piece",
    price: 5,
    image: tomatoImg, // Fallback
  },
];
