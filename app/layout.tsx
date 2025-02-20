import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Currency-Swift - Convert Your Money Easily",
  description:
    "Currency-Swift is your go-to online currency converter for fast and accurate money exchange. Get live exchange rates, real-time forex updates, and seamless currency conversions for USD, EUR, GBP, JPY, CAD, AUD, and more. Whether you're a traveler, forex trader, or business owner dealing with international transactions, our free and easy-to-use tool helps you get the best rates. Compare multiple currencies, track historical exchange rates, and make informed financial decisions. Stay updated with the latest forex trends and make global transactions smoother with Currency-Swift today!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3273233422690587"
  crossOrigin="anonymous"
/>

        <meta name="google-site-verification" content="fQESepwJasMaPYeGoDwXgjl0JMlNYvpO5fr54MKIJqk" />
        <meta
          name="keywords"
          content="currency converter, online currency exchange, forex rates, live currency rates, money conversion, currency swift, forex calculator, exchange rate calculator, currency exchange app, real-time currency conversion, best currency converter, money exchange tool, digital forex rates, currency comparison, USD to EUR converter, INR to USD converter, crypto exchange rates, bitcoin price conversion, international money transfer rates, live forex market, instant currency conversion, accurate forex rates, travel money exchange, foreign exchange tool, online forex converter, best money converter app, exchange rate tracker, forex currency chart, financial market exchange rates, global currency conversion, historical exchange rates, multi-currency converter, convert USD to GBP, travel currency calculator, money transfer rate calculator, online exchange rate API, forex trading rates, international currency converter, live exchange rates today, real-time forex updates, XE alternative, best forex converter website, currency exchange for travelers, dollar to euro exchange rate, fast money conversion tool, forex market insights, foreign exchange trading, multi-currency wallet conversion, free forex rate calculator, instant forex exchange, live foreign exchange, digital currency rates, USD to CAD converter, GBP to EUR converter, JPY to USD exchange, crypto to fiat conversion, Ethereum price converter, digital wallet forex rates, best exchange rate app, currency rates today, online money transfer, forex investment calculator, world currency exchange, accurate exchange rate tool, forex rate predictor, currency fluctuation tracker, real-time forex alerts, best money transfer rates, low-fee currency exchange, professional forex converter, global financial currency rates, B2B currency conversion, USD to AED rates, forex exchange for businesses, daily forex price updates, fiat currency converter, live forex spreads, PayPal exchange rate calculator, fast money exchange service, cheapest currency exchange, Forex arbitrage calculator, automated currency conversion, best travel forex rates, buy and sell forex rates, cross-border payment rates, multi-country currency conversion, live bank exchange rates, financial market forex analysis, best forex swap rates, daily forex trends, online forex brokerage rates, best digital currency converter, international forex payments, free forex API, blockchain currency conversion, currency conversion for freelancers, centralized and decentralized exchange rates, exchange rate for travelers, compare forex rates, best forex trading tools, live forex graph, historical forex analysis, forex news updates, forex trend analysis, exchange rate history, accurate forex comparison, forex trading strategies, forex signal provider, currency exchange guide, forex trading beginners, international currency exchange, money exchange near me, best forex brokers, currency conversion for startups, global payment solutions, fintech exchange rates, foreign exchange API, automated forex trading, mobile forex converter, AI-powered forex conversion, advanced forex charting, multi-currency banking, best remittance services, forex risk management, global economy exchange rates, secure online currency exchange, crypto forex trading, tokenized forex exchange, high-speed forex conversion, forex investment opportunities, cross-currency payments, instant money transfer, currency speculation tools, top forex analysis tools, trade forex online, fast cryptocurrency conversion, live stock market exchange rates, low-cost forex transfers, smart forex transactions, AI-driven forex predictions, online forex marketplace, forex trading for business, financial forex consultancy, decentralized finance forex tools, global trade currency converter, payment gateway exchange rates, forex hedging tools, blockchain-based forex exchange, international remittance comparison, P2P currency exchange, foreign money transfer calculator, secure forex wallet, trade forex like a pro, multi-exchange forex aggregator, forex price alert system, forex arbitrage strategies, digital nomad currency exchange, best forex mobile app, exchange rate forecasting, forex for freelancers, corporate forex solutions, advanced forex analytics, AI forex trading assistant, real-time forex price tracking, money exchange made easy, online currency swap, top forex websites, multi-platform forex trading, secure digital payments forex, live forex ticker, forex brokerage exchange rates, automated forex signals, smart contract forex trading, forex order execution speed, no-fee currency exchange, global forex liquidity providers"
        />

 {/* FAQ Schema for Google Rich Snippets */}
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [{
              "@type": "Question",
              "name": "How can I convert currencies online?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Use Currency-Swift to instantly convert currencies with real-time forex rates and zero fees."
              }
            }, {
              "@type": "Question",
              "name": "Which currencies does Currency-Swift support?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We support USD, EUR, GBP, JPY, CAD, AUD, and over 150 other global currencies."
              }
            }]
          }
        `}} />

        <meta name="author" content="Currency Swift" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Assets/favicon.ico.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
