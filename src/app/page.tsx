import ContactUs from "@/components/contactUs";
import HeroCarousel from "@/components/heroCarousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhyChooseUs from "@/components/whyChooseUs";
import { productCategories } from "@/data/productCategories";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">ประเภทสินค้า</h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            เลือกชมประเภทสินค้าที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย
            อาคารพาณิชย์ และอุตสาหกรรม
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 xl:grid-cols-4">
          {productCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.slug}`}
            >
              <Card className="group h-full gap-4 p-0 transition-shadow hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={`${category.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col justify-between pb-4">
                  <CardTitle className="mb-4 text-center text-lg">
                    {category.name}
                  </CardTitle>
                  <div className="flex items-center justify-center">
                    <span className="border-primary text-primary group-hover:bg-primary flex-1 rounded-md border px-3 py-1 text-center text-sm transition-colors group-hover:text-white">
                      ดูรายละเอียด
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/products">
              ดูสินค้าทั้งหมด <ArrowRight className="-ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <ContactUs />
      <WhyChooseUs />

      {/* Structured Data for SEO */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ไคสแตนดาร์ด",
            description:
              "ผู้นำด้านการจัดจำหน่ายโครงคร่าวฝ้าเพดาน งานฉาบและผลิตภัณฑ์ที่เกี่ยวข้องกับระบบฝ้า-ผนัง แบบครบวงจร ทั้งปลีกและส่ง ครอบคลุมลูกค้าทั้งในประเทศและต่างประเทศ",
            url: "https://kaistandard.com",
            logo: "https://kaistandard.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-555-123-4567",
              contactType: "customer service",
              availableLanguage: "English",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "123 Ceiling Street",
              addressLocality: "New York",
              addressRegion: "NY",
              postalCode: "10001",
              addressCountry: "US",
            },
            sameAs: ["https://facebook.com/kaistandardds"],
            foundingDate: "1999",
            numberOfEmployees: "100-500",
            areaServed: "United States",
          }),
        }}
      /> */}
    </div>
  );
}
