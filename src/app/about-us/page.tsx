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

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 py-12">
        <BgPattern />

        {/* Content */}
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
                  บริษัท ไคสแตนดาร์ด จำกัด
                  เป็นผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40
                  ปี
                  โดยบริษัทมุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม
                  และการใช้งาน เพื่อให้ลูกค้าทุกท่านมั่นใจในคุณภาพของผลิตภัณฑ์
                  บริษัท ไคสแตนดาร์ด จำกัด เริ่มดำ เนินกิจการตั้งแต่ปี พ.ศ. 2527
                  โดยมีผลิตภัณฑ์ครอบคลุมตั้งแต่ แผ่นยิปซั่ม ฝ้าเพดาน ระบบผนัง
                  ผลิตภัณฑ์กันซึม และแผ่นอคูสติค
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

      {/* <WhyChooseUs /> */}

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
