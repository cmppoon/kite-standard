"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { productCategories } from "@/data/productCategories";
import { products } from "@/data/products";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ACOUSTIC_CATEGORY_ID = 1;
const SERVICE_HATCH_CATEGORY_ID = 2;
const GYPSUM_ACOUSTIC_CATEGORY_ID = 5;
const GYPSUM_CATEGORY_ID = 6;
const CEILING_FRAME_CATEGORY_ID = 7;
const TBAR_CATEGORY_ID = 8;

const PRODUCTS_PER_PAGE = 12;

const categories = [
  { id: -1, name: "ทั้งหมด", count: products.length, slug: "all" },
  ...productCategories.map((category) => ({
    id: category.id,
    name: category.name,
    count: products.filter((product) => product.categoryId === category.id).length,
    slug: category.slug,
  })),
];

const ACOUSTIC_FAQS = [
  {
    q: "แผ่นอะคูสติกไคสแตนดาร์ดราคาเท่าไหร่?",
    a: "ราคาเริ่มต้นประมาณ 65–263 บาทต่อแผ่น ขึ้นอยู่กับขนาดและความหนา (ยังไม่รวม VAT 7%) งานโครงการมีราคาพิเศษ ขอใบเสนอราคาได้ที่ 02-415-3676 หรือ Line @kaistandard",
  },
  {
    q: "แผ่นอะคูสติกต่างจากฝ้าเพดานทั่วไปอย่างไร?",
    a: "โดยทั่วไปเวลาเกิดเสียง เสียงจะสะท้อนกลับเข้าห้อง แต่แผ่นอะคูสติกผลิตจากใยแร่ที่ดูดซับคลื่นเสียง ช่วยลดเสียงก้องและเสียงสะท้อน ทำให้เสียงพูดในห้องชัดเจนขึ้น ฟังรู้เรื่องมากขึ้นครับ",
  },
  {
    q: "ค่า NRC คืออะไร ควรเลือกเท่าไหร่?",
    a: "NRC (Noise Reduction Coefficient) คือค่าวัดความสามารถในการดูดซับเสียง ยิ่งสูงยิ่งดูดซับได้มาก แผ่นของไคสแตนดาร์ดมีค่า NRC 0.55–0.65 ขึ้นอยู่กับความหนา ห้องประชุมทั่วไปเลือก 0.55 ขึ้นไปก็เพียงพอครับ",
  },
  {
    q: "ควรเลือกความหนาแบบไหน (12 / 14 / 16 มม.)?",
    a: "12 มม. เหมาะกับสำนักงานและห้องประชุมทั่วไป, 14 มม. สำหรับห้องที่ต้องการความชัดของเสียงมากขึ้น, 16 มม. ให้ประสิทธิภาพสูงสุด เหมาะกับโรงพยาบาล โรงแรม และงานโครงการใหญ่ ทั้งนี้ขึ้นกับงบประมาณและสเปคที่ระบุมาด้วยครับ",
  },
  {
    q: "แผ่นอะคูสติกติดตั้งกับระบบไหนได้บ้าง?",
    a: "ติดตั้งได้ 2 ระบบครับ ทั้งบนโครงทีบาร์ (T-Bar) และแบบฝ้าฉาบเรียบ น้ำหนักเบา ติดตั้งง่าย รวดเร็ว แบบฉาบเรียบจะต้องมียิปซั่มเดิมเป็นฐานรองก่อนเพื่อความสะดวกในการติดตั้งครับ",
  },
  {
    q: "เหมาะกับห้องหรืออาคารแบบไหนบ้าง?",
    a: "เหมาะกับห้องประชุม สำนักงาน โรงพยาบาล มหาวิทยาลัย โรงเรียน โรงแรม ธนาคาร และอาคารราชการ ทุกพื้นที่ที่ต้องการลดเสียงก้องและเสียงสะท้อนครับ แต่ไม่แนะนำให้ใช้ในพื้นที่ที่มีโอกาสเจอความชื้นมากครับ",
  },
  {
    q: "มีสต็อกพร้อมส่งและจัดส่งที่ไหนบ้าง?",
    a: "มีสต็อกพร้อมส่ง จัดส่งทั่วประเทศ รองรับทั้งงานโครงการเอกชนและงานราชการครับ กรณีประเภทสินค้าสั่งผลิตไม่เกิน 1-7 วัน ทั้งนี้ขึ้นกับจำนวนครับ",
  },
  {
    q: "ขอราคาโครงการอย่างไร?",
    a: "โทร 02-415-3676 หรือทัก Line @kaistandard เพื่อขอใบเสนอราคาและคำแนะนำจากทีมงานผู้เชี่ยวชาญกว่า 40 ปี",
  },
];

function TrustBar() {
  return (
    <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
      {[
        { val: "40+ ปี", sub: "ประสบการณ์" },
        { val: "ราคาโรงงาน", sub: "ผู้ผลิตและผู้จัดจำหน่าย" },
        { val: "ส่งทั่วไทย", sub: "สต็อกพร้อมส่ง" },
        { val: "รับโครงการ", sub: "ทุกขนาด" },
      ].map((item) => (
        <div key={item.val} className="rounded-lg border bg-white px-3 py-2 text-center">
          <p className="text-sm font-medium text-gray-900">{item.val}</p>
          <p className="text-xs text-gray-500">{item.sub}</p>
        </div>
      ))}
    </div>
  );
}

function ProjectBar() {
  return (
    <div className="mb-6 flex flex-col items-start gap-3 rounded-lg border bg-white px-4 py-3 sm:flex-row sm:items-center">
      <p className="flex-1 text-sm text-gray-700">
        ราคาพิเศษสำหรับงานโครงการ — ติดต่อรับใบเสนอราคา
      </p>
      <Link
        href="https://line.me/R/ti/p/@kaistandard"
        className="shrink-0 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-green-700"
      >
        ขอราคาโครงการ
      </Link>
    </div>
  );
}

function KaiStandardContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">ทำไมต้องไคสแตนดาร์ด</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        เพราะเราเป็นผู้เชี่ยวชาญฝ้าเพดาน แผ่นอะคูสติก ยิปซั่มอะคูสติกมากกว่า 40 ปี
        ครอบคลุมโครงการทั่วประเทศ จัดส่งทั้งโครงการเอกชนและงานราชการ
      </p>
    </div>
  );
}

function AcousticContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">แผ่นอะคูสติกคืออะไร และเลือกแบบไหนดี?</h2>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        แผ่นอะคูสติก (Acoustic Board) คือวัสดุฝ้าเพดานที่ผลิตจากใยแร่
        ออกแบบมาเพื่อดูดซับเสียงสะท้อนและลดเสียงก้องภายในห้อง
        ต่างจากฝ้าทั่วไปที่สะท้อนเสียงกลับ
        แผ่นอะคูสติกจะดูดซับคลื่นเสียงไว้ทำให้เสียงในห้องชัดขึ้นและสบายหูมากขึ้น
        ค่า NRC (Noise Reduction Coefficient) คือตัวชี้วัดประสิทธิภาพ ยิ่งสูงยิ่งดูดซับเสียงได้มาก
        แผ่นของไคสแตนดาร์ดมีค่า NRC 0.55–0.65 ขึ้นอยู่กับความหนา
        เหมาะสำหรับทั้งงานโครงการขนาดใหญ่และงานตกแต่งภายใน
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "ห้องประชุม / สำนักงาน", text: "แนะนำ 600×1200×12mm. หรือ 14mm. ติดตั้งง่าย ราคาคุ้มค่า เสียงชัดในระยะ" },
          { title: "โรงพยาบาล / มหาวิทยาลัย / โรงแรม", text: "แนะนำ 600×1200×16mm. ประสิทธิภาพสูงสุด รับงานโครงการใหญ่" },
          { title: "ธนาคาร / อาคารสำนักงานราชการ", text: "โครงการที่ผ่านมานิยมรุ่นขอบบังใบ ซ่อนโครงทีบาร์ หน้าตาเรียบร้อย" },
        ].map((card) => (
          <div key={card.title} className="rounded-lg border bg-white p-4">
            <p className="mb-1 text-sm font-medium text-gray-900">{card.title}</p>
            <p className="text-xs leading-relaxed text-gray-500">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AcousticFaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ACOUSTIC_FAQS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-4 text-xl font-semibold">คำถามที่พบบ่อย (FAQ)</h2>
      <div className="space-y-3">
        {ACOUSTIC_FAQS.map((item) => (
          <details
            key={item.q}
            className="group rounded-lg border bg-white"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-3 p-4 text-sm font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
              <span>{item.q}</span>
              <span className="shrink-0 text-gray-400 transition-transform group-open:rotate-180">
                ▼
              </span>
            </summary>
            <p className="px-4 pb-4 text-sm leading-relaxed text-gray-500">
              {item.a}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}

function ServiceHatchContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">ช่องเซอร์วิสคืออะไร?</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        ช่องเซอร์วิสคือช่องที่เหมือนกับประตูของฝ้าเพดานติดตั้งในระบบฉาบเรียบ
        เพื่อเข้าไปทำการซ่อมแซมงานระบบข้างบน ทั้งงานระบบไฟฟ้า ประปา
        หรือระบบระบายอากาศ เป็นต้น มีทั้งแบบธรรมดาและทนชื้น
      </p>
    </div>
  );
}

function GypsumAcousticContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">แผ่นยิปซั่มลดเสียงสะท้อน เหมาะกับพื้นที่ไหนบ้าง?</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "โรงเรียน / มหาลัย", text: "อาคารหรือห้องเรียนมีการใช้มากเป็นลำดับต้นๆเนื่องด้วยมีการใช้งานจำนวนมาก แผ่นยิปซั่มลดเสียงสะท้อนเป็นวัสดุลดเสียงก้องที่สามารถควบคุมช่วยลดต้นทุนได้มาก" },
          { title: "โถง / โรงพยาบาล", text: "เนื่องด้วยมีพื้นที่และมีความสูงที่มากกว่าพื้นที่ทั่วไป ทำให้มีเสียงก้องมาก การใช้แผ่นยิปซั่มลดเสียงสะท้อนสามารถช่วยควบคุมเสียงได้ดีโดยเฉพาะกับห้องที่มีความสูง" },
          { title: "ห้องประชุม", text: "ห้องประชุมหรือสำนักงานมักจะมีการพูดคุยงานกันเกิดขึ้นและเสียงสะท้อนจะมากตาม แผ่นยิปซั่มลดเสียงสะท้อนช่วยลดปัญหาดังกล่าวได้ดี สามารถเลือกใช้ระบบทีบาร์และฉาบเรียบ" },
        ].map((card) => (
          <div key={card.title} className="rounded-lg border bg-white p-4">
            <p className="mb-1 text-sm font-medium text-gray-900">{card.title}</p>
            <p className="text-xs leading-relaxed text-gray-500">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GypsumContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">แผ่นยิปซั่มคืออะไร?</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        วัสดุตกแต่งภายใน ใช้สำหรับปิดผิวโครงเคร่าฝ้าเพดานหรือผนัง ติดตั้งได้ง่าย
        มีทั้งรูปแบบธรรมดาและทนชื้น นิยมใช้กับอาคารทั่วไป สำนักงาน หรือบ้าน
      </p>
    </div>
  );
}

function CeilingFrameContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">เลือกระบบโครงเคร่าฝ้าเพดานแบบไหนดี?</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { title: "ระบบทีบาร์", text: "ใช้กับอาคารสำนักงาน อาคารราชการ เหมาะสำหรับพื้นที่ที่ไม่ต้องการความยุ่งยากในการดูแลและติดตั้ง สามารถใช้ได้กับแผ่นขนาด 60x120ซม. และ 60x60ซม." },
          { title: "ระบบฉาบเรียบ", text: "เหมาะกับอาคารที่ต้องการความสวยงามไม่ต้องการโชว์ตัวโครงแผ่น อาทิเช่น โรงพยาบาล ห้างสรรพสินค้า โรงแรม แนะนำใช้แผ่นที่มีขนาด 120x240ซม. เพื่อประหยัดเวลาในการติดตั้ง" },
        ].map((card) => (
          <div key={card.title} className="rounded-lg border bg-white p-4">
            <p className="mb-1 text-sm font-medium text-gray-900">{card.title}</p>
            <p className="text-xs leading-relaxed text-gray-500">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TBarContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">แผ่นฝ้าทีบาร์เลือกแบบไหนดี?</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {[
          { title: "แบบลดเสียงสะท้อน", text: "เหมาะสำหรับอาคารที่มีการเกิดเสียงพูดคุยกันมาก เช่น ออฟฟิศ ห้องประชุม อาคารสาธารณะ มีขนาด 60x60ซม. และ 60x120ซม. เพื่อให้เหมาะสมกับขนาดของห้อง มีน้ำหนักที่เบาและเป็นวัสดุลดเสียงสะท้อนที่คุ้มค่า" },
          { title: "แบบเรียบ", text: "เหมาะสำหรับอาคารที่ต้องการโดดเด่นด้วยหน้าตาที่เรียบและสามารถทำความสะอาดได้ง่าย" },
        ].map((card) => (
          <div key={card.title} className="rounded-lg border bg-white p-4">
            <p className="mb-1 text-sm font-medium text-gray-900">{card.title}</p>
            <p className="text-xs leading-relaxed text-gray-500">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProductsClientPage({
  selectedCategory,
}: {
  selectedCategory: number;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const isAcoustic = selectedCategory === ACOUSTIC_CATEGORY_ID;
  const isServiceHatch = selectedCategory === SERVICE_HATCH_CATEGORY_ID;
  const isGypsumAcoustic = selectedCategory === GYPSUM_ACOUSTIC_CATEGORY_ID;
  const isGypsum = selectedCategory === GYPSUM_CATEGORY_ID;
  const isCeilingFrame = selectedCategory === CEILING_FRAME_CATEGORY_ID;
  const isTBar = selectedCategory === TBAR_CATEGORY_ID;
  const isCategoryPage = selectedCategory !== -1;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === -1 || product.categoryId === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const safePage = Math.min(currentPage, Math.max(1, totalPages));
  const startIndex = (safePage - 1) * PRODUCTS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold md:text-2xl">
            {selectedCategory === -1
              ? "สินค้าของเรา"
              : categories.find((c) => c.id === selectedCategory)?.name}
          </h1>
          <p className="text-muted-foreground mb-4 text-sm">
            {selectedCategory === -1
              ? "เลือกชมประเภทสินค้าที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย อาคารพาณิชย์ และอุตสาหกรรม"
              : `${categories.find((c) => c.id === selectedCategory)?.name} คุณภาพสูง ราคาโรงงาน เหมาะสำหรับห้องประชุม สำนักงาน โรงพยาบาล และโครงการก่อสร้าง ส่งทั่วประเทศ`}
          </p>

          <TrustBar />
          <ProjectBar />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="space-y-6 lg:w-72">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
              <Input
                placeholder="ค้นหาสินค้า..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="pl-10"
              />
            </div>

            <div>
              <h3 className="mb-4 font-semibold">ประเภทสินค้า</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const isSelected = selectedCategory === category.id;
                  return (
                    <Button
                      key={category.id}
                      asChild
                      variant={isSelected ? "default" : "ghost"}
                      className={`w-full justify-between ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Link
                        href={
                          category.id === -1
                            ? "/products"
                            : `/products/category/${category.slug}`
                        }
                      >
                        <span>{category.name}</span>
                        <span className={`text-sm ${isSelected ? "text-white" : "text-muted-foreground"}`}>
                          {category.count}
                        </span>
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                กำลังแสดงสินค้าจำนวน {filteredProducts.length} รายการ
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {paginatedProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.slug}`}
                  className="group flex h-full flex-col rounded-lg border transition-shadow hover:shadow-lg"
                >
                  <Card className="group flex h-full flex-col gap-2 py-0 transition-shadow hover:shadow-lg">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[700/600] w-full overflow-hidden rounded-t-lg">
                        <Image
                          src={product.image}
                          alt={`${product.name}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex flex-1 flex-col p-4">
                      <CardTitle className="mb-2 line-clamp-2 text-lg">
                        {product.name}
                      </CardTitle>
                      <CardDescription className="mb-3 line-clamp-5 text-sm">
                        {product.description}
                      </CardDescription>
                      <div className="mt-auto pt-2">
                        <div className="text-primary mb-4 text-lg font-semibold">
                          {product.price}
                        </div>
                        <div className="flex items-center justify-end">
                          <span className="border-primary text-primary group-hover:bg-primary rounded-md border px-3 py-1 text-sm transition-colors group-hover:text-white">
                            ดูรายละเอียด
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
                <Button
                  variant="ghost"
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={safePage === 1}
                >
                  ก่อนหน้า
                </Button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={safePage === page ? "default" : "ghost"}
                    onClick={() => setCurrentPage(page)}
                    className={
                      safePage === page
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {page}
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={safePage === totalPages}
                >
                  ถัดไป
                </Button>
              </div>
            )}

            {filteredProducts.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">ไม่พบสินค้าที่ตรงกับการค้นหาของคุณ</p>
              </div>
            )}

            {selectedCategory === -1 && filteredProducts.length > 0 && <KaiStandardContentSection />}
            {isAcoustic && filteredProducts.length > 0 && <AcousticContentSection />}
            {isAcoustic && filteredProducts.length > 0 && <AcousticFaqSection />}
            {isServiceHatch && filteredProducts.length > 0 && <ServiceHatchContentSection />}
            {isGypsumAcoustic && filteredProducts.length > 0 && <GypsumAcousticContentSection />}
            {isGypsum && filteredProducts.length > 0 && <GypsumContentSection />}
            {isCeilingFrame && filteredProducts.length > 0 && <CeilingFrameContentSection />}
            {isTBar && filteredProducts.length > 0 && <TBarContentSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
