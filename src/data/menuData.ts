export interface MenuItem {
  name: string;
  price: number;
  description?: string;
  tag?: string;
}

export interface MenuCategory {
  name: string;
  icon: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    name: "Shawarma",
    icon: "🥙",
    items: [
      { name: "Paneer Shawarma", price: 140 },
      { name: "Regular Shawarma", price: 140 },
      { name: "Chicken Schezwan Shawarma", price: 150, description: "Spicy and tangy schezwan sauce twist" },
      { name: "Chicken Cheese Shawarma", price: 175, description: "Melted cheese with creamy garlic sauce" },
      { name: "Chicken Special Shawarma", price: 190, description: "Tender spiced chicken, fresh toppings" },
      { name: "Chicken Salad Shawarma", price: 220, description: "Best for gym enthusiasts!", tag: "Healthy" },
      { name: "Chicken Shawarma Plate", price: 245, description: "Grilled chicken with fresh veggies & pita" },
      { name: "Chicken Special Salad Cheese Shawarma", price: 300 },
      { name: "Falafel Roll", price: 130 },
      { name: "Falafel Cheese Roll", price: 165 },
    ],
  },
  {
    name: "Lassi",
    icon: "🥛",
    items: [
      { name: "Lassi Wassi Secret Lassi", price: 140, tag: "Chef's Special" },
      { name: "Sweet Lassi", price: 70 },
      { name: "Mango Lassi", price: 80, description: "Most ordered flavour in the world" },
      { name: "Chocolate Lassi", price: 80 },
      { name: "Dry Fruit Lassi", price: 90, description: "Dates, almonds & cashews blended in" },
      { name: "Arabian Lassi", price: 90, description: "Enriched with Kesar and badam", tag: "Must Try" },
      { name: "Gulkand Lassi", price: 90 },
      { name: "Affogato Lassi", price: 90 },
    ],
  },
  {
    name: "Thick Shakes",
    icon: "🥤",
    items: [
      { name: "Oreo Licious Thick Shake", price: 100 },
      { name: "Belgium Chocolate Thick Shake", price: 100 },
      { name: "Fantastic Strawberry Thick Shake", price: 100 },
      { name: "Alphonso Mango Thick Shake", price: 100 },
      { name: "Ferrero Rocher Thick Shake", price: 100 },
      { name: "Dry Fruit Thick Shake", price: 120 },
      { name: "Avocado Thick Shake", price: 120 },
    ],
  },
  {
    name: "Coffee",
    icon: "☕",
    items: [
      { name: "Cold Coffee", price: 80 },
      { name: "Chocolate Coffee", price: 120 },
      { name: "Creamy Coffee", price: 120 },
      { name: "Coffee On The Rock", price: 120 },
      { name: "Peanut Butter Coffee", price: 150 },
      { name: "Mud Coffee", price: 150 },
    ],
  },
  {
    name: "Burgers",
    icon: "🍔",
    items: [
      { name: "Veg Classic Burger", price: 110 },
      { name: "Veg Cheesy Burger", price: 120 },
      { name: "Classic Chicken Burger", price: 140 },
      { name: "Southwest Mexicana Burger", price: 170 },
      { name: "Lebanon Chicken Burger", price: 170 },
      { name: "Mr Harley King Burger", price: 220, tag: "Bestseller" },
      { name: "Zinger Burger", price: 150 },
    ],
  },
  {
    name: "Mojitos",
    icon: "🍹",
    items: [
      { name: "Virgin Mojito", price: 80, description: "Lime + mint, simple and effective" },
      { name: "Green Apple Mojito", price: 80 },
      { name: "Mouth Busting Chilli Mojito", price: 80 },
      { name: "Brain Freshener Mojito", price: 80 },
      { name: "Red Blast Mojito", price: 80 },
    ],
  },
  {
    name: "Fresh Juices",
    icon: "🧃",
    items: [
      { name: "Watermelon Juice", price: 70 },
      { name: "Pineapple Juice", price: 70 },
      { name: "Orange Juice", price: 80 },
      { name: "Pomegranate Juice", price: 80 },
    ],
  },
  {
    name: "Ice Cream",
    icon: "🍦",
    items: [
      { name: "Death By Chocolate Ice Cream", price: 120 },
      { name: "Chocolate Dream Ice Cream", price: 110 },
      { name: "Brownie With Ice Cream", price: 100 },
      { name: "Fruit Salad With Ice Cream", price: 100 },
      { name: "Nutty Professor Ice Cream", price: 120 },
    ],
  },
  {
    name: "Desserts",
    icon: "🍫",
    items: [
      { name: "Mud Chocolate", price: 150 },
      { name: "Smooth Criminal", price: 150 },
      { name: "Red Velvet", price: 120 },
    ],
  },
  {
    name: "International",
    icon: "🌍",
    items: [
      { name: "Nutella Hazelnut", price: 150 },
      { name: "Peanut Butter", price: 150 },
      { name: "KitKat", price: 150 },
      { name: "Snickers", price: 150 },
      { name: "Frozen Bounty", price: 150 },
      { name: "Chocolate Brownie", price: 150 },
    ],
  },
  {
    name: "Smoothies",
    icon: "🫐",
    items: [
      { name: "Banana Smoothie", price: 100 },
      { name: "Mango Smoothie", price: 100 },
      { name: "Strawberry Smoothie", price: 100 },
      { name: "Mango And Banana Smoothie", price: 100 },
    ],
  },
  {
    name: "Protein Shakes",
    icon: "💪",
    items: [
      { name: "Whey Protein Shake", price: 120, description: "Pure whey goodness for your day" },
      { name: "Natural Protein Shake", price: 100, description: "Naturally sourced, clean nutrition" },
    ],
  },
  {
    name: "Lemonade",
    icon: "🍋",
    items: [
      { name: "Fresh Lime", price: 70 },
      { name: "Ginger Lime", price: 80 },
      { name: "Lime Soda", price: 80 },
      { name: "Blue Lime Soda", price: 90 },
    ],
  },
  {
    name: "Summer Coolers",
    icon: "❄️",
    items: [
      { name: "Mind Cooler", price: 90 },
      { name: "Body Cooler", price: 90 },
    ],
  },
  {
    name: "Iced Tea",
    icon: "🍵",
    items: [
      { name: "Lemon Iced Tea", price: 60 },
      { name: "Peach Iced Tea", price: 60 },
    ],
  },
];
