// ---------------------------------------------
// PRODUCTS CATALOG (80 ITEMS, 4 CATEGORIES)
// ---------------------------------------------

const products = [
  // -----------------------------------------
  // LIVING ROOM (1–20)
  // -----------------------------------------
  {
    id: 1,
    name: "Modern Cloud Sofa",
    category: "living-room",
    price: 1299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
    glb: "models/living-room/sofa-01.glb",
    usdz: "models/living-room/sofa-01.usdz"
  },
  {
    id: 2,
    name: "Low-Profile Lounge Sofa",
    category: "living-room",
    price: 1199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1617099404995-0a2b4f3a9e22",
    glb: "models/living-room/sofa-02.glb",
    usdz: "models/living-room/sofa-02.usdz"
  },
  {
    id: 3,
    name: "Curved Velvet Sofa",
    category: "living-room",
    price: 1399,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1617099404995-0ce4fd0d2972",
    glb: "models/living-room/sofa-03.glb",
    usdz: "models/living-room/sofa-03.usdz"
  },
  {
    id: 4,
    name: "Mid-Century Armchair",
    category: "living-room",
    price: 499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
    glb: "models/living-room/chair-01.glb",
    usdz: "models/living-room/chair-01.usdz"
  },
  {
    id: 5,
    name: "Leather Lounge Chair",
    category: "living-room",
    price: 649,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353",
    glb: "models/living-room/chair-02.glb",
    usdz: "models/living-room/chair-02.usdz"
  },
  {
    id: 6,
    name: "Bouclé Accent Chair",
    category: "living-room",
    price: 579,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41",
    glb: "models/living-room/chair-03.glb",
    usdz: "models/living-room/chair-03.usdz"
  },
  {
    id: 7,
    name: "Walnut Coffee Table",
    category: "living-room",
    price: 399,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/living-room/coffee-table-01.glb",
    usdz: "models/living-room/coffee-table-01.usdz"
  },
  {
    id: 8,
    name: "Round Glass Coffee Table",
    category: "living-room",
    price: 349,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
    glb: "models/living-room/coffee-table-02.glb",
    usdz: "models/living-room/coffee-table-02.usdz"
  },
  {
    id: 9,
    name: "Marble Top Side Table",
    category: "living-room",
    price: 259,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/living-room/side-table-01.glb",
    usdz: "models/living-room/side-table-01.usdz"
  },
  {
    id: 10,
    name: "Minimalist TV Console",
    category: "living-room",
    price: 699,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1617099404995-0ce4fd0d2972?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/living-room/console-01.glb",
    usdz: "models/living-room/console-01.usdz"
  },
  {
    id: 11,
    name: "Oak Media Unit",
    category: "living-room",
    price: 749,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1617099404995-0a2b4f3a9e22?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/living-room/console-02.glb",
    usdz: "models/living-room/console-02.usdz"
  },
  {
    id: 12,
    name: "Textured Area Rug",
    category: "living-room",
    price: 299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/living-room/rug-01.glb",
    usdz: "models/living-room/rug-01.usdz"
  },
  {
    id: 13,
    name: "Neutral Woven Rug",
    category: "living-room",
    price: 259,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    glb: "models/living-room/rug-02.glb",
    usdz: "models/living-room/rug-02.usdz"
  },
  {
    id: 14,
    name: "Slim Floor Lamp",
    category: "living-room",
    price: 189,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/living-room/lamp-01.glb",
    usdz: "models/living-room/lamp-01.usdz"
  },
  {
    id: 15,
    name: "Arc Floor Lamp",
    category: "living-room",
    price: 229,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/living-room/lamp-02.glb",
    usdz: "models/living-room/lamp-02.usdz"
  },
  {
    id: 16,
    name: "Floating Wall Shelf Set",
    category: "living-room",
    price: 179,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/living-room/shelf-01.glb",
    usdz: "models/living-room/shelf-01.usdz"
  },
  {
    id: 17,
    name: "Slatted Wood Sideboard",
    category: "living-room",
    price: 899,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1617099404995-0ce4fd0d2972?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/living-room/sideboard-01.glb",
    usdz: "models/living-room/sideboard-01.usdz"
  },
  {
    id: 18,
    name: "Compact Storage Cabinet",
    category: "living-room",
    price: 549,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/living-room/cabinet-01.glb",
    usdz: "models/living-room/cabinet-01.usdz"
  },
  {
    id: 19,
    name: "Pair of Nesting Tables",
    category: "living-room",
    price: 279,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/living-room/side-table-02.glb",
    usdz: "models/living-room/side-table-02.usdz"
  },
  {
    id: 20,
    name: "Modular Sectional Sofa",
    category: "living-room",
    price: 1899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/living-room/sofa-04.glb",
    usdz: "models/living-room/sofa-04.usdz"
  },

  // -----------------------------------------
  // BEDROOM (21–40)
  // -----------------------------------------
  {
    id: 21,
    name: "Minimalist Oak Platform Bed",
    category: "bedroom",
    price: 999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    glb: "models/bedroom/bed-01.glb",
    usdz: "models/bedroom/bed-01.usdz"
  },
  {
    id: 22,
    name: "Upholstered Headboard Bed",
    category: "bedroom",
    price: 1099,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/bedroom/bed-02.glb",
    usdz: "models/bedroom/bed-02.usdz"
  },
  {
    id: 23,
    name: "Low Platform Bed Frame",
    category: "bedroom",
    price: 899,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/bedroom/bed-03.glb",
    usdz: "models/bedroom/bed-03.usdz"
  },
  {
    id: 24,
    name: "Walnut Nightstand",
    category: "bedroom",
    price: 249,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/bedroom/nightstand-01.glb",
    usdz: "models/bedroom/nightstand-01.usdz"
  },
  {
    id: 25,
    name: "Two-Drawer Nightstand",
    category: "bedroom",
    price: 279,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/bedroom/nightstand-02.glb",
    usdz: "models/bedroom/nightstand-02.usdz"
  },
  {
    id: 26,
    name: "Six-Drawer Dresser",
    category: "bedroom",
    price: 799,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1617099404995-0ce4fd0d2972?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/bedroom/dresser-01.glb",
    usdz: "models/bedroom/dresser-01.usdz"
  },
  {
    id: 27,
    name: "Tallboy Chest of Drawers",
    category: "bedroom",
    price: 749,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/bedroom/dresser-02.glb",
    usdz: "models/bedroom/dresser-02.usdz"
  },
  {
    id: 28,
    name: "Cozy Accent Chair",
    category: "bedroom",
    price: 459,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/bedroom/chair-01.glb",
    usdz: "models/bedroom/chair-01.usdz"
  },
  {
    id: 29,
    name: "Bedroom Bench",
    category: "bedroom",
    price: 329,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/bedroom/bench-01.glb",
    usdz: "models/bedroom/bench-01.usdz"
  },
  {
    id: 30,
    name: "Soft Area Rug",
    category: "bedroom",
    price: 259,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/bedroom/rug-01.glb",
    usdz: "models/bedroom/rug-01.usdz"
  },
  {
    id: 31,
    name: "Framed Wall Mirror",
    category: "bedroom",
    price: 199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/bedroom/mirror-01.glb",
    usdz: "models/bedroom/mirror-01.usdz"
  },
  {
    id: 32,
    name: "Floating Bedside Shelf",
    category: "bedroom",
    price: 149,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/bedroom/shelf-01.glb",
    usdz: "models/bedroom/shelf-01.usdz"
  },
  {
    id: 33,
    name: "Linen Storage Ottoman",
    category: "bedroom",
    price: 299,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/bedroom/ottoman-01.glb",
    usdz: "models/bedroom/ottoman-01.usdz"
  },
  {
    id: 34,
    name: "Minimal Bedside Lamp",
    category: "bedroom",
    price: 129,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/bedroom/lamp-01.glb",
    usdz: "models/bedroom/lamp-01.usdz"
  },
  {
    id: 35,
    name: "Sculptural Table Lamp",
    category: "bedroom",
    price: 159,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/bedroom/lamp-02.glb",
    usdz: "models/bedroom/lamp-02.usdz"
  },
  {
    id: 36,
    name: "Compact Writing Desk",
    category: "bedroom",
    price: 449,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/bedroom/desk-01.glb",
    usdz: "models/bedroom/desk-01.usdz"
  },
  {
    id: 37,
    name: "Vanity Table with Mirror",
    category: "bedroom",
    price: 599,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/bedroom/vanity-01.glb",
    usdz: "models/bedroom/vanity-01.usdz"
  },
  {
    id: 38,
    name: "Tall Wardrobe Cabinet",
    category: "bedroom",
    price: 999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1617099404995-0ce4fd0d2972?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/bedroom/wardrobe-01.glb",
    usdz: "models/bedroom/wardrobe-01.usdz"
  },
  {
    id: 39,
    name: "Open Clothing Rack",
    category: "bedroom",
    price: 259,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-15",
    glb: "models/bedroom/rack-01.glb",
    usdz: "models/bedroom/rack-01.usdz"
  },
  {
    id: 40,
    name: "Padded Storage Bench",
    category: "bedroom",
    price: 349,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1549187774-b4e9b0445b41?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-15",
    glb: "models/bedroom/bench-02.glb",
    usdz: "models/bedroom/bench-02.usdz"
  },

  // -----------------------------------------
  // DINING (41–60)
  // -----------------------------------------
  {
    id: 41,
    name: "Walnut Dining Table",
    category: "dining",
    price: 1299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    glb: "models/dining/table-01.glb",
    usdz: "models/dining/table-01.usdz"
  },
  {
    id: 42,
    name: "Extendable Dining Table",
    category: "dining",
    price: 1499,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/dining/table-02.glb",
    usdz: "models/dining/table-02.usdz"
  },
  {
    id: 43,
    name: "Round Pedestal Table",
    category: "dining",
    price: 999,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/dining/table-03.glb",
    usdz: "models/dining/table-03.usdz"
  },
  {
    id: 44,
    name: "Set of 2 Dining Chairs",
    category: "dining",
    price: 399,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/dining/chair-01.glb",
    usdz: "models/dining/chair-01.usdz"
  },
  {
    id: 45,
    name: "Upholstered Dining Chairs",
    category: "dining",
    price: 449,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/dining/chair-02.glb",
    usdz: "models/dining/chair-02.usdz"
  },
  {
    id: 46,
    name: "Bench Seating",
    category: "dining",
    price: 349,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/dining/bench-01.glb",
    usdz: "models/dining/bench-01.usdz"
  },
  {
    id: 47,
    name: "Sideboard Buffet Cabinet",
    category: "dining",
    price: 999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/dining/sideboard-01.glb",
    usdz: "models/dining/sideboard-01.usdz"
  },
  {
    id: 48,
    name: "Glass Door Hutch",
    category: "dining",
    price: 1199,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/dining/hutch-01.glb",
    usdz: "models/dining/hutch-01.usdz"
  },
  {
    id: 49,
    name: "Bar Cart",
    category: "dining",
    price: 299,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/dining/barcart-01.glb",
    usdz: "models/dining/barcart-01.usdz"
  },
  {
    id: 50,
    name: "Counter Stools (Set of 2)",
    category: "dining",
    price: 379,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-15",
    glb: "models/dining/stool-01.glb",
    usdz: "models/dining/stool-01.usdz"
  },
  {
    id: 51,
    name: "Pendant Light Trio",
    category: "dining",
    price: 429,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-15",
    glb: "models/dining/light-01.glb",
    usdz: "models/dining/light-01.usdz"
  },
  {
    id: 52,
    name: "Rectangular Area Rug",
    category: "dining",
    price: 329,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/dining/rug-01.glb",
    usdz: "models/dining/rug-01.usdz"
  },
  {
    id: 53,
    name: "Wall-Mounted Shelf Set",
    category: "dining",
    price: 189,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80",
    glb: "models/dining/shelf-01.glb",
    usdz: "models/dining/shelf-01.usdz"
  },
  {
    id: 54,
    name: "Wine Storage Cabinet",
    category: "dining",
    price: 649,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/dining/wine-01.glb",
    usdz: "models/dining/wine-01.usdz"
  },
  {
    id: 55,
    name: "Compact Bistro Table",
    category: "dining",
    price: 599,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-10",
    glb: "models/dining/table-04.glb",
    usdz: "models/dining/table-04.usdz"
  },
  {
    id: 56,
    name: "Slatted Dining Bench",
    category: "dining",
    price: 329,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-15",
    glb: "models/dining/bench-02.glb",
    usdz: "models/dining/bench-02.usdz"
  },
  {
    id: 57,
    name: "Curved Back Dining Chairs",
    category: "dining",
    price: 479,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/dining/chair-03.glb",
    usdz: "models/dining/chair-03.usdz"
  },
  {
    id: 58,
    name: "Slim Console Table",
    category: "dining",
    price: 449,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/dining/console-01.glb",
    usdz: "models/dining/console-01.usdz"
  },
  {
    id: 59,
    name: "Wall Art Triptych",
    category: "dining",
    price: 299,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-20",
    glb: "models/dining/art-01.glb",
    usdz: "models/dining/art-01.usdz"
  },
  {
    id: 60,
    name: "Round Dining Set (Table + 4 Chairs)",
    category: "dining",
    price: 1799,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-15",
    glb: "models/dining/set-01.glb",
    usdz: "models/dining/set-01.usdz"
  },

  // -----------------------------------------
  // OUTDOOR (61–80)
  // -----------------------------------------
  {
    id: 61,
    name: "Teak Outdoor Lounge Chair",
    category: "outdoor",
    price: 499,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-5",
    glb: "models/outdoor/chair-01.glb",
    usdz: "models/outdoor/chair-01.usdz"
  },
  {
    id: 62,
    name: "Outdoor Sofa with Cushions",
    category: "outdoor",
    price: 1299,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-15",
    glb: "models/outdoor/sofa-01.glb",
    usdz: "models/outdoor/sofa-01.usdz"
  },
  {
    id: 63,
    name: "Patio Dining Table",
    category: "outdoor",
    price: 899,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-20",
    glb: "models/outdoor/table-01.glb",
    usdz: "models/outdoor/table-01.usdz"
  },
  {
    id: 64,
    name: "Outdoor Dining Chairs (Set of 4)",
    category: "outdoor",
    price: 699,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-25",
    glb: "models/outdoor/chair-02.glb",
    usdz: "models/outdoor/chair-02.usdz"
  },
  {
    id: 65,
    name: "Sun Lounger",
    category: "outdoor",
    price: 449,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-30",
    glb: "models/outdoor/lounger-01.glb",
    usdz: "models/outdoor/lounger-01.usdz"
  },
  {
    id: 66,
    name: "Outdoor Sectional Set",
    category: "outdoor",
    price: 1999,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-35",
    glb: "models/outdoor/sofa-02.glb",
    usdz: "models/outdoor/sofa-02.usdz"
  },
  {
    id: 67,
    name: "Fire Pit Table",
    category: "outdoor",
    price: 799,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-40",
    glb: "models/outdoor/firepit-01.glb",
    usdz: "models/outdoor/firepit-01.usdz"
  },
  {
    id: 68,
    name: "Outdoor Coffee Table",
    category: "outdoor",
    price: 349,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-45",
    glb: "models/outdoor/coffee-table-01.glb",
    usdz: "models/outdoor/coffee-table-01.usdz"
  },
  {
    id: 69,
    name: "Patio Umbrella",
    category: "outdoor",
    price: 259,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-50",
    glb: "models/outdoor/umbrella-01.glb",
    usdz: "models/outdoor/umbrella-01.usdz"
  },
  {
    id: 70,
    name: "Outdoor Rug",
    category: "outdoor",
    price: 229,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-55",
    glb: "models/outdoor/rug-01.glb",
    usdz: "models/outdoor/rug-01.usdz"
  },
  {
    id: 71,
    name: "Hanging Egg Chair",
    category: "outdoor",
    price: 599,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-60",
    glb: "models/outdoor/chair-03.glb",
    usdz: "models/outdoor/chair-03.usdz"
  },
  {
    id: 72,
    name: "Outdoor Storage Box",
    category: "outdoor",
    price: 329,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-65",
    glb: "models/outdoor/storage-01.glb",
    usdz: "models/outdoor/storage-01.usdz"
  },
  {
    id: 73,
    name: "String Light Set",
    category: "outdoor",
    price: 149,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-70",
    glb: "models/outdoor/lights-01.glb",
    usdz: "models/outdoor/lights-01.usdz"
  },
  {
    id: 74,
    name: "Outdoor Side Table",
    category: "outdoor",
    price: 199,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-75",
    glb: "models/outdoor/side-table-01.glb",
    usdz: "models/outdoor/side-table-01.usdz"
  },
  {
    id: 75,
    name: "Double Chaise Lounge",
    category: "outdoor",
    price: 899,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-80",
    glb: "models/outdoor/lounger-02.glb",
    usdz: "models/outdoor/lounger-02.usdz"
  },
  {
    id: 76,
    name: "Outdoor Bar Table",
    category: "outdoor",
    price: 649,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-85",
    glb: "models/outdoor/bar-01.glb",
    usdz: "models/outdoor/bar-01.usdz"
  },
  {
    id: 77,
    name: "Outdoor Bar Stools (Set of 2)",
    category: "outdoor",
    price: 379,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-90",
    glb: "models/outdoor/stool-01.glb",
    usdz: "models/outdoor/stool-01.usdz"
  },
  {
    id: 78,
    name: "Planter Set",
    category: "outdoor",
    price: 189,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-95",
    glb: "models/outdoor/planter-01.glb",
    usdz: "models/outdoor/planter-01.usdz"
  },
  {
    id: 79,
    name: "Outdoor Lantern Set",
    category: "outdoor",
    price: 159,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-100",
    glb: "models/outdoor/lantern-01.glb",
    usdz: "models/outdoor/lantern-01.usdz"
  },
  {
    id: 80,
    name: "Complete Outdoor Lounge Set",
    category: "outdoor",
    price: 2499,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80&sat=-105",
    glb: "models/outdoor/set-01.glb",
    usdz: "models/outdoor/set-01.usdz"
  }
];

function searchProducts(query) {
  query = query.toLowerCase();
  return products.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query) ||
    (p.description && p.description.toLowerCase().includes(query))
  );
}
