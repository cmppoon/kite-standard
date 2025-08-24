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
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <svg
            className="h-full w-full"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Background Gradient */}
            <defs>
              <linearGradient
                id="bgGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#004AAD" />
                <stop offset="50%" stopColor="#405BD8" />
                <stop offset="100%" stopColor="#38B6FF" />
              </linearGradient>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38B6FF" stopOpacity="0.25" />
                <stop offset="50%" stopColor="#405BD8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#004AAD" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="whiteWave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            {/* Background */}
            <rect width="1200" height="200" fill="url(#bgGradient)" />

            {/* Wave Layers */}
            <path
              d="M0,60 C300,40 600,80 900,60 C1050,50 1150,70 1200,60 L1200,200 L0,200 Z"
              fill="url(#wave1)"
            />

            {/* White contrast wave */}
            <path
              d="M0,100 C250,80 550,120 850,100 C1000,90 1100,110 1200,100 L1200,200 L0,200 Z"
              fill="url(#whiteWave)"
            />

            {/* Simplified ceiling-related icons - smaller and fewer */}
            {/* Grid Pattern Icon */}
            <g transform="translate(150,30)" opacity="0.12">
              <rect
                x="0"
                y="0"
                width="20"
                height="20"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <line
                x1="0"
                y1="7"
                x2="20"
                y2="7"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="14"
                x2="20"
                y2="14"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <line
                x1="7"
                y1="0"
                x2="7"
                y2="20"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
              <line
                x1="14"
                y1="0"
                x2="14"
                y2="20"
                stroke="#FFFFFF"
                strokeWidth="0.5"
              />
            </g>

            {/* Building Icon */}
            <g transform="translate(600,25)" opacity="0.1">
              <rect
                x="0"
                y="5"
                width="8"
                height="15"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <rect
                x="10"
                y="2"
                width="8"
                height="18"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <rect
                x="20"
                y="8"
                width="8"
                height="12"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <rect x="2" y="8" width="1.5" height="1.5" fill="#FFFFFF" />
              <rect x="2" y="12" width="1.5" height="1.5" fill="#FFFFFF" />
              <rect x="12" y="6" width="1.5" height="1.5" fill="#FFFFFF" />
              <rect x="22" y="11" width="1.5" height="1.5" fill="#FFFFFF" />
            </g>

            {/* Ceiling Light Icon */}
            <g transform="translate(1000,20)" opacity="0.11">
              <circle
                cx="10"
                cy="10"
                r="8"
                fill="none"
                stroke="#FFFFFF"
                strokeWidth="1"
              />
              <circle cx="10" cy="10" r="4" fill="#FFFFFF" opacity="0.15" />
              <path
                d="M10,2 L10,0 M18,10 L20,10 M10,18 L10,20 M2,10 L0,10"
                stroke="#FFFFFF"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </g>

            {/* White contrast elements */}
            <circle cx="300" cy="40" r="1.5" fill="#FFFFFF" opacity="0.2" />
            <circle cx="800" cy="35" r="1" fill="#FFFFFF" opacity="0.15" />
            <circle cx="450" cy="45" r="1.2" fill="#FFFFFF" opacity="0.18" />
          </svg>
        </div>

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
