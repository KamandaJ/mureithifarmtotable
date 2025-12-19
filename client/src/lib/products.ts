import terereImg from "@assets/generated_images/fresh_amaranth_terere_leaves.png";
import managuImg from "@assets/generated_images/managu_plant_leaves.png";
import kundeImg from "@assets/generated_images/cowpeas_leaves.png";
import comfreyImg from "@assets/generated_images/Comfrey_leaves.png";
import tomatoImg from "@assets/generated_images/fresh_red_tomatoes.png";
import cabbageImg from "@assets/generated_images/fresh_green_cabbage.png";
import butternutImg from "@assets/generated_images/butternut_squash.png";
import sukumawikiImg from "@assets/generated_images/Sukuma_wiki_plant.png";
import cayenneImg from "@assets/generated_images/cayenne_chillies.png";
import habaneroImg from "@assets/generated_images/habanero_peppers.png";
import jalapenoImg from "@assets/generated_images/Jalapeno_peppers.png";

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
    price: 50,
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
    id: "sukuma wiki",
    name: "Sukuma Wiki",
    category: "Leafy Green",
    priceUnit: "bunch",
    price: 50,
    image: sukumawikiImg,
    nutritionalBenefits: [
      "Rich in Vitamins A, C, and K",
      "High in Fiber",
      "Contains Calcium",
      "Good for bone health"
    ],
    funFact: "Sukuma Wiki means 'to push the week' in Swahili, as it is an affordable vegetable that helps stretch meals.",
    preparation: "Wash and chop. Sauté with onions, tomatoes, and a bit of oil. Can also be added to stews or soups for extra nutrition.",
  },
  {
    id: "cayenne",
    name: "Cayenne",
    category: "Spice",
    priceUnit: "piece",
    price: 5,
    image: cayenneImg,
    nutritionalBenefits: [
      "Contains Capsaicin (pain relief)",
      "Boosts metabolism",
      "High in Vitamin A",
      "Aids digestion"
    ],
    funFact: "Cayenne peppers have been used for both food and medicine for the last 9,000 years!",
    preparation: "Wash and chop finely. Add to stews or marinades for heat. Use sparingly—it packs a punch!",
  },
  {
    id: "habanero",
    name: "Habanero",
    category: "Spice",
    priceUnit: "piece",
    price: 10,
    image: habaneroImg,
    nutritionalBenefits: [
      "Extremely high in Vitamin C",
      "Contains Capsaicin (anti-inflammatory)",
      "Boosts metabolism",
      "Rich in antioxidants"
    ],
    funFact: "Habanero peppers are among the hottest chili peppers in the world, measuring between 100,000 to 350,000 on the Scoville scale!",
    preparation: "Handle with care—wear gloves if necessary. Finely chop and add to sauces or salsas for intense heat. Use sparingly to avoid overpowering dishes.",
  },
  {
    id: "jalapeno",
    name: "Jalapeno",
    category: "Spice",
    priceUnit: "piece",
    price: 8,
    image: jalapenoImg,
    nutritionalBenefits: [
      "High in Vitamin C",
      "Contains Capsaicin (pain relief)",
      "Boosts metabolism",
      "Aids digestion"
    ],
    funFact: "Jalapeno peppers are named after the city of Xalapa in Veracruz, Mexico, where they were traditionally cultivated.",
    preparation: "Wash and slice. Can be eaten raw in salads or pickled. Also great for stuffing or adding to salsas for a moderate heat level.",
  }
];