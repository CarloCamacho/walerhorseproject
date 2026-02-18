import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import ProductGrid from "@/components/shop/ProductGrid";
import Button from "@/components/shared/Button";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop for Waler Horse Project merchandise. Every purchase supports our mission to save Waler horses from culling.",
};

export default function ShopPage() {
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative flex min-h-[40vh] items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/horses/waler-portrait-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_4px_24px_rgba(0,0,0,0.6)]">
            Shop for the Cause
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
            Every purchase directly supports our efforts to save Waler horses. Thank you for making a difference.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream py-16">
        <Container>
          <ProductGrid products={products} />
        </Container>
      </section>

      {/* Other Ways CTA */}
      <section className="bg-parchment py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold text-charcoal-warm">
              Want to help in other ways?
            </h2>
            <p className="mt-4 font-body text-deep-brown/85">
              Your donation goes directly toward feeding, sheltering, and
              rehoming Waler horses across Australia.
            </p>
            <Button href="/donate" variant="donate" size="lg" className="mt-6">
              Donate Now
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
