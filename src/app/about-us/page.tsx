import BgPattern from "@/components/bgPattern";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Eye, Heart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "เกี่ยวกับเรา | ไคสแตนดาร์ด ผู้ผลิตและจัดจำหน่ายแผ่นอะคูสติก ฝ้าเพดานกว่า 40 ปี",
  description:
    "ไคสแตนดาร์ด ผู้ผลิตและจำหน่ายแผ่นอะคูสติก ฝ้าอะคูสติก ฝ้าลดเสียงสะท้อน ราคาโรงงาน สอบถามโทร 02-415-3676",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "บริษัท ไคสแตนดาร์ด จำกัด",
  "alternateName": "Kai Standard Co., Ltd.",
  "url": "https://www.kaistandard.com",
  "logo": "https://www.kaistandard.com/logo.png",
  "foundingDate": "1984",
  "telephone": "+66-2-415-3676",
  "email": "sattawatt.sura@hotmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR_STREET_ADDRESS",
    "addressLocality": "บางบอน",
    "addressRegion": "กรุงเทพมหานคร",
    "postalCode": "YOUR_POSTCODE",
    "addressCountry": "TH"
  },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "07:00",
    "closes": "17:00"
  }]
};

const galleryImages = [
  { src: "/about-us/gallery-01.webp", alt: "โรงงานผลิตแผ่นอะคูสติก ไคสแตนดาร์ด บางบอน" },
  { src: "/about-us/gallery-02.webp", alt: "แผ่นอะคูสติก KS-301 ติดตั้งโครงการ" },
  { src: "/about-us/gallery-03.webp", alt: "แผ่นอะคูสติก KS-302 ฝ้าลดเสียงสะท้อน" },
  { src: "/about-us/gallery-04.webp", alt: "แผ่นอะคูสติก KS-303 ติดตั้งห้องประชุม" },
  { src: "/about-us/gallery-05.webp", alt: "แผ่นอะคูสติก KS-304 ฝ้าเพดานอาคาร" },
  { src: "/about-us/gallery-06.webp", alt: "โครงเคร่าฝ้าเพดาน ไคสแตนดาร์ด" },
  { src: "/about-us/gallery-07.webp", alt: "แผ่นปิดรอยต่อ ไคสแตนดาร์ด" },
  { src: "/about-us/gallery-08.webp", alt: "ติดตั้งฝ้าอะคูสติกโครงการคอนโด" },
  { src: "/about-us/gallery-09.webp", alt: "ติดตั้งฝ้าเพดานโครงการโรงแรม" },
  { src: "/about-us/gallery-10.webp", alt: "สินค้าแผ่นยิปซั่ม ไคสแตนดาร์ด" },
  { src: "/about-us/gallery-11.webp", alt: "ร้านค้าไคสแตนดาร์ด สาขาบางบอน" },
  { src: "/about-us/gallery-12.webp", alt: "แผ่นอะคูสติกส่งมอบงานโครงการ" },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen">
        <section className="relative overflow-hidden px-4 py-12">
          <BgPattern />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="font-kanit mb-6 text-3xl font-bold text-white md:text-4xl">
              เกี่ยวกับเรา | ไคสแตนดาร์ด ผู้ผลิตและจัดจำหน่ายแผ่นอะคูสติก ฝ้าเพดานกว่า 40 ปี
            </h1>
          </div>
        </section>

        {/* Company Story */}
        <section className="from-accent/10 to-secondary/10 bg-gradient-to-br px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-accent mb-6 text-3xl font-bold md:text-4xl">
                  เรื่องราวของเรา
                </h2>
                <div className="text-muted-foreground space-y-4">
                  <p className="text-justify">
                    บริษัท ไคสแตนดาร์ด จำกัด เป็นผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40 ปี
                    โดยบริษัทมุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม และการใช้งาน
                    เพื่อให้ลูกค้าทุกท่านมั่นใจในคุณภาพของผลิตภัณฑ์ ก่อตั้งปี พ.ศ. 2527 ครอบคลุมผลิตภัณฑ์ได้แก่
                    แผ่นอะคูสติก แผ่นฝ้าลดเสียงสะท้อน แผ่นยิปซั่ม ระบบผนัง
                  </p>
                  <p className="text-justify">
                    Kai Standard Co., Ltd. is a specialist in ceiling systems and roofing structures with over 40 years
                    of experience. The company is dedicated to designing and innovating ceiling systems, focusing on both
                    aesthetics and functionality to ensure that all customers are confident in the quality of our
                    products. Kai Standard Co., Ltd. has been in operation since 1984, offering a wide range of products
                    including acoustic panels, sound-absorbing ceiling boards, gypsum boards, and wall systems.
                  </p>
                </div>
              </div>
              <div className="relative h-96 overflow-hidden rounded-lg">
                <Image
                  src="/about-us/about-us.webp"
                  alt="โรงงานผลิตแผ่นอะคูสติก ไคสแตนดาร์ด สาขาบางบอน กรุงเทพ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-accent mb-8 text-center text-3xl font-bold md:text-4xl">
              ผลงานและบรรยากาศของเรา
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {galleryImages.map((img, index) => (
                <div key={index} className="relative h-48 overflow-hidden rounded-lg">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="from-primary/5 to-accent/5 bg-gradient-to-br px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                ความมุ่งมั่นของเรา
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                ก่อตั้งขึ้นจากค่านิยมที่มั่นคงและวิสัยทัศน์ที่ชัดเจนสำหรับอนาคตของโซลูชันฝ้าเพดาน
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card className="border-primary/20 gap-y-2 text-center">
                <CardHeader>
                  <Target className="text-secondary mx-auto h-12 w-12" />
                  <CardTitle className="text-accent text-xl">Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    ทำให้เรื่องฝ้าเพดานและฝาผนังเป็นเรื่องง่าย
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-primary/20 gap-y-2 text-center">
                <CardHeader>
                  <Eye className="text-secondary mx-auto h-12 w-12" />
                  <CardTitle className="text-accent text-xl">Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    เป็นผู้แทนจำหน่ายฝ้าเพดานและฝาผนังที่ดีที่สุด
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-primary/20 gap-y-2 text-center">
                <CardHeader>
                  <Heart className="text-secondary mx-auto h-12 w-12" />
                  <CardTitle className="text-accent text-xl">Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    มุ่งมั่นในคุณภาพ, ความซื่อสัตย์, นวัตกรรม และความพึงพอใจของลูกค้า
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Address */}
        <section className="bg-white px-4 py-8">
          <div className="mx-auto max-w-4xl text-center">
            <address className="not-italic">
              <p className="text-muted-foreground text-sm">
                <strong className="text-foreground">บริษัท ไคสแตนดาร์ด จำกัด</strong>
                {" · "}YOUR_STREET_ADDRESS แขวงบางบอน เขตบางบอน กรุงเทพมหานคร YOUR_POSTCODE
                {" · "}
                <a href="tel:+6624153676" className="text-primary">โทร 02-415-3676</a>
                {" · "}จันทร์–เสาร์ 07:00–17:00
              </p>
            </address>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-accent mb-6 text-3xl font-bold md:text-4xl">
              พร้อมที่จะเริ่มโปรเจกต์ของคุณหรือยัง?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              ติดต่อเราวันนี้เพื่อรับคำปรึกษาและเริ่มต้นโปรเจกต์ของคุณ
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact-us">
                  ติดต่อเรา <ArrowRight className="-ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-secondary hover:border-secondary hover:text-white"
              >
                <Link href="/products">ชมสินค้าทั้งหมด</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
