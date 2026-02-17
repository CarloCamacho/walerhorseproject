export interface Product {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  image: string;
  url: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}
