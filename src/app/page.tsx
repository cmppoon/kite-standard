import BgPattern from "@/components/bgPattern";
import ContactUs from "@/components/contactUs";
import HeroCarousel from "@/components/heroCarousel";
import OurCustomers from "@/components/ourCustomers";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/productCategories";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ไคสแตนดาร์ด | แผ่นอะคูสติก ลดเสียงสะท้อน ฝ้าเพดาน กรุงเทพ",
  description:
    "จำหน่ายแผ่นอะคูสติก แผ่นยิปซั่มลดเสียงสะท้อน ฝ้าเพดานคุณภาพสูง ราคาโครงการ ประสบการณ์กว่า 40 ปี เหมาะสำหรับห้องประชุม สำนักงาน มหาวิทยาลัย โทร 02-415-3676",
};

const HOMEPAGE_CATEGORY_IDS = [1, 2, 5, 8];

export default function HomePage() {
  const homepageCategories = productCategories.filter((c) =>
    HOMEPAGE_CATEGORY_IDS.includes(c.id)
  );

  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <section className="relative">
        <HeroCarousel />
      </section>

      {/* CTA Section */}
      <section className="relative px-4 py-6">
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
      <section className="py-16">
        <div className="mx-auto mb-12 max-w-7xl px-4 text-center">
          <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
            ประเภทสินค้า
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            ประเภทสินค้าฝ้าเพดาน แผ่นอะคูสติกและโครงผนัง
            สำหรับการใช้งานในห้องประชุม อาคารพาณิชย์ และอาคารสำนักงาน
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-0 sm:grid-cols-2">
          {homepageCategories.map((category) => (
            <Link
              key={category.id}
              href={`/products/category/${category.slug}`}
              className="group relative block h-80 overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Light dark overlay — half of original */}
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white drop-shadow-md">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-white/90 drop-shadow-md">
                  {category.description}
                </p>
                <span className="mt-2 inline-block text-sm font-medium text-white/85 drop-shadow-md">
                  ดูรายละเอียด →
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-7xl px-4 text-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link href="/products">
              ดูสินค้าทั้งหมด <ArrowRight className="-ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <OurCustomers />
      <ContactUs />
    </div>
  );
}
