"use client";

import { ShoppingBag } from "lucide-react";
import { Product } from "@/types";
import ImagePlaceholder from "@/components/shared/ImagePlaceholder";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-border-warm bg-warm-white transition-all duration-300 hover:shadow-lg">
      <div className="overflow-hidden">
        <ImagePlaceholder
          label={product.name}
          className="transition-transform duration-500 group-hover:scale-105"
          aspectRatio="aspect-square"
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-charcoal-warm">
          {product.name}
        </h3>
        <p className="mt-2 font-body text-sm text-deep-brown/80 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-ochre">
            ${product.price.toFixed(2)} {product.currency}
          </span>
          <button
            className="snipcart-add-item inline-flex cursor-pointer items-center gap-2 rounded-full bg-ochre px-5 py-2.5 font-body text-sm font-semibold text-white transition-colors hover:bg-warm-earth"
            data-item-id={product.id}
            data-item-name={product.name}
            data-item-price={product.price}
            data-item-description={product.description}
            data-item-image={product.image}
            data-item-url={product.url}
            data-item-currency={product.currency.toLowerCase()}
          >
            <ShoppingBag size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
