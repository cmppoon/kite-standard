import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import type React from "react";
import "./globals.css";

const sarabun = Sarabun({
  subsets: ["thai"],
  weight: ["400", "700", "800"],
  variable: "--font-sarabun",
});

const kanit = Kanit({
  subsets: ["thai"],
  weight: ["400", "700", "800"],
  variable: "--font-kanit",
})


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
    siteName: "Kai Standard",
    title: "Kai Standard - Premium Ceiling Solutions & Materials",
    description:
      "Leading provider of premium ceiling materials and professional installation services with 25+ years of experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kai Standard - Premium Ceiling Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CeilingPro - Premium Ceiling Solutions & Materials",
    description:
      "Leading provider of premium ceiling materials and professional installation services.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sarabun.className} ${kanit.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
