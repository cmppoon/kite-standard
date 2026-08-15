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
    ยิปซั่มลดเสียงสะท้อน:
      "แผ่นยิปซั่มลดเสียงสะท้อน ฝ้าเพดานกันเสียง คุณภาพสูง ราคาโรงงาน จัดส่งทั่วกรุงเทพและปริมณฑล สอบถาม Line @kaistandard",
    แผ่นยิปซั่ม:
      "แผ่นยิปซั่มคุณภาพสูง หลากหลายขนาด ทั้งชนิดธรรมดาและทนชื้น ราคาโรงงาน จัดส่งทั่วกรุงเทพ โทร 02-415-3676",
    โครงทีบาร์:
      "โครงทีบาร์ (T-Bar) โครงคร่าวเหล็กชุบสังกะสีสำหรับติดตั้งแผ่นฝ้าทีบาร์ แข็งแรง ได้ระดับ ติดตั้งง่าย ราคาโรงงาน มีสต็อกพร้อมส่ง จัดส่งทั่วประเทศ",
    แผ่นฝ้าทีบาร์:
      "แผ่นฝ้าทีบาร์คุณภาพสูง ราคาโรงงาน หลากหลายขนาดและลาย เหมาะสำหรับสำนักงาน ห้างสรรพสินค้า และอาคารพาณิชย์ สอบถามโทร 02-415-3676",
    ช่องเซอร์วิส:
      "ช่องเซอร์วิสฝ้าเพดานคุณภาพสูง ราคาโรงงาน ใช้งานง่าย ทนทาน เหมาะสำหรับงานระบบ ไฟฟ้า ประปา และแอร์ สอบถามโทร 02-415-3676",
    ซีลาย:
      "ซีลาย (C-Line) โครงคร่าวเหล็กชุบกัลวาไนซ์ ทำฝ้าเพดานฉาบเรียบ มีเบอร์ 24 และ 26 ราคาโรงงาน มีสต็อกพร้อมส่ง จัดส่งทั่วประเทศ สอบถามโทร 02-415-3676",
    "แปหลังคา แปสำเร็จรูป":
      "แปหลังคาสำเร็จรูป อลูซิงค์และกัลวาไนซ์ หนา 0.55-0.85 มม. ยาว 6 เมตร แข็งแรงไม่เป็นสนิม ราคาโรงงาน มีสต็อกพร้อมส่ง รับงานโครงการ โทร 02-415-3676",
    "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคา":
      "แผ่นปิดรอยต่อ แผ่นครอบสันหลังคาคุณภาพสูง ราคาโรงงาน กันน้ำ ทนทาน เหมาะสำหรับงานหลังคาทุกประเภท สอบถามโทร 02-415-3676",
    แผ่นซับเสียง:
      "แผ่นซับเสียง acoustic board โพลีเอสเตอร์ SCG รุ่น Cylence Zandera วัสดุอะคูสติกบุผนังดูดซับเสียง ผลิตจากกลาสวูลหุ้มผ้า เหมาะสำหรับห้องโฮมเธียเตอร์ ห้องอัดเสียง ห้องประชุม สอบถาม Line @kaistandard",
    ฉนวนกันความร้อน:
      "ฉนวนกันความร้อนสำหรับฝ้าเพดานและหลังคา ลดความร้อนเข้าสู่อาคาร ประหยัดพลังงาน ราคาโรงงาน มีสต็อกพร้อมส่ง จัดส่งทั่วประเทศ โทร 02-415-3676",
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
