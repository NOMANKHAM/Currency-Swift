import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Currency-Swift - Convert Your Money Easily",
  description:
    "Use our online currency converter to easily convert between different currencies. Fast, accurate, and free to use.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/Assets/favicon.ico.png" type="image/png" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}

