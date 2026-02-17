"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setError("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to send message");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-eucalyptus/30 bg-eucalyptus/5 p-12 text-center">
        <CheckCircle size={48} className="mx-auto text-eucalyptus" />
        <h3 className="mt-4 font-heading text-2xl font-bold text-charcoal-warm">
          Thank You!
        </h3>
        <p className="mt-2 font-body text-deep-brown/85">
          Your message has been sent. We&apos;ll get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block font-body text-sm font-semibold text-charcoal-warm"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="mt-2 w-full rounded-lg border border-border-warm bg-warm-white px-4 py-3 font-body text-deep-brown outline-none transition-all focus:border-ochre focus:ring-2 focus:ring-ochre/20"
          placeholder="Your full name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-outback-red">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-body text-sm font-semibold text-charcoal-warm"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="mt-2 w-full rounded-lg border border-border-warm bg-warm-white px-4 py-3 font-body text-deep-brown outline-none transition-all focus:border-ochre focus:ring-2 focus:ring-ochre/20"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-outback-red">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-body text-sm font-semibold text-charcoal-warm"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="mt-2 w-full resize-none rounded-lg border border-border-warm bg-warm-white px-4 py-3 font-body text-deep-brown outline-none transition-all focus:border-ochre focus:ring-2 focus:ring-ochre/20"
          placeholder="Tell us how you'd like to help, or ask us a question..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-outback-red">
            {errors.message.message}
          </p>
        )}
      </div>

      {error && (
        <p className="rounded-lg bg-outback-red/10 px-4 py-3 text-sm text-outback-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-ochre px-8 py-4 font-body font-semibold text-white transition-colors hover:bg-warm-earth disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        <Send size={18} />
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
