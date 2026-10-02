import ProductsClientPage from "@/app/products/productsClientPage";
import { productCategories } from "@/data/productCategories";
import { permanentRedirect } from "next/navigation";
import React from "react";

// Old category addresses that now live under a new slug.
// Key = old slug, value = new slug.
const OLD_CATEGORY_REDIRECTS: Record<string, string> = {
  "แปหลังคา": "แปหลังคา แปสำเร็จรูป",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  const canonicalUrl = `https://www.kaistandard.com/products/category/${slug}`;

  // Custom Google title per category. Key = category name.
  // Categories not listed here keep the default "<name> ราคาโรงงาน".
  // NOTE: prices here are typed by hand. If a product price changes,
  // update the matching line too.
  const titleMap: Record<string, string> = {
    "แผ่นอะคูสติก": "แผ่นอะคูสติก ฝ้าอะคูสติก ราคาโรงงาน เริ่ม 65 บาท",
    "แปหลังคา แปสำเร็จรูป": "แปสำเร็จรูป แปหลังคา ราคา 80-209 บาท",
    "ช่องเซอร์วิส": "ช่องเซอร์วิส ฝ้าเพดาน ราคาเริ่ม 220 บาท",
    "ยิปซั่มลดเสียงสะท้อน": "ยิปซั่มลดเสียงสะท้อน ราคาเริ่ม 175 บาท",
    "ซีลาย": "โครงซีลาย เบอร์ 24 เบอร์ 26 ราคาเริ่ม 32 บาท",
    "แผ่นยิปซั่ม": "แผ่นยิปซั่ม 9 มม. 12 มม. ราคาเริ่ม 99 บาท",
    "โครงทีบาร์": "โครงทีบาร์ ราคาเริ่ม 45 บาท",
    "แผ่นฝ้าทีบาร์": "แผ่นฝ้าทีบาร์ ราคาเริ่ม 46 บาท",
    "แผ่นซับเสียง": "แผ่นซับเสียง ราคาเริ่ม 209 บาท",
    "ฉนวนกันความร้อน/ฉนวนกันเสียง": "ฉนวนกันความร้อน ฉนวนกันเสียง ราคาเริ่ม 88 บาท",
    "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคา": "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคา ราคาเริ่ม 125 บาท",
    "รางน้ำตะเข้": "รางน้ำตะเข้ สันตะเข้ ราคาเริ่ม 210 บาท",
  };

  const descriptionMap: Record<string, string> = {
    "แผ่นอะคูสติก":
      "แผ่นอะคูสติก ราคา 65-263 บาท/แผ่น เหมาะสำหรับห้องประชุม สำนักงาน โรงแรม มหาวิทยาลัย NRC 0.55-0.65 สต็อกพร้อมส่ง โทร 02-415-3676",
    "ยิปซั่มลดเสียงสะท้อน":
      "แผ่นยิปซั่มลดเสียงสะท้อน ฝ้าเพดานกันเสียง คุณภาพสูง ราคาโรงงาน จัดส่งทั่วกรุงเทพและปริมณฑล สอบถาม Line @kaistandard",
    "แผ่นยิปซั่ม":
      "แผ่นยิปซั่มคุณภาพสูง หลากหลายขนาด ทั้งชนิดธรรมดาและทนชื้น ราคาโรงงาน จัดส่งทั่วกรุงเทพ โทร 02-415-3676",
    "โครงทีบาร์":
      "โครงทีบาร์ (T-Bar) โครงคร่าวเหล็กชุบสังกะสีสำหรับติดตั้งแผ่นฝ้าทีบาร์ แข็งแรง ได้ระดับ ติดตั้งง่าย ราคาโรงงาน มีสต็อกพร้อมส่ง จัดส่งทั่วประเทศ",
    "แผ่นฝ้าทีบาร์":
      "แผ่นฝ้าทีบาร์คุณภาพสูง ราคาโรงงาน หลากหลายขนาดและลาย เหมาะสำหรับสำนักงาน ห้างสรรพสินค้า และอาคารพาณิชย์ สอบถามโทร 02-415-3676",
    "ช่องเซอร์วิส":
      "ช่องเซอร์วิสฝ้าเพดานคุณภาพสูง ราคาโรงงาน ใช้งานง่าย ทนทาน เหมาะสำหรับงานระบบ ไฟฟ้า ประปา และแอร์ สอบถามโทร 02-415-3676",
    "ซีลาย":
      "ซีลาย (C-Line) โครงคร่าวเหล็กชุบกัลวาไนซ์ ทำฝ้าเพดานฉาบเรียบ มีเบอร์ 24 และ 26 ราคาโรงงาน มีสต็อกพร้อมส่ง จัดส่งทั่วประเทศ สอบถามโทร 02-415-3676",
    "แปหลังคา แปสำเร็จรูป":
      "แปหลังคาสำเร็จรูป อลูซิงค์ กัลวาไนซ์ สังกะสี หนา 0.50-1.00 มม. ยาว 6 เมตร ราคา 80-209 บาท มีสต็อกพร้อมส่ง รับงานโครงการ โทร 02-415-3676",
    "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคา":
      "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคาคุณภาพสูง ราคาโรงงาน กันน้ำ ทนทาน เหมาะสำหรับงานหลังคาทุกประเภท สอบถามโทร 02-415-3676",
    "แผ่นซับเสียง":
      "แผ่นซับเสียง acoustic board โพลีเอสเตอร์ SCG รุ่น Cylence Zandera วัสดุอะคูสติกบุผนังดูดซับเสียง ผลิตจากกลาสวูลหุ้มผ้า เหมาะสำหรับห้องโฮมเธียเตอร์ ห้องอัดเสียง ห้องประชุม สอบถาม Line @kaistandard",
    "ฉนวนกันความร้อน/ฉนวนกันเสียง":
      "ฉนวนใยหิน SCG Stone Wool และฉนวนใยแก้ว SCG Stay Cool สำหรับฝ้าเพดานและผนังเบา กันความร้อน ป้องกันไฟ ดูดซับเสียง ไม่มีส่วนผสมแร่ใยหิน ราคาโรงงาน โทร 02-415-3676",
    "รางน้ำตะเข้":
      "รางน้ำตะเข้ สันตะเข้ อลูซิงค์ และสีน้ำตาล เหล็กเบอร์ 28 กว้าง 40 ซม. ยาว 2 เมตร ราคา 210-215 บาท/เส้น พร้อมขาตัวยูยึดราง ตราเรือใบ โทร 02-415-3676",
  };

  const categoryName = category ? category.name : "สินค้า";
  const description =
    descriptionMap[categoryName] ||
    "ไคสแตนดาร์ด ผู้เชี่ยวชาญด้านฝ้าเพดานและแผ่นอะคูสติก ประสบการณ์กว่า 40 ปี โทร 02-415-3676";

  return {
    title: category
      ? titleMap[categoryName] ?? `${category.name} ราคาโรงงาน`
      : "สินค้า | ไคสแตนดาร์ด",
    description,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

const getCategoryBySlug = (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const category = productCategories.filter(
    (category) => category.slug === decodedSlug,
  );
  return category.length > 0 ? category[0] : null;
};

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const newSlug = OLD_CATEGORY_REDIRECTS[decodedSlug];
  if (newSlug) {
    permanentRedirect(`/products/category/${encodeURIComponent(newSlug)}`);
  }

  const category = getCategoryBySlug(slug);

  return <ProductsClientPage selectedCategory={category ? category.id : -1} />;
}
