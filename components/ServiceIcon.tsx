import { LayoutGrid, Clapperboard, Rocket, ShieldCheck, PlaySquare, Camera, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  LayoutGrid,
  Clapperboard,
  Rocket,
  ShieldCheck,
  PlaySquare,
  Camera,
};

export default function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] || LayoutGrid;
  return <Icon className={className} strokeWidth={1.5} />;
}
