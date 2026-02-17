import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
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
      {/* Page Header */}
      <section className="bg-parchment pb-16 pt-32">
        <Container>
          <SectionHeading
            title="Shop for the Cause"
            subtitle="Every purchase directly supports our efforts to save Waler horses. Thank you for making a difference."
          />
        </Container>
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
