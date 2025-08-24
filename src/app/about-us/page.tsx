import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import WhyChooseUs from "@/components/whyChooseUs";
import { ArrowRight, Eye, Heart, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "เกี่ยวกับเรา",
  description:
    "ผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40 ปี มุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม และการใช้งาน",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Background Gradient */}
            <defs>
              <linearGradient
                id="bgGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#004AAD" />
                <stop offset="50%" stopColor="#405BD8" />
                <stop offset="100%" stopColor="#38B6FF" />
              </linearGradient>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38B6FF" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#405BD8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#004AAD" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="whiteWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Background */}
            <rect width="1200" height="200" fill="url(#bgGradient)" />

            {/* Wave Layers */}
            <path
              d="M0,60 C300,40 600,80 900,60 C1050,50 1150,70 1200,60 L1200,200 L0,200 Z"
              fill="url(#wave1)"
            />

            {/* White contrast wave */}
            <path
              d="M0,100 C250,80 550,120 850,100 C1000,90 1100,110 1200,100 L1200,200 L0,200 Z"
              fill="url(#whiteWave)"
            />

            {/* Simplified ceiling-related icons - smaller and fewer */}
            {/* Grid Pattern Icon */}
            <g transform="translate(150,30)" opacity="0.12">
              <rect
                x="0"
                y="0"
                width="20"
                height="20"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="7"
                x2="20"
                y2="7"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="14"
                x2="20"
                y2="14"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <line
                x1="7"
                y1="0"
                x2="7"
                y2="20"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <line
                x1="14"
                y1="0"
                x2="14"
                y2="20"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
            </g>

            {/* Building Icon */}
            <g transform="translate(600,25)" opacity="0.1">
              <rect
                x="0"
                y="5"
                width="8"
                height="15"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <rect
                x="10"
                y="2"
                width="8"
                height="18"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <rect
                x="20"
                y="8"
                width="8"
                height="12"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <rect x="2" y="8" width="1.5" height="1.5" fill="#FFFFFF" />
              <rect x="2" y="12" width="1.5" height="1.5" fill="#FFFFFF" />
              <rect x="12" y="6" width="1.5" height="1.5" fill="#FFFFFF" />
              <rect x="22" y="11" width="1.5" height="1.5" fill="#FFFFFF" />
            </g>

            {/* Ceiling Light Icon */}
            <g transform="translate(1000,20)" opacity="0.11">
              <circle
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <circle cx="10" cy="10" r="4" fill="#FFFFFF" opacity="0.15" />
              <path
                d="M10,2 L10,0 M18,10 L20,10 M10,18 L10,20 M2,10 L0,10"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </g>

            {/* White contrast elements */}
            <circle cx="300" cy="40" r="1.5" fill="#FFFFFF" opacity="0.2" />
            <circle cx="800" cy="35" r="1" fill="#FFFFFF" opacity="0.15" />
            <circle cx="450" cy="45" r="1.2" fill="#FFFFFF" opacity="0.18" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-kanit mb-6 text-3xl font-bold text-white md:text-4xl">
            เกี่ยวกับเรา
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
                  บริษัท ไคสแตนดาร์ด จำกัด
                  เป็นผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40
                  ปี
                  โดยบริษัทมุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม
                  และการใช้งาน เพื่อให้ลูกค้าทุกท่านมั่นใจในคุณภาพของผลิตภัณฑ์
                  บริษัท ไคสแตนดาร์ด จำกัด เริ่มดำ เนินกิจการตั้งแต่ปี พ.ศ.
                  2527 โดยมีผลิตภัณฑ์ครอบคลุมตั้งแต่ แผ่นยิปซั่ม ฝ้าเพดาน
                  ระบบผนัง ผลิตภัณฑ์กันซึม และแผ่นอคูสติค
                </p>

                <p className="text-justify">
                  Kai Standard Co., Ltd. is a specialist in ceiling systems and
                  roofing structures with over 40 years of experience. The
                  company is dedicated to designing and innovating ceiling
                  systems, focusing on both aesthetics and functionality to
                  ensure that all customers are confident in the quality of our
                  products. Kai Standard Co., Ltd. has been in operation since
                  1984, offering a wide range of products including gypsum
                  boards, ceiling systems, wall systems, waterproofing products,
                  and acoustic panels.
                </p>
              </div>
            </div>
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src="/about-us/about-us.webp"
                alt="รูปภาพบริษัท Kai Standard"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs />

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
                  มุ่งมั่นในคุณภาพ, ความซื่อสัตย์, นวัตกรรม
                  และความพึงพอใจของลูกค้า
                </CardDescription>
              </CardContent>
            </Card>
          </div>
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
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
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
  );
}
