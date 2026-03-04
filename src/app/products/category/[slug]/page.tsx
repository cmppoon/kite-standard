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
      "แผ่นอะคูสติกลดเสียงสะท้อน คุณภาพสูง ผลิตเองโดยไคสแตนดาร์ด เหมาะสำหรับห้องประชุม สำนักงาน โรงแรม มหาวิทยาลัย หลากหลายขนาดและลาย สอบถามราคาได้เลย โทร 02-415-3676",
    แผ่นยิปซั่มลดเสียงสะท้อน:
      "แผ่นยิปซั่มลดเสียงสะท้อน ฝ้าเพดานกันเสียง คุณภาพสูง ราคาโรงงาน จัดส่งทั่วกรุงเทพและปริมณฑล สอบถาม Line @kaistandard",
    แผ่นยิปซั่ม:
      "แผ่นยิปซั่มคุณภาพสูง หลากหลายขนาด ทั้งชนิดธรรมดาและทนชื้น ราคาโรงงาน จัดส่งทั่วกรุงเทพ โทร 02-415-3676",
  };

  const categoryName = category ? category.name : "สินค้า";
  const description =
    descriptionMap[categoryName] ||
    "ไคสแตนดาร์ด ผู้เชี่ยวชาญด้านฝ้าเพดานและแผ่นอะคูสติก ประสบการณ์กว่า 40 ปี โทร 02-415-3676";

  return {
    title: category
      ? `${category.name} | ไคสแตนดาร์ด ราคาโรงงาน`
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
