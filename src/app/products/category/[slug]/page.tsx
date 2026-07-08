import ProductsClientPage from "@/app/products/productsClientPage";
import { productCategories } from "@/data/productCategories";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  const descriptionMap: Record<string, string> = {
    แผ่นอะคูสติก:
      "แผ่นอะคูสติก ราคา 65-263 บาท/แผ่น เหมาะสำหรับห้องประชุม สำนักงาน โรงแรม มหาวิทยาลัย NRC 0.55-0.65 สต็อกพร้อมส่ง โทร 02-415-3676",
    แผ่นยิปซั่มลดเสียงสะท้อน:
      "แผ่นยิปซั่มลดเสียงสะท้อน ฝ้าเพดานกันเสียง คุณภาพสูง ราคาโรงงาน จัดส่งทั่วกรุงเทพและปริมณฑล สอบถาม Line @kaistandard",
    แผ่นยิปซั่ม:
      "แผ่นยิปซั่มคุณภาพสูง หลากหลายขนาด ทั้งชนิดธรรมดาและทนชื้น ราคาโรงงาน จัดส่งทั่วกรุงเทพ โทร 02-415-3676",
    โครงเคร่าฝ้าเพดาน:
      "โครงเคร่าฝ้าเพดานคุณภาพสูง ราคาโรงงาน เหมาะสำหรับงานติดตั้งฝ้าเพดานทุกประเภท ทั้งงานบ้าน อาคารพาณิชย์ และโรงงาน สอบถามโทร 02-415-3676",
    แผ่นฝ้าทีบาร์:
      "แผ่นฝ้าทีบาร์คุณภาพสูง ราคาโรงงาน หลากหลายขนาดและลาย เหมาะสำหรับสำนักงาน ห้างสรรพสินค้า และอาคารพาณิชย์ สอบถามโทร 02-415-3676",
    ช่องเซอร์วิส:
      "ช่องเซอร์วิสฝ้าเพดานคุณภาพสูง ราคาโรงงาน ใช้งานง่าย ทนทาน เหมาะสำหรับงานระบบ ไฟฟ้า ประปา และแอร์ สอบถามโทร 02-415-3676",
    "แปหลังคา แปสำเร็จรูป":
      "แปหลังคา แปสำเร็จรูปคุณภาพสูง ราคาโรงงาน แข็งแรง ทนทาน เหมาะสำหรับงานก่อสร้างทุกประเภท จัดส่งทั่วกรุงเทพ สอบถามโทร 02-415-3676",
    "แผ่นปิดรอยต่อ-แผ่นครอบสันหลังคา":
      "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคาคุณภาพสูง ราคาโรงงาน กันน้ำ ทนทาน เหมาะสำหรับงานหลังคาทุกประเภท สอบถามโทร 02-415-3676",
    แผ่นซับเสียง:
      "แผ่นซับเสียง SCG รุ่น Cylence Zandera วัสดุอะคูสติกบุผนังดูดซับเสียง ผลิตจากกลาสวูลหุ้มผ้า เหมาะสำหรับห้องโฮมเธียเตอร์ ห้องอัดเสียง ห้องประชุม สอบถาม Line @kaistandard",
  };

  const categoryName = category ? category.name : "สินค้า";
  const description =
    descriptionMap[categoryName] ||
    "ไคสแตนดาร์ด ผู้เชี่ยวชาญด้านฝ้าเพดานและแผ่นอะคูสติก ประสบการณ์กว่า 40 ปี โทร 02-415-3676";

  return {
    title: category
      ? `${category.name} ราคาโรงงาน`
      : "สินค้า | ไคสแตนดาร์ด",
    description,
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
  const category = getCategoryBySlug(slug);

  return <ProductsClientPage selectedCategory={category ? category.id : -1} />;
}
