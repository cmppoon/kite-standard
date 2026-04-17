"use client";

import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const ACOUSTIC_CATEGORY_ID = 1;

const getProductBySlug = (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const product = products.filter((p) => p.slug === decodedSlug);
  return product.length > 0 ? product[0] : null;
};

const acousticApplications = [
  {
    title: "ห้องประชุม / สำนักงาน",
    text: "ลดเสียงก้องในห้องประชุม ทำให้เสียงพูดชัดเจน เหมาะกับห้องที่ต้องฟังอย่างตั้งใจ",
  },
  {
    title: "โรงพยาบาล / คลินิก",
    text: "สร้างสภาพแวดล้อมเงียบสงบสำหรับผู้ป่วย ลดการรบกวนระหว่างห้อง",
  },
  {
    title: "มหาวิทยาลัย / โรงเรียน",
    text: "ลดเสียงสะท้อนในห้องเรียนและห้องบรรยาย ช่วยให้ได้ยินเสียงครูผู้สอนชัดเจน",
  },
  {
    title: "ธนาคาร / อาคารราชการ",
    text: "เหมาะกับโครงการที่เน้นเสียงสงบ แนะนำรุ่นขอบบังใบสำหรับหน้าตาเรียบร้อย",
  },
  {
    title: "โรงแรม / รีสอร์ท",
    text: "ควบคุมเสียงในล็อบบี้และห้องพัก เพิ่มความเป็นส่วนตัวและบรรยากาศระดับพรีเมียม",
  },
  {
    title: "บ้านพักอาศัย",
    text: "ลดเสียงสะท้อนในห้องนั่งเล่นและห้องทำงาน ติดตั้งง่ายบนโครงทีบาร์มาตรฐาน",
  },
];

function DeliveryCarousel({ photos }: { photos: { image: string }[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative px-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-3">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] w-[calc(25%-9px)] flex-none overflow-hidden rounded-lg sm:w-[calc(50%-6px)] md:w-[calc(25%-9px)]"
            >
              <Image
                src={photo.image}
                alt={`ภาพสินค้าที่ส่งแล้ว ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-gray-50 disabled:opacity-30"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full border bg-white shadow-sm transition hover:bg-gray-50 disabled:opacity-30"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export default function ProductDetailClient({ slug }: { slug: string }) {
  const product = getProductBySlug(slug);

  if (!product) notFound();

  const isAcoustic = product.categoryId === ACOUSTIC_CATEGORY_ID;
  const deliveryPhotos = (product as any).deliveryPhotos as
    | { image: string }[]
    | undefined;

  const related = products
    .filter((p) => p.categoryId === product.categoryId && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">

        {/* Back button */}
        <div className="mb-2">
          <Button
            variant="ghost"
            asChild
            className="border-primary hover:bg-primary mb-4 hover:text-white"
          >
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              กลับสู่หน้าสินค้าทั้งหมด
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">

          {/* Product Image */}
          <div className="space-y-4">
            <div className="relative aspect-[700/600] w-full overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
              <p className="text-muted-foreground text-md mb-6">
                {product.description}
              </p>
              <div className="text-primary mb-6 text-3xl font-bold">
                {product.price}
              </div>

              {/* FIX 3 — Dual CTA */}
              <div className="flex gap-3">
                <a
                  href="tel:024153676"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Phone className="h-4 w-4" />
                  โทร 02-415-3676
                </a>
                <Link
                  href="https://line.me/ti/p/@kaistandard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#06C755] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#05b04c]"
                >
                  <svg className="h-4 w-4" viewBox="0 0 50 50" fill="currentColor">
                    <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z" />
                  </svg>
                  Line @kaistandard
                </Link>
              </div>
            </div>

            {/* FIX 2 — Spec table (acoustic only) */}
            {isAcoustic && (
              <div>
                <h3 className="mb-3 text-lg font-semibold">ข้อมูลจำเพาะ</h3>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      [
                        "ขนาด",
                        product.name.includes("600 x 1200") || product.name.includes("600x1200")
                          ? "600 × 1200 มม."
                          : "600 × 600 มม.",
                      ],
                      [
                        "ความหนา",
                        (() => {
                          const m = product.name.match(/x\s*(\d+)มม/i) || product.name.match(/(\d+)มม/);
                          return m ? `${m[1]} มม.` : "-";
                        })(),
                      ],
                      [
                        "ค่าดูดซับเสียง NRC",
                        product.name.includes("16") ? "0.65+" : "0.55 – 0.60",
                      ],
                      [
                        "จำนวนต่อกล่อง",
                        product.name.match(/x\s*12มม/i) || product.name.includes("600x1200x12") || product.name.includes("600x600x12")
                          ? "12 แผ่น"
                          : "10 แผ่น",
                      ],
                      ["วัสดุ", "ใยแร่ เคลือบสีขาวสำเร็จรูป"],
                      ["ระบบติดตั้ง", "โครงทีบาร์ / ฝ้าฉาบเรียบ"],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b last:border-0">
                        <td className="text-muted-foreground w-[45%] py-2 pr-4">{label}</td>
                        <td className="py-2 font-medium">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Features (non-acoustic) */}
            {!isAcoustic && product.features && product.features.length > 0 && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">คุณสมบัติ</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* FIX 4 — Application cards (acoustic only) */}
        {isAcoustic && (
          <div className="mt-12 border-t pt-10">
            <h2 className="mb-6 text-2xl font-semibold">พื้นที่การใช้งาน</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {acousticApplications.map((app) => (
                <div key={app.title} className="rounded-lg border bg-white p-4">
                  <p className="mb-1 text-sm font-semibold text-gray-900">{app.title}</p>
                  <p className="text-xs leading-relaxed text-gray-500">{app.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Applications (non-acoustic) */}
        {!isAcoustic && product.applications && product.applications.length > 0 && (
          <div className="mt-12 border-t pt-10">
            <h2 className="mb-6 text-2xl font-semibold">พื้นที่การใช้งาน</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {product.applications.map((application, index) => (
                <div key={index} className="flex items-center">
                  <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>{application}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Optional services */}
        {product.optionalServices && product.optionalServices.length > 0 && (
          <div className="mt-12 border-t pt-10">
            <h2 className="mb-6 text-2xl font-semibold">บริการเสริม</h2>
            <div className="space-y-4">
              {product.optionalServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <Phone className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">{service.title}</span>
                    <span className="text-muted-foreground mt-1 line-clamp-2">
                      {service.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Delivery photos carousel */}
        {isAcoustic && deliveryPhotos && deliveryPhotos.length > 0 && (
          <div className="mt-12 border-t pt-10">
            <h2 className="mb-6 text-2xl font-semibold">ภาพสินค้าที่ส่งแล้ว</h2>
            <DeliveryCarousel photos={deliveryPhotos} />
          </div>
        )}

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold">สินค้าที่เกี่ยวข้อง</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/products/${item.slug}`}
                  className="group rounded-lg border transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[700/600] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-3">
                    <p className="line-clamp-2 text-sm font-medium">{item.name}</p>
                    <p className="text-primary mt-1 text-sm font-semibold">{item.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
