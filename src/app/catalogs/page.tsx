import BgPattern from "@/components/bgPattern";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { catalogs } from "@/data/catalog";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "แคตตาล็อกสินค้า | แผ่นอะคูสติก ยิปซั่มลดเสียงสะท้อน ไคสแตนดาร์ด",
  description:
    "ดาวน์โหลดแคตตาล็อกแผ่นอะคูสติก ฝ้าอะคูสติก ยิปซั่มลดเสียงสะท้อน และวัสดุฝ้าเพดานคุณภาพสูงจากไคสแตนดาร์ด ราคาโรงงาน สอบถามโทร 02-415-3676",
};

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden px-4 py-12">
        <BgPattern />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="font-kanit mb-6 text-3xl font-bold text-white md:text-4xl">
            แคตตาล็อกสินค้า
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 lg:max-w-5xl">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {catalogs.map((catalog) => (
            <Card
              key={catalog.id}
              className="group p-0 transition-shadow hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <Link
                  href={catalog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative h-96 overflow-hidden rounded-t-lg">
                    <Image
                      src={catalog.image || "/placeholder.svg"}
                      alt={`${catalog.name}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardTitle className="mb-2 text-lg">{catalog.name}</CardTitle>
                <div className="flex flex-col gap-2">
                  <Link
                    href={catalog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-primary text-primary hover:bg-primary rounded-md border px-3 py-1 text-center text-sm transition-colors hover:text-white"
                  >
                    ดูรายละเอียด
                  </Link>
                  {catalog.categoryUrl && (
                    <Link
                      href={catalog.categoryUrl}
                      className="bg-primary rounded-md px-3 py-1 text-center text-sm text-white transition-opacity hover:opacity-90"
                    >
                      {catalog.categoryLabel}
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}