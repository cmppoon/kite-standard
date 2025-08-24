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
  return {
    title: category ? category.name : "สินค้า",
    description:
      "ผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40 ปี มุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม และการใช้งาน",
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
