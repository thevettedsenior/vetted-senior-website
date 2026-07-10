import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  BellRing,
  Brain,
  Building2,
  Car,
  ClipboardList,
  Compass,
  Ear,
  FileHeart,
  Flower2,
  HeartHandshake,
  HeartPulse,
  Home,
  KeyRound,
  MessageCircle,
  MessagesSquare,
  Scale,
  ShieldAlert,
  Sofa,
  Stethoscope,
  Truck,
  Users,
  UtensilsCrossed,
  Wrench,
} from "lucide-react";

/**
 * Real icons for situations and help categories, keyed by slug. The emoji in
 * directory-data.ts stay as a fallback for anywhere not yet migrated.
 */
const SITUATION_ICONS: Record<string, LucideIcon> = {
  "parent-had-a-fall": HeartPulse,
  "dementia-concerns": Brain,
  "staying-at-home": Sofa,
  "caregiver-burnout": HeartHandshake,
  "parent-refuses-help": MessagesSquare,
  "senior-living-alone": KeyRound,
  "recently-widowed": Flower2,
  "hospital-discharge-planning": ClipboardList,
  "recognizing-elder-abuse": ShieldAlert,
};

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  "home-care": Home,
  "doctors-pharmacy-medication": Stethoscope,
  "mobility-equipment": Accessibility,
  "hearing-vision": Ear,
  "medical-alert-safety": BellRing,
  "dementia-memory-support": Brain,
  "mental-health-counselling": MessageCircle,
  "retirement-residences": Building2,
  "palliative-hospice-care": Flower2,
  "legal-financial": Scale,
  "funeral-estate-planning": FileHeart,
  "transportation": Car,
  "home-maintenance": Wrench,
  "companion-social": Users,
  "meals-nutrition": UtensilsCrossed,
  "downsizing-moving": Truck,
};

export function situationIcon(slug: string): LucideIcon {
  return SITUATION_ICONS[slug] ?? Compass;
}

export function categoryIcon(slug: string): LucideIcon {
  return CATEGORY_ICONS[slug] ?? Compass;
}

/** Warm gold circular chip that wraps a card icon. */
export function IconChip({
  icon: Icon,
  className = "",
}: {
  icon: LucideIcon;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold-deep ${className}`}
    >
      <Icon size={24} strokeWidth={2} />
    </span>
  );
}
