"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/shared/Button";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/home-hero.jpg"
          alt="Wild Waler horses running across the Australian landscape"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Layered overlays — base dark layer + centre vignette for text legibility */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/60" />

      {/* Content */}
      <div className="relative z-10 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl [text-shadow:0_2px_4px_rgba(0,0,0,1),0_4px_16px_rgba(0,0,0,0.9),0_8px_32px_rgba(0,0,0,0.7)]"
        >
          Saving the Iconic
          <br />
          {/* Bright amber-yellow instead of ochre brown — pops on dark overlays */}
          <span className="text-amber-300">Waler Horse</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-6 max-w-2xl font-body text-lg text-white sm:text-xl [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
        >
          Protecting Australia&apos;s heritage by preventing the culling of Waler
          Horses — preserving a living legacy of endurance, courage, and the
          Australian spirit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="/about" variant="outline" size="lg">
            Learn Their Story
          </Button>
          <Button href="/donate" variant="donate" size="lg">
            Donate Now
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={32} className="text-white/90" />
        </motion.div>
      </motion.div>
    </section>
  );
}
