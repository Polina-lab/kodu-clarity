import stretch from "@/assets/p-stretch.jpg";
import stretch2 from "@/assets/p-stretch2.jpg";
import suspended from "@/assets/p-suspended.jpg";
import suspended2 from "@/assets/p-suspended2.jpg";
import acoustic from "@/assets/p-acoustic.jpg";
import lighting from "@/assets/p-lighting.jpg";
import modern from "@/assets/p-modern.jpg";
import custom from "@/assets/p-custom.jpg";

export type Category = "stretch" | "suspended" | "acoustic" | "lighting" | "modern" | "custom";

export const portfolio: { id: number; title: string; category: Category; img: string }[] = [
  { id: 1, title: "Glossy stretch ceiling — Tallinn apartment", category: "stretch", img: stretch },
  { id: 2, title: "Starlight bedroom ceiling", category: "stretch", img: stretch2 },
  { id: 3, title: "Matte stretch in family living room", category: "stretch", img: stretch },
  { id: 4, title: "Multi-level suspended ceiling", category: "suspended", img: suspended },
  { id: 5, title: "Coffered kitchen ceiling", category: "suspended", img: suspended2 },
  { id: 6, title: "Gypsum living room design", category: "suspended", img: suspended },
  { id: 7, title: "Wooden acoustic home office", category: "acoustic", img: acoustic },
  { id: 8, title: "Acoustic panels — studio", category: "acoustic", img: acoustic },
  { id: 9, title: "Integrated LED dining room", category: "lighting", img: lighting },
  { id: 10, title: "Linear ceiling lighting", category: "lighting", img: lighting },
  { id: 11, title: "Modern coffer design", category: "modern", img: modern },
  { id: 12, title: "Minimalist apartment ceiling", category: "modern", img: modern },
  { id: 13, title: "Curved wood reading nook", category: "custom", img: custom },
  { id: 14, title: "Custom multi-level ceiling", category: "custom", img: custom },
  { id: 15, title: "Bespoke arched ceiling", category: "custom", img: custom },
];
