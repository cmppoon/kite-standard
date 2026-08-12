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
import { Home, LayoutGrid, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ACOUSTIC_CATEGORY_ID = 1;
const SERVICE_HATCH_CATEGORY_ID = 2;
const GYPSUM_ACOUSTIC_CATEGORY_ID = 5;
const GYPSUM_CATEGORY_ID = 6;
const CEILING_FRAME_CATEGORY_ID = 7;
const TBAR_CATEGORY_ID = 8;
const SOUND_ABSORB_CATEGORY_ID = 9;

const ROOF_BATTEN_CATEGORY_ID = 3;
const CILAI_CATEGORY_ID = 11;

const PRODUCTS_PER_PAGE = 12;

// Ceiling framework page only: 11 keeps ระบบฉาบเรียบ (7) + ระบบทีบาร์ (4) whole on
// page 1, so อะไหล่ (6) sits alone on page 2. Other categories stay at 12.
const CEILING_FRAME_PRODUCTS_PER_PAGE = 11;

// Gypsum sound-reduction page only: high number keeps all products (and their
// group headings) on ONE page so grouping never splits across pages.
const GYPSUM_ACOUSTIC_PRODUCTS_PER_PAGE = 100;

// T-bar panel page only: same reason — keep all products on ONE page.
const TBAR_PRODUCTS_PER_PAGE = 100;

// ซีลาย page only (category 11): keep all 17 products on ONE page so the
// two groups (โครงฝ้าฉาบเรียบ + อะไหล่) never split across pages.
const CILAI_PRODUCTS_PER_PAGE = 100;

type Product = (typeof products)[number];

const CEILING_FRAME_GROUPS = [
  { label: "ระบบฉาบเรียบ", ids: [48, 49, 95, 94, 50, 97, 96] },
  { label: "ระบบทีบาร์", ids: [46, 99, 98, 47] },
  { label: "อะไหล่", ids: [52, 40, 53, 54, 41, 51, 100, 101, 102, 103] },
];

function groupCeilingFrameProducts(items: Product[]) {
  const labelOf = (id: number) =>
    CEILING_FRAME_GROUPS.find((g) => g.ids.includes(id))?.label ?? "อื่นๆ";
  const sections: { label: string; items: Product[] }[] = [];
  for (const product of items) {
    const label = labelOf(product.id);
    const last = sections[sections.length - 1];
    if (last && last.label === label) last.items.push(product);
    else sections.push({ label, items: [product] });
  }
  return sections;
}

const CILAI_GROUPS = [
  { label: "โครงฝ้าฉาบเรียบ", ids: [48, 49, 95, 94, 50, 97, 96] },
  { label: "อะไหล่", ids: [52, 40, 53, 54, 41, 51, 100, 101, 102, 103] },
];

function groupCilaiProducts(items: Product[]) {
  const labelOf = (id: number) =>
    CILAI_GROUPS.find((g) => g.ids.includes(id))?.label ?? "อื่นๆ";
  const sections: { label: string; items: Product[] }[] = [];
  for (const product of items) {
    const label = labelOf(product.id);
    const last = sections[sections.length - 1];
    if (last && last.label === label) last.items.push(product);
    else sections.push({ label, items: [product] });
  }
  return sections;
}

// Acoustic page only: group the 10 products by size. The id order matches the
// order in src/data/products.ts, so each group stays contiguous. The two
// ขอบบังใบ (reveal-edge) variants sit last as their own group.
const ACOUSTIC_GROUPS = [
  { label: "ขนาด 60×120 ซม.", ids: [1, 2, 82, 3] },
  { label: "ขนาด 60×60 ซม.", ids: [4, 5, 83, 6] },
  { label: "รุ่นขอบบังใบ", ids: [42, 77] },
];

function groupAcousticProducts(items: Product[]) {
  const labelOf = (id: number) =>
    ACOUSTIC_GROUPS.find((g) => g.ids.includes(id))?.label ?? "อื่นๆ";
  const sections: { label: string; items: Product[] }[] = [];
  for (const product of items) {
    const label = labelOf(product.id);
    const last = sections[sections.length - 1];
    if (last && last.label === label) last.items.push(product);
    else sections.push({ label, items: [product] });
  }
  return sections;
}

// Gypsum sound-reduction page only: group the 16 products by SIZE, big sheets first.
// File order is sorted by pattern, not size, so this builds sections by group
// membership (in the order below) rather than by contiguous file position.
const GYPSUM_ACOUSTIC_GROUPS = [
  { label: "60*60ซม. หนา 9มม.", ids: [23, 27, 31] },
  { label: "60*60ซม. หนา 12มม.", ids: [24, 28, 32] },
  { label: "60*120ซม. หนา 9มม.", ids: [25, 29, 33] },
  { label: "60*120ซม. หนา 12มม.", ids: [26, 30, 34] },
  { label: "1.20*2.40ม.", ids: [35, 43, 81, 44] },
];

function groupGypsumAcousticProducts(items: Product[]) {
  return GYPSUM_ACOUSTIC_GROUPS.map((g) => ({
    label: g.label,
    items: g.ids
      .map((id) => items.find((p) => p.id === id))
      .filter((p): p is Product => p !== undefined),
  })).filter((section) => section.items.length > 0);
}

// T-bar panel page only: group the 21 products by SIZE + THICKNESS.
// Built by group membership (in the order below), so it is independent of
// how products are ordered in src/data/products.ts.
const TBAR_GROUPS = [
  { label: "60*60ซม. หนา 9มม.", ids: [45, 58, 62, 66, 70] },
  { label: "60*60ซม. หนา 12มม.", ids: [55, 59, 63, 67, 71] },
  { label: "60*120ซม. หนา 9มม.", ids: [56, 60, 64, 68, 72] },
  { label: "60*120ซม. หนา 12มม.", ids: [57, 61, 65, 69, 73] },
];

function groupTBarProducts(items: Product[]) {
  return TBAR_GROUPS.map((g) => ({
    label: g.label,
    items: g.ids
      .map((id) => items.find((p) => p.id === id))
      .filter((p): p is Product => p !== undefined),
  })).filter((section) => section.items.length > 0);
}

// Per-category SEO heading override. If a category id is listed here, the page
// uses this H1 + subtitle instead of the auto-generated one. Add more later.
const CATEGORY_HEADINGS: Record<number, { h1: string; subtitle: string }> = {
  8: {
    h1: "แผ่นฝ้าทีบาร์ปรุลาย ลดเสียงก้อง ผลิตเอง ราคาโรงงาน",
    subtitle:
      "ผู้ผลิตแผ่นฝ้าทีบาร์ปรุลายโดยตรง สร้างลวดลายจากโรงงานของเราเอง บนฐานแผ่นยิปซัมคุณภาพ ช่วยลดเสียงก้องในห้อง น้ำหนักเบา ตัดง่าย จัดส่งทั่วไทย",
  },
};

// Sidebar grouping: these two categories move to the bottom under "หลังคา"
const ROOF_GROUP_IDS = [3, 4];

const allCategories = productCategories.map((category) => ({
  id: category.id,
  name: category.name,
  count: products.filter((product) => product.categoryId === category.id).length,
  slug: category.slug,
}));

const ALL_PRODUCTS_ITEM = {
  id: -1,
  name: "ทั้งหมด",
  count: products.length,
  slug: "all",
};

// Used for the page title lookup
const categories = [ALL_PRODUCTS_ITEM, ...allCategories];

const CATEGORY_GROUPS = [
  {
    label: "ฝ้าเพดาน / โครงผนัง",
    icon: LayoutGrid,
    items: allCategories.filter((c) => !ROOF_GROUP_IDS.includes(c.id)),
  },
  {
    label: "หลังคา",
    icon: Home,
    items: allCategories.filter((c) => ROOF_GROUP_IDS.includes(c.id)),
  },
];

type SidebarCategory = {
  id: number;
  name: string;
  count: number;
  slug: string;
};

function CategoryButton({
  category,
  selectedCategory,
}: {
  category: SidebarCategory;
  selectedCategory: number;
}) {
  const isSelected = selectedCategory === category.id;
  return (
    <Button
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
        <span
          className={`text-sm ${
            isSelected ? "text-white" : "text-muted-foreground"
          }`}
        >
          {category.count}
        </span>
      </Link>
    </Button>
  );
}

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

const GYPSUM_ACOUSTIC_FAQS = [
  {
    q: "แผ่นยิปซั่มลดเสียงสะท้อนคืออะไร?",
    a: "เป็นแผ่นฝ้ายิปซั่มที่เจาะรูทั่วแผ่น เมื่อเสียงมากระทบ เสียงส่วนหนึ่งจะลอดผ่านรูเข้าไปแทนการสะท้อนกลับเข้าห้อง จึงช่วยลดเสียงก้องและเสียงสะท้อน ต่างจากฝ้ายิปซั่มธรรมดาที่ผิวเรียบและสะท้อนเสียงกลับ เหมาะกับห้องเพดานสูงหรือพื้นที่กว้างที่มีเสียงก้องมาก",
  },
  {
    q: "ต่างจากแผ่นอะคูสติกใยแร่อย่างไร ควรเลือกแบบไหน?",
    a: "แผ่นยิปซั่มลดเสียงสะท้อนมีพื้นเป็นยิปซั่ม แข็งแรง ให้ลายเจาะรูสวยงามดูเรียบเนียนเป็นผืนเดียวกัน ส่วนแผ่นอะคูสติกใยแร่น้ำหนักเบาและเน้นดูดซับเสียงเป็นหลัก เลือกตามสไตล์ งบประมาณ และค่าการดูดซับเสียงที่ต้องการ",
  },
  {
    q: "มีลายเจาะรูแบบไหนบ้าง?",
    a: "มี 3 ลาย: ลายวงกลม (รูกลมเรียงเป็นระเบียบ ดูคลาสสิก), ลายธงชาติอังกฤษ (ลายเส้นไขว้ทันสมัย) และลายสะกดจิต (ลายวงซ้อนสะดุดตา) ทุกลายช่วยลดเสียงสะท้อนได้ เลือกที่ความสวยงามและสไตล์ห้องเป็นหลัก",
  },
  {
    q: "มีขนาดและความหนาอะไรบ้าง?",
    a: "ขนาด 600×600 มม. และ 600×1200 มม. หนา 9 มม. และ 12 มม. สำหรับระบบทีบาร์ และแผ่นใหญ่ 1200×2400 มม. หนา 9.5 มม. และ 12.5 มม. สำหรับงานฝ้าฉาบเรียบ",
  },
  {
    q: "ใช้กับระบบฝ้าแบบไหนได้บ้าง?",
    a: "ใช้ได้ทั้งระบบทีบาร์และระบบฉาบเรียบ แนะนำให้บุฉนวนใยแก้วเหนือแผ่นเพื่อเพิ่มประสิทธิภาพการดูดซับเสียง",
  },
  {
    q: "เหมาะกับห้องหรืออาคารแบบไหน?",
    a: "เหมาะกับโรงเรียน มหาวิทยาลัย โถงอาคาร โรงพยาบาล ห้องประชุม และสำนักงาน โดยเฉพาะพื้นที่เพดานสูงหรือห้องกว้างที่มีเสียงก้อง",
  },
  {
    q: "ขอราคาโครงการอย่างไร?",
    a: "โทร 02-415-3676 หรือทัก Line @kaistandard เพื่อขอใบเสนอราคาและคำแนะนำจากทีมงานผู้เชี่ยวชาญกว่า 40 ปี",
  },
];

const SOUND_ABSORB_FAQS = [
  {
    q: "แผ่นซับเสียง KS-501 คืออะไร ต่างจากแผ่นอะคูสติกฝ้าเพดานอย่างไร?",
    a: "KS-501 เป็นแผ่นซับเสียงโพลีเอสเตอร์สำหรับบุผนัง ส่วนแผ่นอะคูสติกเป็นฝ้าเพดาน ทั้งคู่ช่วยลดเสียงสะท้อน แต่ KS-501 เน้นติดผนังและตกแต่งได้สวยงาม ค่าดูดซับเสียง NRC 0.80",
  },
  {
    q: "แผ่นซับเสียงกันเสียงทะลุผนัง (soundproof) ได้ไหม?",
    a: "KS-501 เน้นดูดซับเสียงสะท้อนภายในห้องให้เสียงคมชัดขึ้น ไม่ใช่การกันเสียงลอดผ่านผนัง หากต้องการกันเสียงเข้า-ออกห้อง แนะนำใช้ร่วมกับฉนวนกันเสียง SCG Zoundblock",
  },
  {
    q: "ถ้าลดเสียงระหว่างห้องเลือกชนิดไหนดี?",
    a: "แนะนำเลือกสินค้าที่มีค่า STC สูง อาทิเช่น ฉนวนกันเสียง SCG รุ่น Cylence Zoundblock",
  },
  {
    q: "มีขนาด สี และราคาเท่าไหร่?",
    a: "มี 3 ขนาด: 60x60, 60x120, 60x240 ซม. หนา 9มม. ราคา 400 / 700 / 1,200 บาท (+VAT 7%) เฉดสีนอกเหนือจากขาว ดำ เทา โปรดสอบถามพนักงานขาย",
  },
  {
    q: "แผ่นซับเสียงติดตั้งอย่างไร?",
    a: "ติดตั้งง่ายด้วยกาว น้ำหนักเบา เหมาะกับงาน DIY และงานตกแต่งผนังทั่วไป",
  },
  {
    q: "อยากได้แผ่นซับเสียงแบบหุ้มผ้า มีทางเลือกอื่นไหม?",
    a: "มี รุ่น SCG Cylence Zandera เป็นแผ่นกลาสวูลหุ้มผ้า หนา 25 มม. สำหรับงานตกแต่งพรีเมียม เป็นสินค้าสั่งผลิต ใช้เวลาประมาณ 2-3 สัปดาห์",
  },
  {
    q: "สั่งซื้อหรือขอราคาโครงการอย่างไร?",
    a: "โทร 02-415-3676 หรือทัก Line @kaistandard เพื่อขอใบเสนอราคาและคำแนะนำจากทีมงาน",
  },
];

const ROOF_BATTEN_FAQS = [
  {
    q: "แปหลังคาอลูซิงค์กับกัลวาไนซ์ ต่างกันอย่างไร?",
    a: "อลูซิงค์เคลือบอะลูมิเนียม-สังกะสี ทนสนิมและการกัดกร่อนได้ดีกว่า เหมาะกับงานที่ต้องการอายุการใช้งานยาว ส่วนกัลวาไนซ์เคลือบสังกะสี ราคาย่อมเยากว่า เหมาะกับงานทั่วไป เลือกตามงบและสภาพหน้างาน",
  },
  {
    q: "ควรเลือกแปหลังคาความหนาเท่าไหร่?",
    a: "ขึ้นอยู่กับระยะห่างจันทันและน้ำหนักแผ่นหลังคา งานทั่วไปนิยม 0.55 มม. หากระยะห่างมากหรือรับน้ำหนักสูง แนะนำ 0.70–1.00 มม. เพื่อความแข็งแรงและลดการแอ่นตัว",
  },
  {
    q: "แปหลังคา กับ เหล็กกล่อง ต่างกันยังไง?",
    a: "แปหลังคาเป็นเหล็กรูปพรรณที่ออกแบบมาเพื่อรองรับแผ่นหลังคาโดยเฉพาะ รับน้ำหนักได้ดีและติดตั้งได้รวดเร็วกว่า จึงเป็นตัวเลือกที่นิยมสำหรับอาคาร โรงงาน และโกดังที่ใช้หลังคาเมทัลชีทหรือวัสดุมุงทั่วไป ส่วนเหล็กกล่องมีข้อดีที่ใช้ทำผนังได้ด้วย จึงยืดหยุ่นในการใช้งานมากกว่า",
  },
];

function GroupChips({
  sections,
}: {
  sections: { label: string; items: Product[] }[];
}) {
  const chips = sections
    .map((s, i) => ({ label: s.label, i }))
    .filter((c) => c.label !== "60*60ซม.");
  if (chips.length < 2) return null;
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {chips.map((c) => (
        <button
          key={c.i}
          type="button"
          onClick={() =>
            document
              .getElementById(`grp-${c.i}`)
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="border-primary text-primary hover:bg-primary rounded-full border px-3 py-1 text-sm transition hover:text-white"
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
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
              className={`object-cover transition-transform duration-300 group-hover:scale-105${product.categoryId === 8 ? " brightness-95" : ""}`}
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
  );
}

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

function GypsumAcousticFaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: GYPSUM_ACOUSTIC_FAQS.map((item) => ({
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
        {GYPSUM_ACOUSTIC_FAQS.map((item) => (
          <details key={item.q} className="group rounded-lg border bg-white">
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

function SoundAbsorbContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">แผ่นซับเสียงโพลีเอสเตอร์คืออะไร และเลือกแบบไหนดี?</h2>
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        แผ่นซับเสียงโพลีเอสเตอร์ (Polyester / PET Acoustic Panel) เป็นวัสดุซับเสียงที่ทำจากเส้นใยโพลีเอสเตอร์ (PET)
        อัดขึ้นรูปเป็นแผ่น ผิวสัมผัสนุ่มแบบสักหลาด (เฟลท์) เนื้อในมีรูพรุนจำนวนมาก
        เมื่อเสียงเดินทางมากระทบ เนื้อวัสดุจะเก็บพลังงานเสียงส่วนหนึ่งเอาไว้แทนการสะท้อนกลับ
        ผลคือเสียงก้องและเสียงสะท้อนภายในห้องลดลง รุ่น KS-501 ของไคสแตนดาร์ดให้ค่าดูดซับเสียง NRC 0.80 (Class B)
        มีให้เลือกทั้งสีขาว เทา ดำ และหลายขนาด เหมาะกับทั้งงานตกแต่งผนังและการควบคุมเสียงภายในห้อง
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "ห้องประชุม / สำนักงาน", text: "เหมาะสำหรับการประชุมหรือสำนักงาน บุผนังช่วยลดเสียงก้องในห้องประชุมและออฟฟิศ โดยเฉพาะออฟฟิศแบบเปิด ค่าดูดซับเสียง NRC 0.80 ทำให้เสียงพูดชัดขึ้น มีสีขาว เทา ดำ เลือกให้เข้ากับโทนออฟฟิศสไตล์โมเดิร์น" },
          { title: "โฮมเธียเตอร์ / ห้องฟังเพลง / ห้องอัดคอนเทนต์", text: "เหมาะกับห้องดูหนัง ฟังเพลง และห้องไลฟ์สดที่ต้องการเสียงคมชัด ติดตั้งง่ายด้วยกาว เหมาะกับงาน DIY หรือการไลฟ์สตรีมในห้องขนาดเล็กอีกด้วย" },
          { title: "คาเฟ่ / ร้านค้า / โชว์รูม", text: "สลับสีแผ่นสร้างลวดลายบนผนังได้อิสระ ทั้งซับเสียงและเป็นของตกแต่ง ผลิตจากใยโพลีเอสเตอร์รีไซเคิล สำหรับร้านค้าและคาเฟ่ที่มีเสียงคนจอแจตลอด ช่วยลดเสียงก้องได้มาก" },
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

function SoundAbsorbFaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: SOUND_ABSORB_FAQS.map((item) => ({
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
        {SOUND_ABSORB_FAQS.map((item) => (
          <details key={item.q} className="group rounded-lg border bg-white">
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

function RoofBattenContentSection() {
  return (
    <div className="mt-10 border-t pt-8">
      <h2 className="mb-3 text-xl font-semibold">แปหลังคาอะไร? เลือกใช้ยังไง?</h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        แปหลังคา คือเหล็กโครงสร้างที่ติดตั้งบนจันทัน ทำหน้าที่รองรับแผ่นหลังคาหรือเมทัลชีท
        ให้ยึดแน่นและกระจายน้ำหนักอย่างสม่ำเสมอ เลือกความหนาให้เหมาะกับระยะห่างจันทัน
        และน้ำหนักหลังคา ยิ่งหนายิ่งรับแรงได้มาก เหมาะทั้งงานบ้านพักอาศัยและงานโครงการ
        โดยเฉพาะโรงงานที่ต้องการควบคุมค่าก่อสร้าง
      </p>
    </div>
  );
}

function RoofBattenFaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ROOF_BATTEN_FAQS.map((item) => ({
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
        {ROOF_BATTEN_FAQS.map((item) => (
          <details key={item.q} className="group rounded-lg border bg-white">
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

const CILAI_FAQS = [
  {
    q: "ซีลายยาวกี่เมตร?",
    a: "ซีลายของไคสแตนดาร์ดยาว 4 เมตรต่อเส้น ทั้งเบอร์ 24 และเบอร์ 26",
  },
  {
    q: "ซีลายเบอร์ 24 กับเบอร์ 26 ต่างกันอย่างไร?",
    a: "เบอร์ 24 หนากว่าและแข็งแรงกว่า น้ำหนัก 0.80-0.85 กก./เส้น รับน้ำหนักแผ่นฝ้าได้ดีกว่า ราคา 36 บาท ส่วนเบอร์ 26 เบากว่าและประหยัดกว่า น้ำหนัก 0.60-0.65 กก./เส้น ราคา 32 บาท เหมาะกับงานที่ต้องการคุมงบ",
  },
  {
    q: "ซีลายราคาเท่าไหร่?",
    a: "ซีลายเบอร์ 26 ราคา 32 บาท/เส้น และเบอร์ 24 ราคา 36 บาท/เส้น (ยังไม่รวม VAT 7%) งานโครงการมีราคาพิเศษ สอบถามโทร 02-415-3676 หรือ Line @kaistandard",
  },
  {
    q: "ซีลายใช้คู่กับอะไร?",
    a: "ใช้คู่กับฉากริม 1 นิ้ว ยาว 2.40 เมตร เพื่อยึดขอบฝ้าเข้ากับผนัง ทำให้ได้ระบบฝ้าเพดานฉาบเรียบครบชุด",
  },
];

function CilaiFaqSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CILAI_FAQS.map((item) => ({
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
        {CILAI_FAQS.map((item) => (
          <details key={item.q} className="group rounded-lg border bg-white">
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

function CilaiSystemBox() {
  const cards = [
    {
      title: "แผ่นยิปซั่มมาตรฐานในระบบฉาบเรียบ",
      text: "แผ่นยิปซั่มขนาด 120x240 ซม. ยึดบนโครงซีลายเพื่อทำฝ้าเพดานฉาบเรียบ พื้นผิวเรียบพร้อมฉาบรอยต่อและทาสีทับ เหมาะกับบ้านพักอาศัย สำนักงาน และอาคารทั่วไป",
      href: "/products/category/แผ่นยิปซั่ม",
    },
    {
      title: "แผ่นอะคูสติกขนาด 60ซม.x120ซม. ในระบบฉาบเรียบ",
      text: "แผ่นฝ้าอะคูสติก 60x120 ซม. ช่วยลดเสียงสะท้อนในห้อง ติดตั้งในระบบฝ้าฉาบเรียบได้ ค่าดูดซับเสียง NRC สูง เหมาะกับห้องประชุมและสำนักงาน",
      href: "/products/category/แผ่นอะคูสติก",
    },
  ];
  return (
    <div className="mt-12 border-t pt-10">
      <h2 className="mb-6 text-2xl font-semibold">ใช้กับฝ้าเพดานแบบไหนดี?</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="block rounded-lg border bg-white p-4 transition-shadow hover:border-gray-300 hover:shadow-md"
          >
            <p className="mb-1 text-sm font-semibold text-gray-900">{card.title}</p>
            <p className="text-xs leading-relaxed text-gray-500">{card.text}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SystemChooserBox() {
  const cards = [
    {
      title: "ระบบทีบาร์",
      text: "เหมาะกับอาคารสำนักงานและอาคารราชการที่ต้องการความสะดวกในการดูแลและติดตั้ง รองรับแผ่นขนาด 60×120 ซม. และ 60×60 ซม.",
      href: "/products/category/แผ่นฝ้าทีบาร์",
    },
    {
      title: "ระบบฉาบเรียบ",
      text: "เหมาะกับอาคารที่เน้นความสวยงามและไม่ต้องการโชว์โครงแผ่น เช่น โรงพยาบาล ห้างสรรพสินค้า โรงแรม แนะนำแผ่นขนาด 120×240 ซม. เพื่อลดเวลาการติดตั้ง",
      href: "/products/category/ซีลาย",
    },
  ];
  return (
    <div className="mt-12 border-t pt-10">
      <h2 className="mb-6 text-2xl font-semibold">เลือกระบบโครงเคร่าฝ้าเพดานแบบไหนดี?</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="block rounded-lg border bg-white p-4 transition-shadow hover:border-gray-300 hover:shadow-md"
          >
            <p className="mb-1 text-sm font-semibold text-gray-900">{card.title}</p>
            <p className="text-xs leading-relaxed text-gray-500">{card.text}</p>
          </Link>
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
  const isSoundAbsorb = selectedCategory === SOUND_ABSORB_CATEGORY_ID;
  const isRoofBatten = selectedCategory === ROOF_BATTEN_CATEGORY_ID;
  const isCilai = selectedCategory === CILAI_CATEGORY_ID;
  const isCategoryPage = selectedCategory !== -1;

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === -1 || product.categoryId === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const perPage = isCeilingFrame
    ? CEILING_FRAME_PRODUCTS_PER_PAGE
    : isCilai
    ? CILAI_PRODUCTS_PER_PAGE
    : isGypsumAcoustic
    ? GYPSUM_ACOUSTIC_PRODUCTS_PER_PAGE
    : isTBar
    ? TBAR_PRODUCTS_PER_PAGE
    : PRODUCTS_PER_PAGE;
  const totalPages = Math.ceil(filteredProducts.length / perPage);
  const safePage = Math.min(currentPage, Math.max(1, totalPages));
  const startIndex = (safePage - 1) * perPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + perPage
  );

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-6">
          <h1 className="mb-2 text-3xl font-bold md:text-2xl">
            {selectedCategory === -1
              ? "สินค้าของเรา"
              : CATEGORY_HEADINGS[selectedCategory]?.h1 ??
                categories.find((c) => c.id === selectedCategory)?.name}
          </h1>
          <p className="text-muted-foreground mb-4 text-sm">
            {selectedCategory === -1
              ? "เลือกชมประเภทสินค้าที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย อาคารพาณิชย์ และอุตสาหกรรม"
              : CATEGORY_HEADINGS[selectedCategory]?.subtitle ??
                `${categories.find((c) => c.id === selectedCategory)?.name} คุณภาพสูง ราคาโรงงาน เหมาะสำหรับห้องประชุม สำนักงาน โรงพยาบาล และโครงการก่อสร้าง ส่งทั่วประเทศ`}
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
                <CategoryButton
                  category={ALL_PRODUCTS_ITEM}
                  selectedCategory={selectedCategory}
                />
              </div>

              {CATEGORY_GROUPS.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <div key={group.label} className="mt-5">
                    <div className="mb-2 flex items-center gap-2 rounded-md bg-blue-50 px-3 py-2 text-xs font-medium text-blue-900">
                      <GroupIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{group.label}</span>
                    </div>
                    <div className="space-y-2">
                      {group.items.map((category) => (
                        <CategoryButton
                          key={category.id}
                          category={category}
                          selectedCategory={selectedCategory}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                กำลังแสดงสินค้าจำนวน {filteredProducts.length} รายการ
              </p>
            </div>

            {isCeilingFrame ? (
              <div className="space-y-8">
                {groupCeilingFrameProducts(paginatedProducts).map((section) => (
                  <div key={section.label}>
                    <h2 className="bg-primary text-primary-foreground mb-4 rounded-md px-4 py-2.5 text-lg font-semibold">
                      {section.label}
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                      {section.items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : isCilai ? (
              <div className="space-y-8">
                {groupCilaiProducts(paginatedProducts).map((section) => (
                  <div key={section.label}>
                    <h2 className="bg-primary text-primary-foreground mb-4 rounded-md px-4 py-2.5 text-lg font-semibold">
                      {section.label}
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                      {section.items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : isAcoustic ? (
              <div className="space-y-8">
                <GroupChips sections={groupAcousticProducts(paginatedProducts)} />
                {groupAcousticProducts(paginatedProducts).map((section, sIdx) => (
                  <div key={section.label} id={`grp-${sIdx}`} className="scroll-mt-24">
                    <h2 className="bg-primary text-primary-foreground mb-4 rounded-md px-4 py-2.5 text-lg font-semibold">
                      {section.label}
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                      {section.items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : isGypsumAcoustic ? (
              <div className="space-y-8">
                <GroupChips sections={groupGypsumAcousticProducts(paginatedProducts)} />
                {groupGypsumAcousticProducts(paginatedProducts).map((section, sIdx) => (
                  <div key={section.label} id={`grp-${sIdx}`} className="scroll-mt-24">
                    <h2 className="bg-primary text-primary-foreground mb-4 rounded-md px-4 py-2.5 text-lg font-semibold">
                      {section.label}
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                      {section.items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : isTBar ? (
              <div className="space-y-8">
                <GroupChips sections={groupTBarProducts(paginatedProducts)} />
                {groupTBarProducts(paginatedProducts).map((section, sIdx) => (
                  <div key={section.label} id={`grp-${sIdx}`} className="scroll-mt-24">
                    <h2 className="bg-primary text-primary-foreground mb-4 rounded-md px-4 py-2.5 text-lg font-semibold">
                      {section.label}
                    </h2>
                    <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                      {section.items.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

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
            {isGypsumAcoustic && filteredProducts.length > 0 && <GypsumAcousticFaqSection />}
            {isGypsum && filteredProducts.length > 0 && <GypsumContentSection />}
            {isCeilingFrame && filteredProducts.length > 0 && <CeilingFrameContentSection />}
            {isTBar && filteredProducts.length > 0 && <TBarContentSection />}
            {isSoundAbsorb && filteredProducts.length > 0 && <SoundAbsorbContentSection />}
            {isSoundAbsorb && filteredProducts.length > 0 && <SoundAbsorbFaqSection />}
            {isRoofBatten && filteredProducts.length > 0 && <RoofBattenContentSection />}
            {isRoofBatten && filteredProducts.length > 0 && <RoofBattenFaqSection />}
            {isTBar && filteredProducts.length > 0 && <SystemChooserBox />}
            {isCilai && filteredProducts.length > 0 && <CilaiSystemBox />}
            {isCilai && filteredProducts.length > 0 && <CilaiFaqSection />}
          </div>
        </div>
      </div>
    </div>
  );
}
