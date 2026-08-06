import { Link2, Search, FileSearch, Wrench, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = { Link2, Search, FileSearch, Wrench };

export default function ToolIcon({ name, className }: { name: string; className?: string }) {
  const Icon = ICONS[name] || Wrench;
  return <Icon className={className} strokeWidth={1.5} />;
}
