import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });
const siteName = process.env.SITE_NAME || "Currency Swift";
const siteUrl = process.env.SITE_URL || "https://currencyswift.com";

export const metadata: Metadata = {
  title: `${siteName} - Live Currency Converter & Exchange Rates`,
  description: `${siteName} provides fast, accurate, and real-time currency conversion. Get live exchange rates, compare global currencies, and make informed financial decisions. Ideal for travelers, forex traders, and businesses handling international transactions.`,
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Verification & Ads */}
        <meta name="google-site-verification" content="c2jK-sz8tm_355ANi6jYTjSYgJ3iQkxXhuihDlwQrHg" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3273233422690587"
          crossOrigin="anonymous"
        />

        {/* SEO Meta Tags */}
        <meta name="author" content={siteName} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={siteUrl} />

        {/* Optimized Keywords */}
        <meta
          name="keywords"
          content="currency converter, live exchange rates, forex rates today, USD to EUR conversion, best online money exchange, real-time currency conversion, multi-currency calculator, instant forex rate updates, international money transfer rates, travel money exchange rates, global currency conversion tool, best forex exchange service, fast & secure currency exchange, AI-powered currency calculator"
        />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "${siteName}",
              "url": "${siteUrl}",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "${siteUrl}/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How can I convert currencies online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use ${siteName} to instantly convert currencies with real-time forex rates and zero fees."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Which currencies does ${siteName} support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We support USD, EUR, GBP, JPY, CAD, AUD, and over 150 other global currencies."
                  }
                }
              ]
            }`,
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/Assets/favicon.ico.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
