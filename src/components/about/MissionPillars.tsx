"use client";

import { Eye, Users, Sun } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import FadeInSection from "@/components/shared/FadeInSection";

const pillars = [
  {
    icon: Eye,
    title: "Awareness",
    description:
      "Educating the public about the Waler breed's extraordinary history and the urgent threats they face today. Knowledge is the first step towards change.",
    color: "bg-ochre",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Building a network of passionate supporters, volunteers, and horse lovers who share our vision of a future where Walers are celebrated, not culled.",
    color: "bg-eucalyptus",
  },
  {
    icon: Sun,
    title: "A Future for Walers",
    description:
      "Creating sustainable outcomes through rehoming programs, sanctuary partnerships, and advocacy for policy change to protect these iconic animals.",
    color: "bg-warm-earth",
  },
];

export default function MissionPillars() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <FadeInSection>
          <SectionHeading
            title="Our Mission"
            subtitle="Three pillars guide everything we do in our fight to save the Waler horse."
          />
        </FadeInSection>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeInSection key={pillar.title} delay={i * 0.15}>
              <div className="rounded-2xl border border-border-warm bg-warm-white p-8">
                <div className={`h-1 w-16 rounded-full ${pillar.color}`} />
                <div className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-parchment text-charcoal-warm">
                  <pillar.icon size={24} />
                </div>
                <h3 className="mt-4 font-heading text-xl font-bold text-charcoal-warm">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-body text-deep-brown/85 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
