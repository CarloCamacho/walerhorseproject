"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/shared/Button";
import Container from "@/components/layout/Container";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/horses/herd-outback.jpg"
          alt="Herd of Waler horses in the Australian outback"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/50" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl [text-shadow:0_2px_8px_rgba(0,0,0,0.9),0_4px_20px_rgba(0,0,0,0.7)]">
            Every Waler Deserves a Future
          </h2>
          <p className="mt-6 font-body text-lg text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.8)]">
            Whether you donate, shop, or share our story — every action helps
            protect these incredible horses for the next generation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href="/donate" variant="donate" size="lg">
              Donate Now
            </Button>
            <Button href="/shop" variant="outline" size="lg">
              Shop for the Cause
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
