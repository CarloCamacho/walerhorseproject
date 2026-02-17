import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import Timeline from "@/components/about/Timeline";
import MissionPillars from "@/components/about/MissionPillars";
import StoryBlock from "@/components/about/StoryBlock";
import Button from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the extraordinary history of the Waler horse breed and our mission to save them from culling in Australia.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative flex min-h-[50vh] items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/about-hero.jpg"
            alt="Waler horse silhouette during golden hour"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 px-4 text-center">
          <h1 className="font-heading text-4xl font-bold text-white sm:text-5xl lg:text-6xl [text-shadow:0_2px_12px_rgba(0,0,0,0.85),0_4px_24px_rgba(0,0,0,0.6)]">
            The Story of the Waler
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
            A breed forged in the Australian outback, tempered in war, and
            deserving of a future.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24">
        <Container>
          <SectionHeading
            title="A History of Endurance"
            subtitle="The Waler's journey through Australian history is one of resilience, sacrifice, and quiet strength."
          />
          <Timeline />
        </Container>
      </section>

      {/* Mission Pillars */}
      <MissionPillars />

      {/* Story Blocks */}
      <section className="bg-parchment py-24">
        <Container className="space-y-20">
          <StoryBlock
            title="More Than Just Horses"
            text="Preserving these horses isn't just about animal welfare — it's about honouring a legacy that defines us. The Waler is part of the Australian story, from the pioneers who relied on them to the soldiers who rode them into battle. Losing them would mean losing a connection to who we are."
            imageSrc="/images/horses/waler-portrait-2.jpg"
            imageAlt="A Waler horse — a living piece of Australian heritage"
          />
          <StoryBlock
            title="Finding Them Homes"
            text="Our work focuses on relocating Waler horses away from culling zones and connecting them with caring families, sanctuaries, and equestrian programs. Every horse rehomed is a life saved and a piece of heritage preserved."
            imageSrc="/images/horses/herd-outback.jpg"
            imageAlt="Waler horses grazing peacefully in a paddock"
            reversed
          />
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-cream py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-charcoal-warm sm:text-4xl">
              Join the Movement
            </h2>
            <p className="mt-4 font-body text-lg text-deep-brown/85">
              Whether you donate, volunteer, or simply share our story — every
              action helps protect these incredible horses.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/donate" variant="donate" size="lg">
                Donate Now
              </Button>
              <Button href="/contact" variant="primary" size="lg">
                Get in Touch
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
