import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "donate";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-ochre text-white hover:bg-warm-earth shadow-lg hover:shadow-xl",
  outline:
    "border-2 border-white text-white hover:bg-white/20",
  donate:
    "bg-outback-red text-white hover:bg-warm-earth shadow-lg hover:shadow-xl",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {children}
    </button>
  );
}
