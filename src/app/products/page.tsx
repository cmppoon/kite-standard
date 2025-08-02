import ProductsClientPage from "@/app/products/ProductsClientPage";
import { Suspense } from "react";

export const metadata = {
  title:
    "Premium Ceiling Products & Materials | Acoustic, Fire-Resistant & Decorative Ceilings",
  description:
    "Browse our comprehensive collection of premium ceiling materials including acoustic tiles, fire-resistant panels, decorative ceilings, and commercial solutions. Professional installation available.",
  keywords:
    "ceiling products, acoustic ceiling tiles, fire resistant ceiling panels, decorative ceiling materials, commercial ceiling solutions, suspended ceiling systems",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>กำลังโหลดสินค้า...</div>}>
      <ProductsClientPage />
    </Suspense>
  );
}
