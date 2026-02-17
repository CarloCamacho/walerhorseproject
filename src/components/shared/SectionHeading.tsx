interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-heading text-3xl font-bold sm:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-charcoal-warm"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-lg ${centered ? "mx-auto" : ""} ${
            light ? "text-white/90" : "text-deep-brown/80"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-20 rounded-full ${centered ? "mx-auto" : ""} ${
          light ? "bg-white/50" : "bg-ochre"
        }`}
      />
    </div>
  );
}
