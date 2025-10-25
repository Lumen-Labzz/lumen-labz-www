import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: crypto.randomUUID(),
    name: "Aurora Ceramic Mug",
    imageUrl: "/products/product-1.png",
    price: 18.99,
    description:
      "A handcrafted ceramic mug with a matte finish, perfect for your morning coffee ritual.",
    category: "Home & Kitchen",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Nimbus Wireless Headphones",
    imageUrl: "/products/product-2.png",
    price: 149.0,
    description:
      "Experience deep bass and active noise cancellation in a sleek, foldable design.",
    category: "Electronics",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Luna Desk Lamp",
    imageUrl: "/products/product-3.png",
    price: 42.5,
    description:
      "Modern minimalist LED lamp with adjustable brightness and color temperature.",
    category: "Office",
    inStock: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Eclipse Smartwatch",
    imageUrl: "/products/product-4.png",
    price: 219.99,
    description:
      "Track your fitness and sleep with a smartwatch that blends tech and style effortlessly.",
    category: "Wearables",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Haven Linen Throw Blanket",
    imageUrl: "/products/product-5.png",
    price: 65.0,
    description:
      "Soft, breathable linen throw blanket that adds warmth and elegance to any space.",
    category: "Home & Living",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Terra Eco Water Bottle",
    imageUrl: "/products/product-6.png",
    price: 24.95,
    description:
      "Sustainable stainless steel bottle that keeps drinks hot or cold for hours.",
    category: "Outdoors",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Pixel Pro Keyboard",
    imageUrl: "/products/product-7.png",
    price: 119.99,
    description:
      "Mechanical keyboard with customizable RGB lighting and ergonomic key travel.",
    category: "Tech Accessories",
    inStock: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Cascade Minimalist Backpack",
    imageUrl: "/products/product-8.png",
    price: 89.5,
    description:
      "Water-resistant backpack with a sleek profile and laptop compartment for everyday use.",
    category: "Travel",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Solstice Scented Candle",
    imageUrl: "/products/product-9.png",
    price: 32.0,
    description:
      "Hand-poured soy candle with notes of cedarwood, amber, and vanilla.",
    category: "Lifestyle",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Nova Standing Mirror",
    imageUrl: "/products/product-10.png",
    price: 120.0,
    description:
      "Full-length mirror with an elegant oak frame that brings natural warmth to your space.",
    category: "Home Decor",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Zenith Yoga Mat",
    imageUrl: "/products/product-11.png",
    price: 39.99,
    description:
      "Eco-friendly yoga mat with a non-slip surface and excellent cushioning for all poses.",
    category: "Fitness",
    inStock: true,
  },
  {
    id: crypto.randomUUID(),
    name: "Echo Bluetooth Speaker",
    imageUrl: "/products/product-12.png",
    price: 79.99,
    description:
      "Compact speaker with 360° sound, long battery life, and elegant matte finish.",
    category: "Audio",
    inStock: true,
  },
];
