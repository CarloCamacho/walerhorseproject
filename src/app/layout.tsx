import type { Metadata } from "next";
import { Merriweather, Nunito } from "next/font/google";
import Script from "next/script";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SNIPCART_API_KEY } from "@/lib/constants";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.7.2/default/snipcart.css"
        />
      </head>
      <body
        className={`${merriweather.variable} ${nunito.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />

        <div
          id="snipcart"
          data-api-key={SNIPCART_API_KEY}
          data-config-modal-style="side"
          data-currency="aud"
          hidden
        />
        <Script
          src="https://cdn.snipcart.com/themes/v3.7.2/default/snipcart.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
