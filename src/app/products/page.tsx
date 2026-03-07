import ProductsClientPage from "@/app/products/productsClientPage";

export const metadata = {
  title: "สินค้าทั้งหมด | แผ่นอะคูสติก ยิปซั่มลดเสียงสะท้อน",
  description:
    "จำหน่ายแผ่นอะคูสติก ยิปซั่มลดเสียงสะท้อน ประสบการณ์กว่า 40 ปี เหมาะสำหรับห้องประชุม สำนักงาน โรงแรม สอบถามราคาโทร 02-415-3676",
};

export default function ProductsPage() {
  return <ProductsClientPage selectedCategory={-1} />;
}
