export interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  meal?: string;
}

export const reviews: Review[] = [
  {
    name: "Divanshi Agarwal",
    rating: 5,
    text: "Loved the taste of coffee, specially creamy coffee is mind blowing! Should definitely try all their shakes and coffees, consistency is pretty amazing 🩷",
    date: "4 weeks ago",
    meal: "Dinner",
  },
  {
    name: "Anees Mulla",
    rating: 5,
    text: "Absolutely loved the experience at Lassi Wassi! The vibe of the place is amazing with great music and a super cozy ambiance. Tried both the veg and chicken shawarmas — packed with flavor and served fresh. The lassis are a must-try!",
    date: "8 months ago",
    meal: "Dine in",
  },
  {
    name: "Om Chougule",
    rating: 5,
    text: "We ordered chicken shawarma, it was tasty!",
    date: "9 months ago",
    meal: "Takeaway",
  },
  {
    name: "Arya Gujar",
    rating: 5,
    text: "Best chicken shawarma in Pune!",
    date: "3 months ago",
    meal: "Dine in",
  },
  {
    name: "Narendra Saraf",
    rating: 4,
    text: "Good taste, nice variety of items on the menu. Will visit again!",
    date: "5 months ago",
    meal: "Dine in",
  },
  {
    name: "Prajol Jagtap",
    rating: 4,
    text: "Quick service, just 3-5 mins of waiting for your order. Good food quality.",
    date: "2 months ago",
    meal: "Dine in",
  },
];
