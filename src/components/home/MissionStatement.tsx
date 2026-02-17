"use client";

import { Landmark, HeartHandshake, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeInSection from "@/components/shared/FadeInSection";

const cards = [
  {
    icon: Landmark,
    title: "Heritage Breed",
    description:
      "Walers were bred in Australia's harsh outback, serving as cavalry horses in both World Wars. They are a living testament to Australia's pioneering spirit.",
  },
  {
    icon: HeartHandshake,
    title: "At Risk",
    description:
      "Today, these extraordinary horses face the threat of culling. Without intervention, a breed that shaped Australian history could be lost forever.",
  },
  {
    icon: MapPin,
    title: "Australian Icon",
    description:
      "From the dusty plains of the outback to the battlefields of Beersheba, the Waler is woven into the fabric of Australian identity and culture.",
  },
];

export default function MissionStatement() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <FadeInSection>
          <SectionHeading
            title="Why Walers Matter"
            subtitle="These aren't just horses — they're a living piece of Australian heritage that deserves to be celebrated and protected."
          />
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card, i) => (
            <FadeInSection key={card.title} delay={i * 0.15}>
              <div className="group rounded-2xl border border-border-warm bg-warm-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-ochre/10 text-ochre transition-colors group-hover:bg-ochre group-hover:text-white">
                  <card.icon size={28} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold text-charcoal-warm">
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
  );
}
