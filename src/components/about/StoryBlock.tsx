"use client";

import Image from "next/image";
import FadeInSection from "@/components/shared/FadeInSection";

interface StoryBlockProps {
  title: string;
  text: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
}

export default function StoryBlock({
  title,
  text,
  imageSrc,
  imageAlt,
  reversed = false,
}: StoryBlockProps) {
  return (
    <FadeInSection>
      <div
        className={`flex flex-col gap-8 md:items-center lg:gap-16 ${
          reversed ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="md:w-1/2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h3 className="font-heading text-2xl font-bold text-charcoal-warm sm:text-3xl">
            {title}
          </h3>
          <p className="mt-4 font-body text-lg text-deep-brown/85 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
    </FadeInSection>
  );
}
