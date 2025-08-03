import ProductsClientPage from "@/app/products/ProductsClientPage";

export const metadata = {
  title: "สินค้า",
  description:
    "Browse our comprehensive collection of premium ceiling materials including acoustic tiles, fire-resistant panels, decorative ceilings, and commercial solutions. Professional installation available.",
  keywords:
    "ceiling products, acoustic ceiling tiles, fire resistant ceiling panels, decorative ceiling materials, commercial ceiling solutions, suspended ceiling systems",
};

export default function ProductsPage() {
  return <ProductsClientPage selectedCategory={-1} />;
}
