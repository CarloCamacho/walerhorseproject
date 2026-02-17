"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "@/components/layout/Container";
import FadeInSection from "@/components/shared/FadeInSection";

const stats = [
  { value: 160000, suffix: "+", label: "Walers Served in WWI" },
  { value: 0, suffix: "", label: "By the 1960s", isText: true, textDisplay: "Near Extinction" },
  { value: 0, suffix: "", label: "Your Help is Needed Today", isText: true, textDisplay: "Today" },
];

function AnimatedCounter({
  value,
  suffix = "",
  isText = false,
  textDisplay = "",
}: {
  value: number;
  suffix?: string;
  isText?: boolean;
  textDisplay?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView || isText) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, value, isText]);

  if (isText) {
    return (
      <span ref={ref} className="text-4xl font-bold sm:text-5xl">
        {textDisplay}
      </span>
    );
  }

  return (
    <span ref={ref} className="text-4xl font-bold sm:text-5xl">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function ImpactNumbers() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <FadeInSection>
          <div className="grid gap-12 text-center md:grid-cols-3">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              >
                <div className="font-heading text-ochre">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    isText={stat.isText}
                    textDisplay={stat.textDisplay}
                  />
                </div>
                <p className="mt-3 font-body text-lg text-deep-brown/85">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
