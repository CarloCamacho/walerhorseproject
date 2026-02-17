"use client";

import { motion } from "framer-motion";
import { TimelineEntry } from "@/types";

const timelineData: TimelineEntry[] = [
  {
    year: "1788",
    title: "First Horses Arrive",
    description:
      "The first horses arrived in Australia with the First Fleet, beginning the lineage that would produce the Waler breed.",
  },
  {
    year: "1800s",
    title: "Bred for Endurance",
    description:
      "Over generations, these horses were bred to withstand the extreme heat, drought, and harsh conditions of the Australian outback, developing exceptional stamina and resilience.",
  },
  {
    year: "1914–1918",
    title: "Heroes of World War I",
    description:
      "Over 160,000 Walers served in the Great War, including the legendary charge at Beersheba. Most never returned home — only one horse, Sandy, made it back to Australian soil.",
  },
  {
    year: "1940s",
    title: "End of the Remount Era",
    description:
      "With the mechanisation of warfare, the demand for cavalry horses vanished. Breeding programs collapsed and Waler numbers plummeted.",
  },
  {
    year: "1960s",
    title: "Near Extinction",
    description:
      "The Waler breed was nearly lost entirely. Only scattered herds in remote regions of Australia kept the bloodline alive.",
  },
  {
    year: "1986",
    title: "Rediscovery",
    description:
      "Descendant herds were discovered in the Northern Territory, reigniting interest in preserving this uniquely Australian breed.",
  },
  {
    year: "Today",
    title: "The Fight Continues",
    description:
      "Waler horses still face the threat of culling. Our mission is to raise awareness, find them loving homes, and ensure their legacy endures.",
  },
];

export default function Timeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Center line */}
      <div className="absolute left-4 top-0 h-full w-0.5 bg-border-warm md:left-1/2 md:-translate-x-0.5" />

      <div className="space-y-12">
        {timelineData.map((entry, i) => (
          <motion.div
            key={entry.year}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative flex flex-col pl-12 md:pl-0 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-1 h-3 w-3 rounded-full border-2 border-ochre bg-cream md:left-1/2 md:-translate-x-1.5" />

            {/* Content */}
            <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
              <span className="inline-block rounded-full bg-ochre/10 px-3 py-1 font-heading text-sm font-bold text-ochre">
                {entry.year}
              </span>
              <h3 className="mt-2 font-heading text-xl font-bold text-charcoal-warm">
                {entry.title}
              </h3>
              <p className="mt-2 font-body text-deep-brown/85 leading-relaxed">
                {entry.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
