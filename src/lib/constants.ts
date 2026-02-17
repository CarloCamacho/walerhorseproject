export const SITE_NAME = "WA Waler Horse Project";
export const SITE_DESCRIPTION =
  "Dedicated to saving the iconic Waler Horse from culling in Australia. Learn their story, support the cause, and help preserve a living piece of Australian heritage.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wawalerhorseproject.org.au";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Shop", href: "/shop" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
] as const;

export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/wawalerhorseproject",
  instagram: "https://instagram.com/wawalerhorseproject",
} as const;

export const DONATE_URL =
  process.env.NEXT_PUBLIC_GOFUNDME_URL || "https://gofundme.com";

export const SNIPCART_API_KEY =
  process.env.NEXT_PUBLIC_SNIPCART_API_KEY || "";
