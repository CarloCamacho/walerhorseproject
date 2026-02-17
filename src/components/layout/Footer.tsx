import Link from "next/link";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import Container from "./Container";
import SocialLinks from "@/components/shared/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-deep-brown py-16 text-white/80">
      <Container>
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="font-heading text-xl font-bold text-white">
              {SITE_NAME}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Dedicated to saving the iconic Waler Horse — a living piece of
              Australian heritage that deserves to be celebrated and protected
              for generations to come.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white">
              Explore
            </h4>
            <nav className="mt-4 flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/75 transition-colors hover:text-ochre"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold text-white">
              Stay Connected
            </h4>
            <p className="mt-4 text-sm text-white/75">
              Follow us on social media for the latest updates on our Waler
              conservation efforts.
            </p>
            <SocialLinks className="mt-4" light />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
