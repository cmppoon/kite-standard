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
      "Browse our comprehensive collection of premium ceiling materials including acoustic tiles, fire-resistant panels, decorative ceilings, and commercial solutions. Professional installation available.",
    keywords:
      "ceiling products, acoustic ceiling tiles, fire resistant ceiling panels, decorative ceiling materials, commercial ceiling solutions, suspended ceiling systems",
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
