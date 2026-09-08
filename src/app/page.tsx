import ContactUs from "@/components/contactUs";
import HeroCarousel from "@/components/heroCarousel";
import OurCustomers from "@/components/ourCustomers";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { productCategories } from "@/data/productCategories";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ไคสแตนดาร์ด | แผ่นอะคูสติก ลดเสียงสะท้อน ฝ้าเพดาน กรุงเทพ",
  description:
    "จำหน่ายแผ่นอะคูสติก แผ่นยิปซั่มลดเสียงสะท้อน ฝ้าเพดานคุณภาพสูง ราคาโครงการ ประสบการณ์กว่า 40 ปี เหมาะสำหรับห้องประชุม สำนักงาน มหาวิทยาลัย โทร 02-415-3676",
};

const HOMEPAGE_CATEGORY_IDS = [1, 2, 5, 8, 9];

// บทความที่แสดงบนหน้าแรก — แก้ตรงนี้เมื่อต้องการเปลี่ยนบทความ
// ต้องตรงกับ slug ใน src/data/articles.ts เป๊ะ ๆ
const HOMEPAGE_ARTICLE_SLUGS = [
  "แผ่นซับเสียงโพลีเอสเตอร์คืออะไร",
  "nrc-0-50-คืออะไร-ดูดซับเสียงได้ดีพอไหม",
  "ฝ้าอะคูสติกคืออะไร-ลดเสียงก้องกับลดเสียงทะลุต่างกันยังไง",
];

export default function HomePage() {
  const homepageCategories = productCategories.filter((c) =>
    HOMEPAGE_CATEGORY_IDS.includes(c.id)
  );

  // เรียงตามลำดับที่เขียนไว้ใน HOMEPAGE_ARTICLE_SLUGS
  // ถ้า slug ไหนหาไม่เจอ จะข้ามไปเฉย ๆ ไม่ทำให้เว็บพัง
  const homepageArticles = HOMEPAGE_ARTICLE_SLUGS.map((slug) =>
    articles.find((a) => a.slug === slug)
  ).filter((a): a is (typeof articles)[number] => Boolean(a));

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

      {/* Articles Section — compact, sits between customers and contact */}
      {homepageArticles.length > 0 && (
        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
                บทความยอดนิยม
              </h2>
              <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                ความรู้เรื่องฝ้าเพดานและการลดเสียงก้อง
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              {homepageArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.slug}`}
                  className="group flex flex-col overflow-hidden rounded-lg border border-[#c5d9f0] bg-white transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-square w-full overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3 sm:p-4">
                    <h3 className="text-primary line-clamp-2 text-sm font-bold leading-snug sm:text-base">
                      {article.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactUs />
    </div>
  );
}
