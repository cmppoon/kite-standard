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
});

export const metadata: Metadata = {
  title: {
    default: "ไคสแตนดาร์ด - ผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคา",
    template: "%s - ไคสแตนดาร์ด",
  },
  description:
    "บริษัท ไคสแตนดาร์ด จำกัด เป็นผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40 ปี โดยบริษัทมุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม และการใช้งาน เพื่อให้ลูกค้าทุกท่านมั่นใจในคุณภาพของผลิตภัณฑ์",
  keywords:
    "ceiling materials, acoustic ceiling tiles, fire resistant ceiling, suspended ceiling, ceiling installation, commercial ceiling, residential ceiling",
  authors: [{ name: "KaiStandard" }],
  creator: "KaiStandard",
  publisher: "KaiStandard",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaistandard.com",
    siteName: "ไคสแตนดาร์ด",
    title:
      "ไคสแตนดาร์ด - ผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคา",
    description:
      "บริษัท ไคสแตนดาร์ด จำกัด เป็นผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40 ปี โดยบริษัทมุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม และการใช้งาน เพื่อให้ลูกค้าทุกท่านมั่นใจในคุณภาพของผลิตภัณฑ์",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ไคสแตนดาร์ด - ผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคา",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={`${sarabun.className} ${kanit.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
