import type { Metadata } from "next";
import Image from "next/image";
import { referenceProjects } from "../../data/referenceProjects";

export const metadata: Metadata = {
  title: "ผลงานที่ผ่านมา | KAI Standard",
  description:
    "โครงการที่ KAI Standard จัดส่งแผ่นอะคูสติกและแผ่นยิปซั่มลดเสียงสะท้อน ให้กับมหาวิทยาลัย โรงเรียน ธนาคาร และหน่วยงานราชการทั่วประเทศ",
};

export default function ReferencePage() {
  // เรียงจาก id มากไปน้อย = โครงการล่าสุดขึ้นบนสุดเสมอ
  const projects = [...referenceProjects].sort((a, b) => b.id - a.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
        ผลงานที่ผ่านมา
      </h1>

      {/* เพิ่มข้อความแนะนำตรงนี้ได้ ถ้าต้องการ — ลบทั้งบล็อกนี้ถ้าไม่ใช้
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-gray-600">
        ใส่ข้อความของคุณตรงนี้
      </p>
      */}

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full bg-gray-100">
              <Image
                src={project.image}
                alt={project.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm leading-relaxed text-gray-800">
                {project.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
