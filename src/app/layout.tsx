import Footer from "@/components/footer";
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import type React from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import "./globals.css";
import FloatingContactButtons from "@/components/floatingContactButtons";

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
                  default: "ไคสแตนดาร์ด | แผ่นอะคูสติก ลดเสียงสะท้อน ฝ้าเพดาน บางบอน กรุงเทพ",
                      template: "%s | ไคสแตนดาร์ด",
                        },
                          description:
                              "จำหน่ายแผ่นอะคูสติก แผ่นฝ้าลดเสียงสะท้อน ฝ้าเพดานคุณภาพสูง ผลิตเองประสบการณ์กว่า 40 ปี เหมาะสำหรับห้องประชุม สำนักงาน โรงแรม มหาวิทยาลัย โทร 02-415-3676",
                                keywords:
                                    "แผ่นอะคูสติก, แผ่นฝ้าลดเสียงสะท้อน, ฝ้าเพดานกันเสียง, แผ่นยิปซั่มลดเสียงสะท้อน, ฝ้าอะคูสติก, แผ่นซับเสียง, ฝ้าห้องประชุม, แผ่นฝ้าซับเสียง, ฝ้ากันเสียงสะท้อน, แผ่นยิปซั่มดูดซับเสียง, ฝ้าเพดานห้องประชุม, แผ่นฝ้าทีบาร์, โครงเคร่าฝ้าเพดาน, ช่องเซอร์วิส, แปหลังคา, ร้านวัสดุก่อสร้างบางบอน, วัสดุก่อสร้างกรุงเทพ, ไคสแตนดาร์ด",
                                      authors: [{ name: "KaiStandard" }],
                                        creator: "KaiStandard",
                                          publisher: "KaiStandard",
                                            robots: "index, follow",
                                              openGraph: {
                                                  type: "website",
                                                      locale: "en_US",
                                                          url: "https://kaistandard.com",
                                                              siteName: "ไคสแตนดาร์ด",
                                                                  title: "ไคสแตนดาร์ด | ผู้เชี่ยวชาญแผ่นอะคูสติกและผู้ผลิตยิปซั่มลดเสียงสะท้อน",
                                                                      description:
                                                                            "จำหน่ายแผ่นอะคูสติก แผ่นฝ้าลดเสียงสะท้อน ฝ้าเพดานคุณภาพสูง ผลิตเองประสบการณ์กว่า 40 ปี เหมาะสำหรับห้องประชุม สำนักงาน โรงแรม มหาวิทยาลัย",
                                                                                images: [
                                                                                      {
                                                                                              url: "/og-image.jpg",
                                                                                                      width: 1200,
                                                                                                              height: 630,
                                                                                                                      alt: "ไคสแตนดาร์ด | ผู้เชี่ยวชาญแผ่นอะคูสติกและผู้ผลิตยิปซั่มลดเสียงสะท้อน",
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
                                                                                                                                                          <head>
                                                                                                                                                                  {/* Google Tag Manager */}
                                                                                                                                                                          <Script id="gtm-script" strategy="afterInteractive">
                                                                                                                                                                                    {`
                                                                                                                                                                                          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                                                                                                                                                                                          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                                                                                                                                                                                          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                                                                                                                                                                                          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                                                                                                                                                                                          })(window,document,'script','dataLayer','GTM-PKVDT79M');
                                                                                                                                                                                              `}
                                                                                                                                                                                                      </Script>

                                                                                                                                                                                                              {/* Global Site Tag (gtag.js) - Google Analytics */}
                                                                                                                                                                                                                      <Script
                                                                                                                                                                                                                                strategy="afterInteractive"
                                                                                                                                                                                                                                          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
                                                                                                                                                                                                                                                  />
                                                                                                                                                                                                                                                          <Script id="gtag-init" strategy="afterInteractive">
                                                                                                                                                                                                                                                                    {`
                                                                                                                                                                                                                                                                                window.dataLayer = window.dataLayer || [];
                                                                                                                                                                                                                                                                                            function gtag(){dataLayer.push(arguments);}
                                                                                                                                                                                                                                                                                                        gtag('js', new Date());
                                                                                                                                                                                                                                                                                                                    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                                                                                                                                                                                                                                                                                                                              `}
                                                                                                                                                                                                                                                                                                                                      </Script>
                                                                                                                                                                                                                                                                                                                                            </head>
                                                                                                                                                                                                                                                                                                                                                  <body className={`${sarabun.className} ${kanit.variable}`}>
                                                                                                                                                                                                                                                                                                                                                          <Navbar />
                                                                                                                                                                                                                                                                                                                                                                  {children}
                                                                                                                                                                                                                                                                                                                                                                          <Analytics />
                                                                                                                                                                                                                                                                                                                                                                                  <SpeedInsights />
                                                                                                                                                                                                                                                                                                                                                                                          <Footer />
                                                                                                                                                                                                                                                                                                                                                                                                  <FloatingContactButtons />
                                                                                                                                                                                                                                                                                                                                                                                                        </body>
                                                                                                                                                                                                                                                                                                                                                                                                            </html>
                                                                                                                                                                                                                                                                                                                                                                                                              );
                                                                                                                                                                                                                                                                                                                                                                                                              }
                                                                                                                                                                                                                                                                                                                                                                                                              