import HeroCarousel from "@/components/heroCarousel";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featuredProducts = [
  {
    id: 1,
    name: "แผ่นยิปซั่ม",
    image: "/placeholder.svg?height=300&width=400",
    description: "Durable metal ceiling tiles for industrial applications",
  },
  {
    id: 2,
    name: "แผ่นอะคูสติก",
    image: "/placeholder.svg?height=300&width=400",
    description: "Decorative textured ceiling with unique patterns",
  },
  {
    id: 3,
    name: "โครงฝ้าทีบาร์",
    image: "/placeholder.svg?height=300&width=400",
    description: "Fire-rated ceiling panels meeting all safety standards",
  },
  {
    id: 4,
    name: "ช่องเซอร์วิส",
    image: "/placeholder.svg?height=300&width=400",
    description: "Perfect for bathrooms and high-humidity environments",
  },
  {
    id: 5,
    name: "โครงฝ้าฉาบเรียบ",
    image: "/placeholder.svg?height=300&width=400",
    description: "Elegant coffered ceiling design for upscale interiors",
  },
  {
    id: 6,
    name: "โครงฝ้าทีบาร์",
    image: "/placeholder.svg?height=300&width=400",
    description: "Natural wood grain finish ceiling panels",
  },
  {
    id: 7,
    name: "ปูนฉาบ",
    image: "/placeholder.svg?height=300&width=400",
    description:
      "High-performance acoustic ceiling tiles for superior sound control",
  },
  {
    id: 8,
    name: "อุปกรณ์ช่างฝ้า",
    image: "/placeholder.svg?height=300&width=400",
    description: "Modern ceiling with integrated LED lighting system",
  },
  {
    id: 9,
    name: "โครงผนังเบา",
    image: "/placeholder.svg?height=300&width=400",
    description: "Professional suspended ceiling system for offices",
  },
  {
    id: 10,
    name: "แปหลังคา",
    image: "/placeholder.svg?height=300&width=400",
    description: "Standard gypsum board ceiling for residential use",
  },
  {
    id: 11,
    name: "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคา",
    image: "/placeholder.svg?height=300&width=400",
    description: "Standard gypsum board ceiling for residential use",
  },
  {
    id: 12,
    name: "บริการเจาะรู บังใบ ทำลวดลาย",
    image: "/placeholder.svg?height=300&width=400",
    description: "Standard gypsum board ceiling for residential use",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">ประเภทสินค้า</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            เลือกชมประเภทสินค้าที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย
            อาคารพาณิชย์ และอุตสาหกรรม
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={`${product.name}`}
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
                <div className="flex items-center justify-center">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href={`/products/${product.id}`}>ดูรายละเอียด</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/products">
              ดูสินค้าทั้งหมด <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary/5 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent">
              ติดต่อเรา
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ติดต่อผู้เชี่ยวชาญของเราเพื่อรับโซลูชันฝ้าเพดานที่ออกแบบเฉพาะสำหรับคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Phone */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-accent">
                  โทรศัพท์
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  จันทร์ - เสาร์ 07:30 - 17:30
                </p>
                <a
                  href="tel:+6624153676"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  02-415-3676
                </a>
              </CardContent>
            </Card>

            {/* Line Contact */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-secondary/20 hover:border-secondary/40">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-accent">
                  ติดต่อทางไลน์
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  สะดวก ตอบกลับรวดเร็ว
                </p>
                <a
                  href="https://line.me/ti/p/@kaistandard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  @kaistandard
                </a>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-accent/20 hover:border-accent/40">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-accent">
                  อีเมล
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  คำถามทั่วไปและการติดต่อธุรกิจ
                </p>
                <a
                  href="mailto:info@kaistandard.com"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  info@kaistandard.com
                </a>
              </CardContent>
            </Card>

            {/* Facebook */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-primary/20 hover:border-primary/40">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    className="h-8 w-8 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-accent">
                  Facebook
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  ติดตามข่าวสารและโปรโมชั่นล่าสุด
                </p>
                <a
                  href="https://www.facebook.com/kaistandardds/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent/80 font-medium transition-colors"
                >
                  คลิกที่นี่เพื่อเยี่ยมชม
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90"
            >
              <Link href="/map">สาขาทั้งหมด</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-text-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ทำไมต้องไคสแตนดาร์ด
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              เพราะเราไม่ใช่แค่ผู้จัดจำหน่าย
              แต่เป็นโรงงานผู้เชี่ยวชาญที่อยู่ในวงการมากว่า 40 ปี
              โดยเฉพาะในงานที่ต้องใช้ความชำนาญสูงอย่างการทำลวดลาย
              บังใบและเจาะรูแผ่นยิปซั่ม ซึ่งเป็นสิ่งที่เราถนัดที่สุด
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
      <footer className="bg-primary border-t">
        <div className="max-w-5xl mx-auto  py-12 px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center text-white">
                <Image
                  src="/logo.png"
                  alt="Kai Standard Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                Kai Standard
              </h3>
              <p className="text-white">
                ผู้นำด้านวัสดุฝ้าเพดานคุณภาพสูงและบริการติดตั้งมืออาชีพมายาวนานกว่า
                40 ปี
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent-foreground">
                สาขาทั้งหมด
              </h4>
              <ul className="space-y-2 text-white">
                <li>สาขาบางบอน</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent-foreground">
                เกี่ยวกับเรา
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/products"
                    className="text-white hover:text-accent-foreground"
                  >
                    สินค้า
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="text-white hover:text-accent-foreground"
                  >
                    บทความ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white hover:text-accent-foreground"
                  >
                    เกี่ยวกับเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-accent-foreground"
                  >
                    ติดต่อเรา
                  </Link>
                </li>
                <li>
                  <Link
                    href="/map"
                    className="text-white hover:text-accent-foreground"
                  >
                    แผนที่
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-accent-foreground">
                ข้อมูลติดต่อ
              </h4>
              <ul className="space-y-2 text-white">
                <li>โทร: 02-415-3676</li>
                <li>อีเมล: info@kaistandard.com</li>
                <li>จันทร์ - เสาร์ 07:30 - 17:30</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t py-4 text-center text-white bg-footer-background border-white ">
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
