"use client";

import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeInSection from "@/components/shared/FadeInSection";

const horses = [
  {
    name: "Dusty",
    description:
      "A gentle stallion with a golden coat, Dusty is one of the oldest Walers in our care. His calm temperament makes him a favourite with visitors.",
    image: "/images/horses/waler-portrait-1.jpg",
  },
  {
    name: "Matilda",
    description:
      "Named after the beloved song, Matilda is a spirited mare who embodies the wild freedom of the Australian bush.",
    image: "/images/horses/waler-portrait-2.jpg",
  },
  {
    name: "Banjo",
    description:
      "This young colt shows all the hallmarks of the classic Waler — strong, enduring, and fiercely intelligent.",
    image: "/images/horses/herd-outback.jpg",
  },
];

export default function FeaturedHorses() {
  return (
    <section className="bg-parchment py-24">
      <Container>
        <FadeInSection>
          <SectionHeading
            title="Meet the Walers"
            subtitle="Each horse has a story. Get to know some of the Walers we're working to protect."
          />
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-3">
          {horses.map((horse, i) => (
            <FadeInSection key={horse.name} delay={i * 0.15}>
              <div className="group overflow-hidden rounded-2xl bg-warm-white shadow-sm transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={horse.image}
                    alt={`${horse.name} — a Waler horse`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-charcoal-warm">
                    {horse.name}
                  </h3>
                  <p className="mt-2 font-body text-sm text-deep-brown/85 leading-relaxed">
                    {horse.description}
                  </p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
