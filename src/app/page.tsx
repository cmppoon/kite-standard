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

const HOMEPAGE_CATEGORY_IDS = [1, 2, 5, 8, 9];

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

      {/* CTA Section — image background */}
      <section className="relative overflow-hidden px-4 py-12">
        <Image
          src="/cta-bg.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          aria-hidden="true"
        />
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

      {/* Products Section */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-8 text-center">
            <h1 className="text-primary mb-2 text-3xl font-bold md:text-4xl">
              ผลิตภัณฑ์
            </h1>
            <p className="text-muted-foreground mx-auto max-w-2xl text-base">
              แผ่นอะคูสติกและแผ่นยิปซั่มลดเสียงสะท้อน
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-5">
            {homepageCategories.map((category) => (
              <Link
                key={category.id}
                href={`/products/category/${category.slug}`}
                className={`group flex flex-col ${
                  category.id === 1 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-[#c5d9f0] bg-white">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 20vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-3 text-center">
                  <h3 className="text-primary text-sm font-bold leading-tight sm:text-base">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-xs leading-snug">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <OurCustomers />
      <ContactUs />
    </div>
  );
}
