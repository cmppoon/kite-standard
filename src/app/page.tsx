import ContactUs from "@/components/contactUs";
import HeroCarousel from "@/components/heroCarousel";
import OurCustomers from "@/components/ourCustomers";
import { Button } from "@/components/ui/button";
import { productCategories } from "@/data/productCategories";
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

      {/* Products Section */}
      <section className="bg-secondary/5 py-12">
        <div className="mx-auto mb-6 max-w-7xl px-4 text-center">
          <h1 className="text-primary mb-2 text-3xl font-bold md:text-4xl">
            ผลิตภัณฑ์
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base">
            แผ่นอะคูสและแผ่นยิปซั่มลดเสียงสะท้อน
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
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="bg-primary inline-block w-fit max-w-[85%] rounded-lg px-5 py-3 text-white transition-colors group-hover:bg-white group-hover:text-primary">
                  <h3 className="text-lg font-bold leading-tight sm:text-xl">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium leading-snug opacity-95 sm:text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section — below product cards */}
      <section className="bg-primary relative px-4 py-12">
        <div className="relative z-10 mx-auto flex max-w-3xl justify-center">
          <Button
            asChild
            className="rounded-3xl bg-[#02C300] px-8 py-7 text-white hover:bg-[#02C300]/90"
          >
            <Link href="https://line.me/R/ti/p/@kaistandard">
              <span className="text-lg font-bold">
                ขอใบเสนอราคาด่วนภายใน 15 นาที
              </span>
            </Link>
          </Button>
        </div>
      </section>

      <OurCustomers />
      <ContactUs />
    </div>
  );
}
