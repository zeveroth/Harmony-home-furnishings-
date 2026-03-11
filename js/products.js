const products = [

  { id: 1, name: "Modern Gray Sofa", price: 899, category: "living", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", glb: "/models/product-1.glb", usdz: "/models/product-1.usdz", rating: 4.8 },

  { id: 2, name: "HavenSleep Upholstered Queen Bed", price: 1199, category: "bedroom", image: "https://images.unsplash.com/photo-1615873968403-89e6c9f3a1a5", glb: "/models/product-2.glb", usdz: "/models/product-2.usdz", rating: 4.9 },

  { id: 3, name: "NordWood Walnut Dining Table", price: 749, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-3.glb", usdz: "/models/product-3.usdz", rating: 4.7 },

  { id: 4, name: "Minimalist TV Stand", price: 499, category: "living", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", glb: "/models/product-4.glb", usdz: "/models/product-4.usdz", rating: 4.6 },

  { id: 5, name: "Soft Ivory Area Rug", price: 129, category: "living", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-5.glb", usdz: "/models/product-5.usdz", rating: 4.8 },

  { id: 6, name: "CloudComfort Sectional Sofa", price: 1599, category: "living", image: "https://images.unsplash.com/photo-1615874959474-d609969a2a5b", glb: "/models/product-6.glb", usdz: "/models/product-6.usdz", rating: 4.9 },

  { id: 7, name: "Oakwood Nightstand", price: 229, category: "bedroom", image: "https://images.unsplash.com/photo-1600585154154-7124f5c1c1c3", glb: "/models/product-7.glb", usdz: "/models/product-7.usdz", rating: 4.7 },

  { id: 8, name: "Scandi Lounge Chair", price: 349, category: "living", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-8.glb", usdz: "/models/product-8.usdz", rating: 4.8 },

  { id: 9, name: "Walnut Bookshelf", price: 599, category: "living", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-9.glb", usdz: "/models/product-9.usdz", rating: 4.7 },

  { id: 10, name: "Coastal Woven Pendant Light", price: 189, category: "decor", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", glb: "/models/product-10.glb", usdz: "/models/product-10.usdz", rating: 4.8 },

  { id: 11, name: "UrbanEdge Leather Sofa", price: 1299, category: "living", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-11.glb", usdz: "/models/product-11.usdz", rating: 4.9 },

  { id: 12, name: "PureRest Memory Foam Mattress", price: 899, category: "bedroom", image: "https://images.unsplash.com/photo-1585559605151-8f6c9c7a5e2f", glb: "/models/product-12.glb", usdz: "/models/product-12.usdz", rating: 4.8 },

  { id: 13, name: "Glass & Steel Coffee Table", price: 329, category: "living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-13.glb", usdz: "/models/product-13.usdz", rating: 4.6 },

  { id: 14, name: "Rustic Farmhouse Dining Bench", price: 299, category: "dining", image: "https://images.unsplash.com/photo-1600585154154-7124f5c1c1c3", glb: "/models/product-14.glb", usdz: "/models/product-14.usdz", rating: 4.8 },

  { id: 15, name: "Nordic Floor Lamp", price: 159, category: "decor", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-15.glb", usdz: "/models/product-15.usdz", rating: 4.7 },

  { id: 16, name: "Velvet Accent Chair", price: 399, category: "living", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-16.glb", usdz: "/models/product-16.usdz", rating: 4.9 },

  { id: 17, name: "Walnut 6‑Drawer Dresser", price: 799, category: "bedroom", image: "https://images.unsplash.com/photo-1600585154154-7124f5c1c1c3", glb: "/models/product-17.glb", usdz: "/models/product-17.usdz", rating: 4.8 },

  { id: 18, name: "Marble Top Side Table", price: 249, category: "living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-18.glb", usdz: "/models/product-18.usdz", rating: 4.7 },

  { id: 19, name: "Classic Oak Dining Chairs (Set of 2)", price: 349, category: "dining", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-19.glb", usdz: "/models/product-19.usdz", rating: 4.8 },

  { id: 20, name: "Luxe Tufted Headboard", price: 499, category: "bedroom", image: "https://images.unsplash.com/photo-1615873968403-89e6c9f3a1a5", glb: "/models/product-20.glb", usdz: "/models/product-20.usdz", rating: 4.9 },

  { id: 21, name: "Outdoor Teak Lounge Chair", price: 699, category: "outdoor", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", glb: "/models/product-21.glb", usdz: "/models/product-21.usdz", rating: 4.8 },

  { id: 22, name: "Patio Wicker Sofa Set", price: 1499, category: "outdoor", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", glb: "/models/product-22.glb", usdz: "/models/product-22.usdz", rating: 4.9 },

  { id: 23, name: "Outdoor Dining Table", price: 899, category: "outdoor", image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353", glb: "/models/product-23.glb", usdz: "/models/product-23.usdz", rating: 4.7 },

  { id: 24, name: "Modern Entryway Console", price: 349, category: "decor", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-24.glb", usdz: "/models/product-24.usdz", rating: 4.8 },

  { id: 25, name: "Industrial Bar Stools (Set of 2)", price: 259, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-25.glb", usdz: "/models/product-25.usdz", rating: 4.7 },

  { id: 26, name: "Soft Knit Throw Blanket", price: 79, category: "decor", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-26.glb", usdz: "/models/product-26.usdz", rating: 4.9 },

  { id: 27, name: "Modern Glass Desk", price: 499, category: "office", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-27.glb", usdz: "/models/product-27.usdz", rating: 4.8 },

  { id: 28, name: "ErgoComfort Office Chair", price: 329, category: "office", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-28.glb", usdz: "/models/product-28.usdz", rating: 4.9 },

  { id: 29, name: "Floating Wall Shelves (Set of 3)", price: 119, category: "decor", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-29.glb", usdz: "/models/product-29.usdz", rating: 4.7 },

  { id: 30, name: "Modern Media Console", price: 699, category: "living", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", glb: "/models/product-30.glb", usdz: "/models/product-30.usdz", rating: 4.8 },

  { id: 31, name: "Luxury King Bed Frame", price: 1399, category: "bedroom", image: "https://images.unsplash.com/photo-1615873968403-89e6c9f3a1a5", glb: "/models/product-31.glb", usdz: "/models/product-31.usdz", rating: 4.9 },

  { id: 32, name: "Marble Dining Table", price: 1299, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-32.glb", usdz: "/models/product-32.usdz", rating: 4.8 },

  { id: 33, name: "Velvet Bar Stool", price: 199, category: "dining", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-33.glb", usdz: "/models/product-33.usdz", rating: 4.7 },

  { id: 34, name: "Outdoor Fire Pit Table", price: 899, category: "outdoor", image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353", glb: "/models/product-34.glb", usdz: "/models/product-34.usdz", rating: 4.9 },

  { id: 35, name: "Rattan Patio Chair", price: 249, category: "outdoor", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", glb: "/models/product-35.glb", usdz: "/models/product-35.usdz", rating: 4.8 },

  { id: 36, name: "Modern Bookshelf Divider", price: 599, category: "living", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-36.glb", usdz: "/models/product-36.usdz", rating: 4.7 },

  { id: 37, name: "Soft Cotton Bedding Set", price: 159, category: "bedroom", image: "https://images.unsplash.com/photo-1585559605151-8f6c9c7a5e2f", glb: "/models/product-37.glb", usdz: "/models/product-37.usdz", rating: 4.9 },

  { id: 38, name: "Industrial Metal Desk", price: 449, category: "office", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-38.glb", usdz: "/models/product-38.usdz", rating: 4.8 },

  { id: 39, name: "Executive Leather Office Chair", price: 599, category: "office", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-39.glb", usdz: "/models/product-39.usdz", rating: 4.9 },

  { id: 40, name: "Minimalist Wall Clock", price: 89, category: "decor", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-40.glb", usdz: "/models/product-40.usdz", rating: 4.7 },

  { id: 41, name: "Modern Sleeper Sofa", price: 1299, category: "living", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", glb: "/models/product-41.glb", usdz: "/models/product-41.usdz", rating: 4.8 },

  { id: 42, name: "Luxury Down Comforter", price: 199, category: "bedroom", image: "https://images.unsplash.com/photo-1585559605151-8f6c9c7a5e2f", glb: "/models/product-42.glb", usdz: "/models/product-42.usdz", rating: 4.9 },

  { id: 43, name: "Round Glass Dining Table", price: 699, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-43.glb", usdz: "/models/product-43.usdz", rating: 4.7 },

  { id: 44, name: "Outdoor Sectional Set", price: 1899, category: "outdoor", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", glb: "/models/product-44.glb", usdz: "/models/product-44.usdz", rating: 4.9 },

  { id: 45, name: "Rustic Wood Coffee Table", price: 349, category: "living", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-45.glb", usdz: "/models/product-45.usdz", rating: 4.8 },

  { id: 46, name: "Velvet Storage Ottoman", price: 199, category: "living", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-46.glb", usdz: "/models/product-46.usdz", rating: 4.7 },

  { id: 47, name: "Modern Bedside Lamp", price: 129, category: "decor", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-47.glb", usdz: "/models/product-47.usdz", rating: 4.8 },

  { id: 48, name: "Walnut Writing Desk", price: 549, category: "office", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-48.glb", usdz: "/models/product-48.usdz", rating: 4.9 },

  { id: 49, name: "ErgoMesh Office Chair", price: 299, category: "office", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-49.glb", usdz: "/models/product-49.usdz", rating: 4.8 },

  { id: 50, name: "Modern Wall Mirror", price: 179,
  { id: 51, name: "Scandi Wood Bed Frame", price: 899, category: "bedroom", image: "https://images.unsplash.com/photo-1615873968403-89e6c9f3a1a5", glb: "/models/product-51.glb", usdz: "/models/product-51.usdz", rating: 4.8 },

  { id: 52, name: "Modern Dining Chair (Set of 2)", price: 279, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-52.glb", usdz: "/models/product-52.usdz", rating: 4.7 },

  { id: 53, name: "Outdoor Wicker Coffee Table", price: 349, category: "outdoor", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", glb: "/models/product-53.glb", usdz: "/models/product-53.usdz", rating: 4.8 },

  { id: 54, name: "Minimalist Standing Lamp", price: 139, category: "decor", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-54.glb", usdz: "/models/product-54.usdz", rating: 4.7 },

  { id: 55, name: "Walnut Storage Cabinet", price: 649, category: "living", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-55.glb", usdz: "/models/product-55.usdz", rating: 4.8 },

  { id: 56, name: "Luxury Fabric Sofa", price: 1399, category: "living", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", glb: "/models/product-56.glb", usdz: "/models/product-56.usdz", rating: 4.9 },

  { id: 57, name: "Modern Wood Desk", price: 479, category: "office", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-57.glb", usdz: "/models/product-57.usdz", rating: 4.8 },

  { id: 58, name: "ErgoPlus Mesh Chair", price: 349, category: "office", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-58.glb", usdz: "/models/product-58.usdz", rating: 4.9 },

  { id: 59, name: "Soft Plush Rug", price: 159, category: "decor", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-59.glb", usdz: "/models/product-59.usdz", rating: 4.8 },

  { id: 60, name: "Walnut Coffee Table", price: 329, category: "living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-60.glb", usdz: "/models/product-60.usdz", rating: 4.7 },

  { id: 61, name: "Modern Patio Lounger", price: 599, category: "outdoor", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", glb: "/models/product-61.glb", usdz: "/models/product-61.usdz", rating: 4.8 },

  { id: 62, name: "Outdoor Dining Chair", price: 199, category: "outdoor", image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353", glb: "/models/product-62.glb", usdz: "/models/product-62.usdz", rating: 4.7 },

  { id: 63, name: "Classic Wood Nightstand", price: 249, category: "bedroom", image: "https://images.unsplash.com/photo-1600585154154-7124f5c1c1c3", glb: "/models/product-63.glb", usdz: "/models/product-63.usdz", rating: 4.8 },

  { id: 64, name: "Luxury King Mattress", price: 1299, category: "bedroom", image: "https://images.unsplash.com/photo-1585559605151-8f6c9c7a5e2f", glb: "/models/product-64.glb", usdz: "/models/product-64.usdz", rating: 4.9 },

  { id: 65, name: "Modern Dining Bench", price: 349, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-65.glb", usdz: "/models/product-65.usdz", rating: 4.7 },

  { id: 66, name: "Velvet Dining Chair", price: 219, category: "dining", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-66.glb", usdz: "/models/product-66.usdz", rating: 4.8 },

  { id: 67, name: "Outdoor Sofa Set", price: 1799, category: "outdoor", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", glb: "/models/product-67.glb", usdz: "/models/product-67.usdz", rating: 4.9 },

  { id: 68, name: "Minimalist Wall Shelf", price: 129, category: "decor", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-68.glb", usdz: "/models/product-68.usdz", rating: 4.7 },

  { id: 69, name: "Modern Media Stand", price: 599, category: "living", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", glb: "/models/product-69.glb", usdz: "/models/product-69.usdz", rating: 4.8 },

  { id: 70, name: "Luxury Duvet Set", price: 189, category: "bedroom", image: "https://images.unsplash.com/photo-1585559605151-8f6c9c7a5e2f", glb: "/models/product-70.glb", usdz: "/models/product-70.usdz", rating: 4.9 },

  { id: 71, name: "Glass Top Desk", price: 449, category: "office", image: "https://images.unsplash.com/photo-1582582494700-1c7c3d6c02ab", glb: "/models/product-71.glb", usdz: "/models/product-71.usdz", rating: 4.8 },

  { id: 72, name: "ErgoPro Office Chair", price: 379, category: "office", image: "https://images.unsplash.com/photo-1616627985723-8f3cfc3d9fc1", glb: "/models/product-72.glb", usdz: "/models/product-72.usdz", rating: 4.9 },

  { id: 73, name: "Soft Knit Throw", price: 69, category: "decor", image: "https://images.unsplash.com/photo-1586105251261-72a756497a12", glb: "/models/product-73.glb", usdz: "/models/product-73.usdz", rating: 4.8 },

  { id: 74, name: "Walnut Side Table", price: 229, category: "living", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-74.glb", usdz: "/models/product-74.usdz", rating: 4.7 },

  { id: 75, name: "Outdoor Lounge Set", price: 1599, category: "outdoor", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85", glb: "/models/product-75.glb", usdz: "/models/product-75.usdz", rating: 4.9 },

  { id: 76, name: "Modern Dining Table", price: 899, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-76.glb", usdz: "/models/product-76.usdz", rating: 4.8 },

  { id: 77, name: "Velvet Sofa", price: 1299, category: "living", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7", glb: "/models/product-77.glb", usdz: "/models/product-77.usdz", rating: 4.9 },

  { id: 78, name: "Classic Wood Dresser", price: 749, category: "bedroom", image: "https://images.unsplash.com/photo-1600585154154-7124f5c1c1c3", glb: "/models/product-78.glb", usdz: "/models/product-78.usdz", rating: 4.8 },

  { id: 79, name: "NordWood Dining Sideboard", price: 899, category: "dining", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc", glb: "/models/product-79.glb", usdz: "/models/product-79.usdz", rating: 4.9 },

  { id: 80, name: "SunHaven Outdoor Sofa Set", price: 1699, category: "outdoor", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511", glb: "/models/product-80.glb", usdz: "/models/product-80.usdz", rating: 5.0 }

];
