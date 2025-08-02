import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kai Standard",
  description:
    "ครบเครื่องเรื่องฝ้าเพดาน วัสดุฝ้าเพดานคุณภาพสูง บริการติดตั้งฝ้าเพดานมืออาชีพ",
  keywords:
    "ceiling materials, acoustic ceiling tiles, fire resistant ceiling, suspended ceiling, ceiling installation, commercial ceiling, residential ceiling",
  authors: [{ name: "KaiStandard" }],
  creator: "KaiStandard",
  publisher: "KaiStandard",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ceilingpro.com",
    siteName: "CeilingPro",
    title: "CeilingPro - Premium Ceiling Solutions & Materials",
    description:
      "Leading provider of premium ceiling materials and professional installation services with 25+ years of experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CeilingPro - Premium Ceiling Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CeilingPro - Premium Ceiling Solutions & Materials",
    description: "Leading provider of premium ceiling materials and professional installation services.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
