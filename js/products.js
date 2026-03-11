const products = [

  // --------------------------------------------------
  // MIXED CATALOG FEED (IDs 1–80)
  // --------------------------------------------------

  {
    id: 1,
    name: "Modern Gray Sofa",
    price: 899,
    category: "living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 2,
    name: "HavenSleep Upholstered Queen Bed",
    price: 1199,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 3,
    name: "NordWood Walnut Dining Table",
    price: 749,
    category: "dining",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 4,
    name: "CozyHome Outdoor Lounge Chair",
    price: 229,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 5,
    name: "Aurelia Velvet Accent Chair",
    price: 349,
    category: "living",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 6,
    name: "SimpleLiving Nightstand",
    price: 159,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616627988854-5eac52328de0",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 7,
    name: "Minimalist Glass Coffee Table",
    price: 289,
    category: "living",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 8,
    name: "Oslo Tufted King Bed",
    price: 1399,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 9,
    name: "Verona Marble Dining Table",
    price: 999,
    category: "dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 10,
    name: "Patio Breeze Outdoor Sofa",
    price: 699,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 11,
    name: "Walnut Media Console",
    price: 499,
    category: "living",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 12,
    name: "HavenSleep Memory Foam Mattress",
    price: 899,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 13,
    name: "Rustic Farmhouse Dining Bench",
    price: 299,
    category: "dining",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 14,
    name: "SunHaven Outdoor Dining Set",
    price: 1299,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 15,
    name: "Luxury Leather Recliner",
    price: 799,
    category: "living",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 16,
    name: "NordWood Oak Bed Frame",
    price: 899,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 17,
    name: "Minimalist Dining Chairs (Set of 4)",
    price: 349,
    category: "dining",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 18,
    name: "CozyHome Outdoor Coffee Table",
    price: 199,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 19,
    name: "Aurelia Velvet Sofa",
    price: 1299,
    category: "living",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
    glb: "",
    usdz: "",
    rating: 5.0
  },

  {
    id: 20,
    name: "HavenSleep Premium Dresser",
    price: 649,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 21,
    name: "Verona Luxe Chaise Lounge",
    price: 899,
    category: "living",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 22,
    name: "CozyHome 6‑Drawer Chest",
    price: 499,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 23,
    name: "NordWood Round Dining Table",
    price: 699,
    category: "dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 24,
    name: "SunHaven Outdoor Bistro Set",
    price: 349,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 25,
    name: "Aurelia Modern Floor Lamp",
    price: 129,
    category: "living",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 26,
    name: "HavenSleep Tufted Headboard",
    price: 279,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 27,
    name: "Minimalist Dining Buffet",
    price: 599,
    category: "dining",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 28,
    name: "Patio Breeze Wicker Chair",
    price: 189,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 29,
    name: "Luxury Knit Ottoman",
    price: 149,
    category: "living",
    image: "https://images.unsplash.com/photo-1616627988854-5eac52328de0",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 30,
    name: "SimpleLiving Platform Bed",
    price: 499,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 31,
    name: "Verona High‑Back Dining Chairs (Set of 2)",
    price: 259,
    category: "dining",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 32,
    name: "SunHaven Outdoor Daybed",
    price: 899,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 33,
    name: "Aurelia Luxe Sofa Chair",
    price: 379,
    category: "living",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 34,
    name: "HavenSleep Linen Storage Bench",
    price: 229,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616627988854-5eac52328de0",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 35,
    name: "NordWood Extendable Dining Table",
    price: 899,
    category: "dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 36,
    name: "CozyHome Outdoor Rocking Chair",
    price: 249,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 37,
    name: "Verona Glass‑Top Coffee Table",
    price: 329,
    category: "living",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 38,
    name: "SimpleLiving 2‑Drawer Nightstand",
    price: 139,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 39,
    name: "Minimalist Dining Hutch",
    price: 749,
    category: "dining",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 40,
    name: "SunHaven Outdoor Sectional",
    price: 1299,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 5.0
  },

  {
    id: 41,
    name: "Aurelia Luxe Sideboard",
    price: 799,
    category: "dining",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 42,
    name: "CozyHome Fabric Loveseat",
    price: 649,
    category: "living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 43,
    name: "HavenSleep SoftTouch Blanket Chest",
    price: 259,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616627988854-5eac52328de0",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 44,
    name: "SunHaven Outdoor Bar Table",
    price: 399,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 45,
    name: "Verona Modern Sectional",
    price: 1499,
    category: "living",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
    glb: "",
    usdz: "",
    rating: 5.0
  },

  {
    id: 46,
    name: "SimpleLiving Twin Storage Bed",
    price: 429,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 47,
    name: "NordWood Dining Stool",
    price: 129,
    category: "dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 48,
    name: "Patio Breeze Outdoor Sofa Chair",
    price: 289,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 49,
    name: "Aurelia Gold‑Trim Coffee Table",
    price: 379,
    category: "living",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 50,
    name: "HavenSleep Deluxe Nightstand",
    price: 199,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 51,
    name: "Minimalist Steel‑Leg Dining Table",
    price: 649,
    category: "dining",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 52,
    name: "SunHaven Outdoor Chaise",
    price: 499,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 53,
    name: "Verona Luxe Armchair",
    price: 429,
    category: "living",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 54,
    name: "SimpleLiving Fabric Wardrobe",
    price: 349,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616627988854-5eac52328de0",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 55,
    name: "NordWood Dining Cabinet",
    price: 799,
    category: "dining",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 56,
    name: "Patio Breeze Outdoor Loveseat",
    price: 579,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 57,
    name: "Aurelia Marble‑Top End Table",
    price: 219,
    category: "living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 58,
    name: "HavenSleep Premium Bedside Chest",
    price: 329,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 59,
    name: "Minimalist Dining Table Set (4‑Piece)",
    price: 549,
    category: "dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 60,
    name: "SunHaven Outdoor Fire‑Table",
    price: 899,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 61,
    name: "Verona Luxe Media Cabinet",
    price: 899,
    category: "living",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 62,
    name: "HavenSleep CloudSoft King Mattress",
    price: 1299,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1586105251261-72a756497a12",
    glb: "",
    usdz: "",
    rating: 5.0
  },

  {
    id: 63,
    name: "NordWood Rustic Dining Table",
    price: 799,
    category: "dining",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 64,
    name: "SunHaven Outdoor Lounge Set",
    price: 1499,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 5.0
  },

  {
    id: 65,
    name: "Aurelia Modern Recliner",
    price: 699,
    category: "living",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 66,
    name: "SimpleLiving Sliding Door Wardrobe",
    price: 579,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616627988854-5eac52328de0",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 67,
    name: "Minimalist Dining Bench",
    price: 249,
    category: "dining",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 68,
    name: "Patio Breeze Outdoor Dining Table",
    price: 699,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 69,
    name: "Verona Luxe Leather Sofa",
    price: 1599,
    category: "living",
    image: "https://images.unsplash.com/photo-1615873968403-89e068629265",
    glb: "",
    usdz: "",
    rating: 5.0
  },

  {
    id: 70,
    name: "HavenSleep Padded Storage Bed",
    price: 899,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 71,
    name: "NordWood Dining Chair Set (2‑Piece)",
    price: 229,
    category: "dining",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 72,
    name: "SunHaven Outdoor Swing Chair",
    price: 349,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 73,
    name: "Aurelia Gold‑Frame Sofa",
    price: 1399,
    category: "living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 74,
    name: "SimpleLiving 5‑Drawer Dresser",
    price: 379,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.6
  },

  {
    id: 75,
    name: "Minimalist Glass Dining Table",
    price: 599,
    category: "dining",
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 76,
    name: "Patio Breeze Outdoor Ottoman",
    price: 159,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    glb: "",
    usdz: "",
    rating: 4.5
  },

  {
    id: 77,
    name: "Verona Luxe Coffee Table",
    price: 449,
    category: "living",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "",
    usdz: "",
    rating: 4.8
  },

  {
    id: 78,
    name: "HavenSleep Upholstered Bench",
    price: 259,
    category: "bedroom",
    image: "https://images.unsplash.com/photo-1616627988854-5eac52328de0",
    glb: "",
    usdz: "",
    rating: 4.7
  },

  {
    id: 79,
    name: "NordWood Dining Sideboard",
    price: 899,
    category: "dining",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "",
    usdz: "",
    rating: 4.9
  },

  {
    id: 80,
    name: "SunHaven Outdoor Sofa Set",
    price: 1699,
    category: "outdoor",
    image: "https://images.unsplash.com/photo-1582582429413-0ef9c7e7f6f1",
    glb: "",
    usdz: "",
    rating: 5.0
  }

];
