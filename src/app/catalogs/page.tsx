import BgPattern from "@/components/bgPattern";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { catalogs } from "@/data/catalog";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "แคตตาล็อก",
  description:
    "ผู้เชี่ยวชาญด้านงานระบบฝ้าเพดานและโครงหลังคามามากกว่า 40 ปี มุ่งมั่นออกแบบและพัฒนานวัตกรรมในงานระบบฝ้าเพดานทั้งในด้านความสวยงาม และการใช้งาน",
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

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {catalogs.map((catalog) => (
            <Link
              key={catalog.id}
              href={catalog.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Card className="group p-0 transition-shadow hover:shadow-lg">
                <CardHeader className="p-0">
                  <div className="relative h-96 overflow-hidden rounded-t-lg">
                    <Image
                      src={catalog.image || "/placeholder.svg"}
                      alt={`${catalog.name}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <CardTitle className="mb-2 text-lg">{catalog.name}</CardTitle>
                  <div className="flex items-center justify-center">
                    <span className="border-primary text-primary group-hover:bg-primary flex-1 rounded-md border px-3 py-1 text-center text-sm transition-colors group-hover:text-white">
                      ดูรายละเอียด
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
