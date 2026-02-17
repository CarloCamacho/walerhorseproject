import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/shared/SocialLinks";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the WA Waler Horse Project. We'd love to hear from you about volunteering, partnerships, or general enquiries.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-parchment pb-16 pt-32">
        <Container>
          <SectionHeading
            title="Get in Touch"
            subtitle="Have a question, want to volunteer, or interested in partnering with us? We'd love to hear from you."
          />
        </Container>
      </section>

      {/* Contact Content */}
      <section className="bg-cream py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border border-border-warm bg-warm-white p-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal-warm">
                    Contact Info
                  </h3>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail
                        size={20}
                        className="mt-0.5 shrink-0 text-ochre"
                      />
                      <div>
                        <p className="font-body text-sm font-semibold text-charcoal-warm">
                          Email
                        </p>
                        <a
                          href="mailto:info@wawalerhorseproject.org.au"
                          className="font-body text-deep-brown/85 transition-colors hover:text-ochre"
                        >
                          info@wawalerhorseproject.org.au
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin
                        size={20}
                        className="mt-0.5 shrink-0 text-ochre"
                      />
                      <div>
                        <p className="font-body text-sm font-semibold text-charcoal-warm">
                          Location
                        </p>
                        <p className="font-body text-deep-brown/85">
                          Western Australia
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border-warm pt-8">
                  <h3 className="font-heading text-xl font-bold text-charcoal-warm">
                    Follow Us
                  </h3>
                  <p className="mt-2 font-body text-sm text-deep-brown/80">
                    Stay connected on social media for the latest updates.
                  </p>
                  <SocialLinks className="mt-4" iconSize={28} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
