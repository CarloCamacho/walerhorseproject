import type { Metadata } from "next";
import Image from "next/image";
import {
  Heart,
  Stethoscope,
  Home as HomeIcon,
} from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Button from "@/components/shared/Button";
import FadeInSection from "@/components/shared/FadeInSection";
import { DONATE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support the WA Waler Horse Project. Your donation helps feed, shelter, and rehome Waler horses across Australia.",
};

const impactCards = [
  {
    icon: Heart,
    title: "Feed a Horse for a Month",
    description:
      "Cover the cost of hay, supplements, and fresh water for a rescued Waler for an entire month.",
    amount: "$50",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Care",
    description:
      "Fund vaccinations, health checks, and medical treatment for horses recovering from harsh conditions.",
    amount: "$150",
  },
  {
    icon: HomeIcon,
    title: "Support Rehoming",
    description:
      "Help cover the costs of transporting a Waler to their forever home, including veterinary clearance and travel.",
    amount: "$300",
  },
];

export default function DonatePage() {
  return (
    <>
      {/* Emotional Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/horses/waler-portrait-1.jpg"
            alt="Close-up portrait of a Waler horse"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_4px_24px_rgba(0,0,0,0.6)]">
            Give Them a Future
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
            Every dollar brings us closer to a world where no Waler horse faces
            the threat of culling.
          </p>
        </div>
      </section>

      {/* Impact Cards */}
      <section className="bg-cream py-24">
        <Container>
          <FadeInSection>
            <SectionHeading
              title="Your Impact"
              subtitle="See how your generous donation makes a real difference in the lives of Waler horses."
            />
          </FadeInSection>

          <div className="grid gap-8 md:grid-cols-3">
            {impactCards.map((card, i) => (
              <FadeInSection key={card.title} delay={i * 0.15}>
                <div className="rounded-2xl border border-border-warm bg-warm-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-outback-red/10 text-outback-red">
                    <card.icon size={32} />
                  </div>
                  <span className="mt-4 inline-block font-heading text-2xl font-bold text-ochre">
                    {card.amount}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-charcoal-warm">
                    {card.title}
                  </h3>
                  <p className="mt-3 font-body text-deep-brown/85 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Donation CTA */}
      <section className="bg-parchment py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-charcoal-warm sm:text-4xl">
              Ready to Make a Difference?
            </h2>
            <p className="mt-4 font-body text-lg text-deep-brown/85">
              100% of your donation goes directly to Waler horse care,
              rehabilitation, and rehoming programs across Australia.
            </p>
            <Button
              href={DONATE_URL}
              variant="donate"
              size="lg"
              external
              className="mt-8"
            >
              <Heart size={20} />
              Donate via GoFundMe
            </Button>
          </div>
        </Container>
      </section>

      {/* Other Ways */}
      <section className="bg-cream py-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-heading text-2xl font-bold text-charcoal-warm">
              Other Ways to Help
            </h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl bg-warm-white p-6 border border-border-warm">
                <h4 className="font-heading font-bold text-charcoal-warm">
                  Shop
                </h4>
                <p className="mt-2 text-sm text-deep-brown/80">
                  Buy merchandise to support the cause.
                </p>
                <Button href="/shop" size="sm" className="mt-4">
                  Visit Shop
                </Button>
              </div>
              <div className="rounded-xl bg-warm-white p-6 border border-border-warm">
                <h4 className="font-heading font-bold text-charcoal-warm">
                  Share
                </h4>
                <p className="mt-2 text-sm text-deep-brown/80">
                  Spread the word on social media.
                </p>
                <Button href="/contact" size="sm" className="mt-4">
                  Connect
                </Button>
              </div>
              <div className="rounded-xl bg-warm-white p-6 border border-border-warm">
                <h4 className="font-heading font-bold text-charcoal-warm">
                  Volunteer
                </h4>
                <p className="mt-2 text-sm text-deep-brown/80">
                  Lend your time and skills to the cause.
                </p>
                <Button href="/contact" size="sm" className="mt-4">
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
