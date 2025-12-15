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
  priceUnit: string;
  price: number;
  image: string;
  nutritionalBenefits: string[];
  funFact: string;
  preparation: string;
}

export const products: Product[] = [
  {
    id: "terere",
    name: "Amaranth (Terere)",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 50,
    image: terereImg,
    nutritionalBenefits: [
      "Rich in Iron and Calcium",
      "High in Vitamin A and C",
      "Good source of Protein",
      "Contains antioxidants"
    ],
    funFact: "Amaranth was a staple food of the Aztecs and was used in their religious ceremonies.",
    preparation: "Wash thoroughly. Sauté with onions and tomatoes for a quick side dish, or mix with mashed potatoes (Mukimo). Do not overcook to preserve nutrients.",
  },
  {
    id: "managu",
    name: "Black Nightshade (Managu)",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 50,
    image: managuImg,
    nutritionalBenefits: [
      "Excellent source of Iron",
      "High in Vitamin C",
      "Contains fiber for digestion",
      "Boosts immunity"
    ],
    funFact: "In some cultures, Managu is traditionally given to recovering patients to boost their blood levels and immunity.",
    preparation: "Pluck the leaves and boil briefly to reduce bitterness. Fry with onions, tomatoes, and milk or cream for a savory, rich taste.",
  },
  {
    id: "kunde",
    name: "Cowpeas (Kunde)",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 50,
    image: kundeImg,
    nutritionalBenefits: [
      "High in Protein",
      "Rich in Vitamin A and C",
      "Good source of Folate",
      "Contains dietary fiber"
    ],
    funFact: "Cowpea leaves are actually more nutritious than the cowpea seeds (black-eyed peas) themselves!",
    preparation: "Boil until tender. Sauté with onions, tomatoes, and peanut butter/groundnut sauce for a traditional delicacy.",
  },
  {
    id: "comfrey",
    name: "Comfrey",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 100,
    image: comfreyImg,
    nutritionalBenefits: [
      "Contains Allantoin (promotes cell growth)",
      "Rich in Vitamin B12",
      "High in Calcium",
      "Used for bone health"
    ],
    funFact: "Comfrey is historically known as 'knitbone' because of its traditional use in healing broken bones and wounds.",
    preparation: "Use sparingly. Often used in green smoothies or steeped as a tea. Can be cooked like spinach but best mixed with other greens.",
  },
  {
    id: "tomato",
    name: "Tomato",
    category: "Vegetable",
    priceUnit: "piece",
    price: 15,
    image: tomatoImg,
    nutritionalBenefits: [
      "Rich in Lycopene (heart health)",
      "High in Vitamin C",
      "Source of Potassium",
      "Good for skin health"
    ],
    funFact: "Botanically, a tomato is a fruit (a berry), but in the kitchen, we treat it as a vegetable.",
    preparation: "Wash and slice for salads, or chop and cook as a base for stews, soups, and sauces. Roasting intensifies their flavor.",
  },
  {
    id: "cabbage",
    name: "Cabbage",
    category: "Vegetable",
    priceUnit: "piece",
    price: 80,
    image: cabbageImg,
    nutritionalBenefits: [
      "High in Vitamin K and C",
      "Contains antioxidants",
      "Good for digestion",
      "Low in calories"
    ],
    funFact: "Cabbage is one of the oldest cultivated vegetables, dating back over 4,000 years.",
    preparation: "Remove outer leaves. Shred for coleslaw, or chop and stir-fry with carrots and onions. Can also be steamed or added to soups.",
  },
  {
    id: "butternut",
    name: "Butternut",
    category: "Vegetable",
    priceUnit: "piece",
    price: 150,
    image: butternutImg,
    nutritionalBenefits: [
      "High in Vitamin A",
      "Good source of Fiber",
      "Rich in Potassium",
      "Boosts immunity"
    ],
    funFact: "The darker the orange color of the flesh, the higher the concentration of beta-carotene and nutrients.",
    preparation: "Peel, seed, and cube. Roast with cinnamon or herbs, boil and mash, or blend into a creamy soup.",
  },
  {
    id: "pumpkin",
    name: "Pumpkin",
    category: "Vegetable",
    priceUnit: "piece",
    price: 200,
    image: pumpkinImg,
    nutritionalBenefits: [
      "Rich in Vitamin A",
      "High in Antioxidants",
      "Contains Vitamin C",
      "Good for eye health"
    ],
    funFact: "Every single part of a pumpkin is edible, including the skin, leaves, flowers, and stem!",
    preparation: "Roast wedges with skin on, or boil and mash for chapati. Seeds can be roasted for a healthy snack.",
  },
  {
    id: "onion",
    name: "Bunching Onion",
    category: "Vegetable",
    priceUnit: "piece",
    price: 10,
    image: comfreyImg, // Fallback
    nutritionalBenefits: [
      "Rich in Vitamin K",
      "Contains Vitamin C",
      "Has antiviral properties",
      "Good for heart health"
    ],
    funFact: "Bunching onions are also known as scallions or green onions and are harvested before the bulb swells.",
    preparation: "Chop both the white and green parts. Use as a base flavor for frying or garnish soups and salads for a fresh crunch.",
  },
  {
    id: "cayenne",
    name: "Cayenne",
    category: "Spice",
    priceUnit: "piece",
    price: 5,
    image: tomatoImg, // Fallback
    nutritionalBenefits: [
      "Contains Capsaicin (pain relief)",
      "Boosts metabolism",
      "High in Vitamin A",
      "Aids digestion"
    ],
    funFact: "Cayenne peppers have been used for both food and medicine for the last 9,000 years!",
    preparation: "Wash and chop finely. Add to stews or marinades for heat. Use sparingly—it packs a punch!",
  },
];
