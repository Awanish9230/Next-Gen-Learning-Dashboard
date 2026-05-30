import { Code2, Layers3, Database, Network, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Layers3,
  Database,
  Network,
};

export function getIconByName(name: string): LucideIcon {
  return iconMap[name] || Code2;
}
