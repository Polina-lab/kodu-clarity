import stretch from "@/assets/p-stretch.jpg";
import stretch2 from "@/assets/p-stretch2.jpg";
import suspended from "@/assets/p-suspended.jpg";
import suspended2 from "@/assets/p-suspended2.jpg";
import acoustic from "@/assets/p-acoustic.jpg";
import lighting from "@/assets/p-lighting.jpg";
import modern from "@/assets/p-modern.jpg";
import custom from "@/assets/p-custom.jpg";

export type Category = "stretch" | "suspended" | "acoustic" | "lighting" | "modern" | "custom";

export type PortfolioItem = {
  id: number;
  title: string;
  category: Category;
  img: string;
  images: string[];
};

// Each project supports up to 7 images. Placeholder set uses existing category imagery.
export const portfolio: PortfolioItem[] = [
  { id: 1, title: "Glossy stretch ceiling — Tallinn apartment", category: "stretch", img: stretch, images: [stretch, stretch2, lighting] },
  { id: 2, title: "Starlight bedroom ceiling", category: "stretch", img: stretch2, images: [stretch2, stretch, modern] },
  { id: 3, title: "Matte stretch in family living room", category: "stretch", img: stretch, images: [stretch, stretch2] },
  { id: 4, title: "Multi-level suspended ceiling", category: "suspended", img: suspended, images: [suspended, suspended2, modern] },
  { id: 5, title: "Coffered kitchen ceiling", category: "suspended", img: suspended2, images: [suspended2, suspended] },
  { id: 6, title: "Gypsum living room design", category: "suspended", img: suspended, images: [suspended, suspended2, custom] },
  { id: 7, title: "Wooden acoustic home office", category: "acoustic", img: acoustic, images: [acoustic, custom] },
  { id: 8, title: "Acoustic panels — studio", category: "acoustic", img: acoustic, images: [acoustic, modern] },
  { id: 9, title: "Integrated LED dining room", category: "lighting", img: lighting, images: [lighting, stretch, modern] },
  { id: 10, title: "Linear ceiling lighting", category: "lighting", img: lighting, images: [lighting, stretch2] },
  { id: 11, title: "Modern coffer design", category: "modern", img: modern, images: [modern, suspended, custom] },
  { id: 12, title: "Minimalist apartment ceiling", category: "modern", img: modern, images: [modern, stretch] },
  { id: 13, title: "Curved wood reading nook", category: "custom", img: custom, images: [custom, acoustic] },
  { id: 14, title: "Custom multi-level ceiling", category: "custom", img: custom, images: [custom, suspended2, modern] },
  { id: 15, title: "Bespoke arched ceiling", category: "custom", img: custom, images: [custom, acoustic, modern] },
];
