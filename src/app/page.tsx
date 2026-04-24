import BgPattern from "@/components/bgPattern";
import ContactUs from "@/components/contactUs";
import HeroCarousel from "@/components/heroCarousel";
import OurCustomers from "@/components/ourCustomers";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { productCategories } from "@/data/productCategories";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ไคสแตนดาร์ด | แผ่นอะคูสติก ลดเสียงสะท้อน ฝ้าเพดาน กรุงเทพ บางบอน",
  description:
    "จำหน่ายแผ่นอะคูสติก แผ่นยิปซั่มลดเสียงสะท้อน ฝ้าเพดานคุณภาพสูง ราคาโครงการ ประสบการณ์กว่า 40 ปี เหมาะสำหรับห้องประชุม สำนักงาน มหาวิทยาลัย โทร 02-415-3676",
};

const YOUTUBE_SHORTS = [
  { id: "hhirS7T8xgI", title: "แผ่นอะคูสติก VS แผ่นยิปซั่ม?" },
  { id: "rMDtN0heUKU", title: "ระบบฝ้าฉาบเรียบหรือทีบาร์ดีกว่ากัน?" },
  { id: "nWjAdj6F_fE", title: "แผ่นฝ้าอะคูสติก พื้นที่ไหนไม่ควรขาด!" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-16">
        <BgPattern />
        <div className="relative z-10 mx-auto flex max-w-3xl justify-center">
          <Button
            asChild
            className="rounded-3xl bg-[#02C300] px-6 py-6 text-white hover:bg-[#02C300]/90"
          >
            <Link href="https://line.me/R/ti/p/@kaistandard">
              <span className="text-lg font-bold">ปรึกษาราคาโครงการ</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            ประเภทสินค้า
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            ประเภทสินค้าฝ้าเพดาน แผ่นอะคูสติกและโครงผนัง สำหรับการใช้งานในที่พักอาศัย อาคารพาณิชย์ และอาคารสำนักงาน
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

      <OurCustomers />
      <ContactUs />

      {/* YouTube Shorts Section */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="mb-12 text-center">
          <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            วิดีโอแนะนำฝ้าเพดาน
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Short video ความรู้ดีๆ สำหรับฝ้าเพดาน
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {YOUTUBE_SHORTS.map((video) => (
            <div key={video.id} className="flex flex-col items-center">
              <div className="w-full overflow-hidden rounded-xl shadow-md" style={{ aspectRatio: "9/16", maxHeight: "540px" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  style={{ aspectRatio: "9/16" }}
                />
              </div>
              <p className="text-muted-foreground mt-3 text-center text-sm">
                {video.title}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link
              href="https://www.youtube.com/@kaistandard1984/shorts"
              target="_blank"
              rel="noopener noreferrer"
            >
              ดูวิดีโอทั้งหมด <ArrowRight className="-ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
