import { Facebook, Instagram } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  light?: boolean;
}

export default function SocialLinks({
  className = "",
  iconSize = 24,
  light = false,
}: SocialLinksProps) {
  const colorClass = light
    ? "text-white/80 hover:text-white"
    : "text-deep-brown/80 hover:text-ochre";

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href={SOCIAL_LINKS.facebook}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Facebook"
        className={`transition-colors duration-300 ${colorClass}`}
      >
        <Facebook size={iconSize} />
      </a>
      <a
        href={SOCIAL_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className={`transition-colors duration-300 ${colorClass}`}
      >
        <Instagram size={iconSize} />
      </a>
    </div>
  );
}
