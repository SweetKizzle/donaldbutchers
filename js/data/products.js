var products = [
  {
    name: "Dry aged ribeye steak",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/steak.jpg",
    quantity: "220G",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "1000",
    categories: ["Beef"],
    cut: "Steaks",
    nutrition: "high protein",
    featured: "true"
  },
  {
    name: "Free range pork chops",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/pork-chops.jpg",
    quantity: "2PK (500G)",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "2000",
    categories: ["Pork"],
    cut: "Other",
    nutrition: "<20% fat",
    featured: "true"
  },
  {
    name: "Cornish red chicken",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/chicken.jpg",
    quantity: "1.7KG",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "3000",
    categories: ["Poultry"],
    cut: "Other",
    nutrition: "<15% fat",
    featured: "true"
  },
  {
    name: "Asparagus",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/asparagus.jpg",
    quantity: "1 Bunch",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "4000",
    categories: ["Other"],
    cut: "Other",
    nutrition: "other",
    featured: "true"
  },
  {
    name: "Dry aged lamb shank",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/steak.jpg",
    quantity: "220G",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "1000",
    categories: ["Lamb"],
    cut: "Roasts",
    nutrition: "<20% fat",
    featured: "false"
  },
  {
    name: "Black pudding",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/pork-chops.jpg",
    quantity: "2PK (500G)",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "2000",
    categories: ["Puddings"],
    cut: "Minced & Diced",
    nutrition: "<15% fat",
    featured: "false"
  },
  {
    name: "Pheasant",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/chicken.jpg",
    quantity: "1.7KG",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "3000",
    categories: ["Game", "Poultry"],
    cut: "Steaks",
    nutrition: "other",
    featured: "false"
  },
  {
    name: "Rabbit",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/asparagus.jpg",
    quantity: "1 Bunch",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "4000",
    categories: ["Game"],
    cut: "Minced & Diced",
    nutrition: "<20% fat",
    featured: "false"
  },
  {
    name: "Dry aged sirloin steak",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/steak.jpg",
    quantity: "220G",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "1000",
    categories: ["Beef"],
    cut: "Steaks",
    nutrition: "<10% fat",
    featured: "false"
  },
  {
    name: "Steak and ale pie",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/pork-chops.jpg",
    quantity: "2PK (500G)",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "2000",
    categories: ["Pies"],
    cut: "Beef Offal",
    nutrition: "<15% fat",
    featured: "false"
  },
  {
    name: "Rolled Turkey Crown",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/chicken.jpg",
    quantity: "1.7KG",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "3000",
    categories: ["Festive"],
    cut: "Roasts",
    nutrition: "high protein",
    featured: "false"
  },
  {
    name: "Gammon steaks",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/asparagus.jpg",
    quantity: "1 Bunch",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "4000",
    categories: ["Pork", "Game", "Other"],
    cut: "Steaks",
    nutrition: "<20% fat",
    featured: "false"
  },
  {
    name: "Dry aged chataubriand steak",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/steak.jpg",
    quantity: "220G",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "1000",
    categories: ["Beef"],
    cut: "Steaks",
    nutrition: "<15% fat",
    featured: "false"
  },
  {
    name: "Smoked back bacon",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/pork-chops.jpg",
    quantity: "2PK (500G)",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "2000",
    categories: ["Pork"],
    cut: "Other",
    nutrition: "<10% fat",
    featured: "false"
  },
  {
    name: "Organic chicken thighs",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/chicken.jpg",
    quantity: "1.7KG",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "3000",
    categories: ["Poultry"],
    cut: "Steaks",
    nutrition: "<20% fat",
    featured: "false"
  },
  {
    name: "Salt cured beef",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/asparagus.jpg",
    quantity: "1 Bunch",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "4000",
    categories: ["Beef", "Other"],
    cut: "Slow Cooking",
    nutrition: "<15% fat",
    featured: "false"
  },
  {
    name: "Dry aged fillet steak",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/steak.jpg",
    quantity: "220G",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "1000",
    categories: ["Beef"],
    cut: "Steaks",
    nutrition: "high protein",
    featured: "false"
  },
  {
    name: "Lincolnshire sausages",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/pork-chops.jpg",
    quantity: "2PK (500G)",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "2000",
    categories: ["Pork"],
    cut: "Sausages",
    nutrition: "other",
    featured: "false"
  },
  {
    name: "Organic duck breast",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/chicken.jpg",
    quantity: "1.7KG",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "3000",
    categories: ["Poultry"],
    cut: "Other",
    nutrition: "<20% fat",
    featured: "false"
  },
  {
    name: "Beef Burgers",
    img:
      "https://sweetkizzle.github.io/donaldbutchers/assets/images/product/asparagus.jpg",
    quantity: "1 Bunch",
    rating: 4,
    before_price: "4.50",
    price: "4.00",
    id: "4000",
    categories: ["Other"],
    cut: "Burgers & Brochettes",
    nutrition: "<15% fat",
    featured: "false"
  }
];
