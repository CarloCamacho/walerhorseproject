"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import Container from "@/components/layout/Container";
import FadeInSection from "@/components/shared/FadeInSection";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with email service (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  };

  return (
    <section className="bg-warm-earth py-20">
      <Container>
        <FadeInSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
              Stay Connected
            </h2>
            <p className="mt-4 font-body text-lg text-white/90">
              Sign up for updates on our Waler conservation efforts, upcoming
              events, and ways you can help.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-full bg-white/10 px-8 py-4">
                <p className="font-body text-lg font-semibold text-white">
                  Thank you for subscribing!
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 rounded-full bg-white/10 px-6 py-4 font-body text-white placeholder-white/50 outline-none ring-2 ring-transparent transition-all focus:ring-white/30"
                />
                <button
                  type="submit"
                  className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-ochre px-8 py-4 font-body font-semibold text-white transition-colors hover:bg-ochre/90"
                >
                  <Send size={18} />
                  Subscribe
                </button>
              </form>
            )}

            <p className="mt-4 text-sm text-white/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </FadeInSection>
      </Container>
    </section>
  );
}
