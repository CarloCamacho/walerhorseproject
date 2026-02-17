"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/constants";
import SocialLinks from "@/components/shared/SocialLinks";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 z-50 h-full w-80 bg-cream shadow-2xl"
          >
            <div className="flex h-full flex-col p-8">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="cursor-pointer text-charcoal-warm"
                  aria-label="Close navigation menu"
                >
                  <X size={28} />
                </button>
              </div>

              <nav className="mt-12 flex flex-col gap-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="font-heading text-2xl font-bold text-charcoal-warm transition-colors hover:text-ochre"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto">
                <SocialLinks />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
