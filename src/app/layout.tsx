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
    default: "ไคสแตนดาร์ด - ครบเครื่องเรื่องฝ้าเพดาน",
    template: "%s - ไคสแตนดาร์ด",
  },
  description:
    "ครบเครื่องเรื่องฝ้าเพดาน วัสดุฝ้าเพดานคุณภาพสูง และบริการติดตั้งระดับมืออาชีพ ด้วยประสบการณ์กว่า 40 ปี",
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
    siteName: "Kai Standard",
    title: "ไคสแตนดาร์ด - ครบเครื่องเรื่องฝ้าเพดาน",
    description:
      "ผู้นำด้านการจัดจำหน่ายโครงคร่าวฝ้าเพดาน งานฉาบและผลิตภัณฑ์ที่เกี่ยวข้องกับระบบฝ้า-ผนัง แบบครบวงจร ทั้งปลีกและส่ง ครอบคลุมลูกค้าทั้งในประเทศและต่างประเทศ",
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
