"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import Container from "./Container";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 shadow-md backdrop-blur-sm"
            : "bg-transparent"
        }`}
      >
        <Container>
          <div className="flex h-20 items-center justify-between">
            <Link
              href="/"
              className={`font-heading text-xl font-bold transition-colors duration-300 sm:text-2xl ${
                scrolled ? "text-charcoal-warm" : "text-white"
              }`}
            >
              WA Waler Horse Project
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    scrolled
                      ? "text-deep-brown/80 hover:text-ochre"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                className={`snipcart-checkout relative cursor-pointer transition-colors duration-300 ${
                  scrolled
                    ? "text-deep-brown/80 hover:text-ochre"
                    : "text-white/90 hover:text-white"
                }`}
                aria-label="Open shopping cart"
              >
                <ShoppingBag size={22} />
                <span className="snipcart-items-count absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-ochre text-xs font-bold text-white" />
              </button>
            </nav>

            <div className="flex items-center gap-4 md:hidden">
              <button
                className={`snipcart-checkout relative cursor-pointer transition-colors duration-300 ${
                  scrolled
                    ? "text-deep-brown/80"
                    : "text-white/90"
                }`}
                aria-label="Open shopping cart"
              >
                <ShoppingBag size={22} />
                <span className="snipcart-items-count absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-ochre text-xs font-bold text-white" />
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className={`cursor-pointer transition-colors duration-300 ${
                  scrolled ? "text-charcoal-warm" : "text-white"
                }`}
                aria-label="Open navigation menu"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
