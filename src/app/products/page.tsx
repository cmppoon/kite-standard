import ProductsClientPage from "@/app/products/productsClientPage";

export const metadata = {
  title: "สินค้า",
  description:
    "ผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40 ปี มุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม และการใช้งาน",
};

export default function ProductsPage() {
  return <ProductsClientPage selectedCategory={-1} />;
}
