import HeroCarousel from "@/components/heroCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "โครงผนัง",
    image: "/placeholder.svg?height=300&width=400",
    price: "$45/sq ft",
    description:
      "High-performance acoustic ceiling tiles for superior sound control",
  },
  {
    id: 2,
    name: "โครงฝ้าฉาบเรียบ",
    image: "/placeholder.svg?height=300&width=400",
    price: "$85/sq ft",
    description: "Elegant coffered ceiling design for upscale interiors",
  },
  {
    id: 3,
    name: "โครงฝ้าทีบาร์",
    image: "/placeholder.svg?height=300&width=400",
    price: "$55/sq ft",
    description: "Fire-rated ceiling panels meeting all safety standards",
  },
  {
    id: 4,
    name: "ช่องเซอร์วิส",
    image: "/placeholder.svg?height=300&width=400",
    price: "$38/sq ft",
    description: "Perfect for bathrooms and high-humidity environments",
  },
  {
    id: 5,
    name: "แปหลังคา",
    image: "/placeholder.svg?height=300&width=400",
    price: "$95/sq ft",
    description: "Modern ceiling with integrated LED lighting system",
  },
  {
    id: 6,
    name: "แผ่นปิดรอยต่อ",
    image: "/placeholder.svg?height=300&width=400",
    price: "$25/sq ft",
    description: "Professional suspended ceiling system for offices",
  },
  {
    id: 7,
    name: "แผ่นฝ้าทีบาร์",
    image: "/placeholder.svg?height=300&width=400",
    price: "$65/sq ft",
    description: "Natural wood grain finish ceiling panels",
  },
  {
    id: 8,
    name: "แผ่นยิปซั่ม",
    image: "/placeholder.svg?height=300&width=400",
    price: "$42/sq ft",
    description: "Durable metal ceiling tiles for industrial applications",
  },
  {
    id: 9,
    name: "แผ่นลดเสียงสะท้อน",
    image: "/placeholder.svg?height=300&width=400",
    price: "$18/sq ft",
    description: "Standard gypsum board ceiling for residential use",
  },
  {
    id: 10,
    name: "แผ่นอะคูสติก",
    image: "/placeholder.svg?height=300&width=400",
    price: "$32/sq ft",
    description: "Decorative textured ceiling with unique patterns",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">สินค้าของเรา</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย อาคารพาณิชย์
            และอุตสาหกรรม
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name} - Professional ceiling material`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                <CardDescription className="text-sm mb-3">
                  {product.description}
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">
                    {product.price}
                  </span>
                  <Button asChild size="sm" variant="outline">
                    <Link href={`/products/${product.id}`}>View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/products">
              View All Products <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-muted py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">ติดต่อเรา</h2>
          <p className="text-lg text-muted-foreground mb-12">
            ติดต่อผู้เชี่ยวชาญของเราเพื่อรับโซลูชันฝ้าเพดานที่ออกแบบเฉพาะสำหรับคุณ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <Phone className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">เบอร์โทร</h3>
              <p className="text-muted-foreground">02-415-3676</p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">อีเมล</h3>
              <p className="text-muted-foreground">top@kaistandard.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">ที่อยู่</h3>
              <p className="text-muted-foreground">
                123 Ceiling St, City, State
              </p>
            </div>
          </div>

          <Button asChild size="lg">
            <Link href="/map">ดูแผนที่</Link>
          </Button>
        </div>
      </section>

      {/* Why Choose CeilingPro Section */}
      <section className="py-16 px-4 bg-text-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ทำไมต้องซื้อกับเรา
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              เราเป็นผู้เชี่ยวชาญด้านฝ้าเพดานที่มีประสบการณ์มากกว่า 40 ปี
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">40+</span>
                </div>
                <CardTitle className="text-xl mb-3">
                  ปีในวงการฝ้าเพดาน
                </CardTitle>
                <CardDescription>
                  ได้รับความไว้วางใจจากลูกค้าหลายพันรายทั่วประเทศมานานกว่า 40 ปี
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">24/7</span>
                </div>
                <CardTitle className="text-xl mb-3">
                  พร้อมให้บริการตลอด 24 ชั่วโมง
                </CardTitle>
                <CardDescription>
                  บริการช่วยเหลือตลอด 24
                  ชั่วโมงสำหรับการซ่อมแซมเร่งด่วนและการติดตั้งฉุกเฉิน
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">100%</span>
                </div>
                <CardTitle className="text-xl mb-3">
                  การรับประกันและความพึงพอใจ
                </CardTitle>
                <CardDescription>
                  รับประกันคุณภาพสินค้าทุกชิ้น พร้อมการรับประกันความพึงพอใจ 100%
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t">
        <div className="max-w-4xl mx-auto  py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Image
                  src="/logo.png"
                  alt="Kai Standard Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                Kai Standard
              </h3>
              <p className="text-muted-foreground">
                ผู้นำด้านวัสดุฝ้าเพดานคุณภาพสูงและบริการติดตั้งมืออาชีพมายาวนานกว่า
                40 ปี
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">สาขาทั้งหมด</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>สาขาบางบอน</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">เกี่ยวกับเรา</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-muted-foreground hover:text-primary"
                  >
                    สินค้า
                  </Link>
                </li>
                <li>
                  <Link
                    href="/catalog"
                    className="text-muted-foreground hover:text-primary"
                  >
                    แคตาล็อค
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="text-muted-foreground hover:text-primary"
                  >
                    บทความ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-muted-foreground hover:text-primary"
                  >
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-muted-foreground hover:text-primary"
                  >
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/map"
                    className="text-muted-foreground hover:text-primary"
                  >
                    แผนที่
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">ข้อมูลติดต่อ</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>โทร: 02-415-3676</li>
                <li>อีเมล: top@kaistandard.com</li>
                <li>จันทร์ - เสาร์ 07:30 - 17:30</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t py-4 text-center text-white bg-footer-background">
          <p>&copy; 2025 Kai Standard. All rights reserved.</p>
        </div>
      </footer>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CeilingPro",
            description:
              "Leading provider of premium ceiling materials and professional installation services",
            url: "https://ceilingpro.com",
            logo: "https://ceilingpro.com/logo.png",
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
            sameAs: [
              "https://facebook.com/ceilingpro",
              "https://twitter.com/ceilingpro",
              "https://linkedin.com/company/ceilingpro",
            ],
            foundingDate: "1999",
            numberOfEmployees: "100-500",
            areaServed: "United States",
          }),
        }}
      />
    </div>
  );
}
