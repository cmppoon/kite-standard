"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { articles } from "@/data/articles";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const ARTICLES_PER_PAGE = 12;

const ALL_TAG = "ทั้งหมด";

const TAGS = ["ปัญหาเรื่องเสียง", "ออกแบบฝ้า", "รู้จักวัสดุ"] as const;

// แผนที่ slug -> tag
// บทความที่ไม่มีในตารางนี้ จะแสดงเฉพาะตอนกด "ทั้งหมด"
// เวลาเพิ่มบทความใหม่ อย่าลืมมาเพิ่ม slug ที่นี่ด้วย
const ARTICLE_TAGS: Record<string, string> = {
  // ปัญหาเรื่องเสียง
  "5-วิธี-ขจัดเสียงรบกวน": "ปัญหาเรื่องเสียง",
  "5-ปัญหาในห้องประชุม": "ปัญหาเรื่องเสียง",
  เสียงก้องห้องไหนที่ไม่ควรมี: "ปัญหาเรื่องเสียง",
  ฝ้าห้องประชุมเลือกวัสดุอะไรดี: "ปัญหาเรื่องเสียง",
  พื้นที่แบบไหนที่ขาดไม่ได้สำหรับฝ้าอะคูสติก: "ปัญหาเรื่องเสียง",
  ทำไมห้องเพดานสูงเสียงก้อง: "ปัญหาเรื่องเสียง",
  ฝ้าอะคูสติกในโรงเรียน: "ปัญหาเรื่องเสียง",
  ทำไมวัดถึงใช้แผ่นอะคูสติก: "ปัญหาเรื่องเสียง",
  "ฝ้าอะคูสติกคืออะไร-ลดเสียงก้องกับลดเสียงทะลุต่างกันยังไง":
    "ปัญหาเรื่องเสียง",
  "แผ่นฝ้าอะคูสติก-nrc-0.50-หมายถึงอะไร": "ปัญหาเรื่องเสียง",
  "nrc-0-50-คืออะไร-ดูดซับเสียงได้ดีพอไหม": "ปัญหาเรื่องเสียง",
  "stc-คืออะไร": "ปัญหาเรื่องเสียง",
  "ดูดซับเสียง-กันเสียง-ต่างกันอย่างไร": "ปัญหาเรื่องเสียง",
  ห้องดนตรีใช้ผนังอะไรดี: "ปัญหาเรื่องเสียง",

  // ออกแบบฝ้า
  "4-สิ่งที่คุณควรรู้เกี่ยวกับการออกแบบฝ้า": "ออกแบบฝ้า",
  "ฝ้าสูง-VS-ฝ้าต่ำ-เลือกแบบไหนดีกว่ากัน": "ออกแบบฝ้า",
  สีฝ้าเพดานเลือกโทนไหนดี: "ออกแบบฝ้า",
  เคล็ดลับเปลี่ยนห้องเดิมให้ดูมีอะไรมากขึ้นด้วยฝ้าลายจุด: "ออกแบบฝ้า",
  ข้อดีข้อเสียฝ้าหลุม: "ออกแบบฝ้า",
  ฝ้าสีเข้มดียังไง: "ออกแบบฝ้า",
  "ฝ้ามีลวดลาย-แต่งห้องยังไงให้ดูดี": "ออกแบบฝ้า",
  ฝ้าเพดานควรสูงเท่าไหร่: "ออกแบบฝ้า",
  เพดานคอนโดควรสูงเท่าไหร่: "ออกแบบฝ้า",
  "เทคนิคการเลือกใช้ฝ้า-2-สี-หรือ-2-texture": "ออกแบบฝ้า",
  "ฝ้าโค้ง-ข้อดีข้อเสีย": "ออกแบบฝ้า",

  // รู้จักวัสดุ
  ทำไมฝ้าทีบาร์ถึงเป็นตัวเลือกยอดฮิต: "รู้จักวัสดุ",
  แผ่นอะคูสติกคืออะไร: "รู้จักวัสดุ",
  ทำไมแผ่นยิปซั่มดูดซับเสียงต้องมีลวดลาย: "รู้จักวัสดุ",
  ฝ้าอะคูสติกติดตั้งระบบฉาบเรียบได้มั้ย: "รู้จักวัสดุ",
  แผ่นอะคูสติกต่างกับยิปซั่มยังไง: "รู้จักวัสดุ",
  วิธีติดตั้งฝ้าทีบาร์: "รู้จักวัสดุ",
  "ฝ้าอะคูสติก-ฉาบเรียบ": "รู้จักวัสดุ",
  "ช่องเซอร์วิสคืออะไร-ฝ้าเพดาน": "รู้จักวัสดุ",
  ทำไมออฟฟิศชอบใช้ฝ้าทีบาร์: "รู้จักวัสดุ",
  ยิปซั่มลดเสียงสะท้อนคืออะไร: "รู้จักวัสดุ",
  แผ่นซับเสียงโพลีเอสเตอร์คืออะไร: "รู้จักวัสดุ",
  ซีลายคืออะไร: "รู้จักวัสดุ",
  ฉากริมคืออะไร: "รู้จักวัสดุ",
  แผ่นอะคูสติกหุ้มผ้าคืออะไร: "รู้จักวัสดุ",
  แปอลูซิงค์คืออะไร: "รู้จักวัสดุ",
  ฉนวนใยหินคืออะไร: "รู้จักวัสดุ",
};

export default function ArticlesClientPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTag, setActiveTag] = useState<string>(ALL_TAG);

  const sortedArticles = useMemo(
    () => [...articles].sort((a, b) => b.id - a.id),
    [],
  );

  const filteredArticles = useMemo(() => {
    if (activeTag === ALL_TAG) return sortedArticles;
    return sortedArticles.filter(
      (article) => ARTICLE_TAGS[article.slug] === activeTag,
    );
  }, [sortedArticles, activeTag]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + ARTICLES_PER_PAGE,
  );

  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    setCurrentPage(1);
  };

  return (
    <div className="bg-background min-h-screen">
      <section className="px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">
              บทความล่าสุด
            </h1>
            <p className="text-muted-foreground text-lg">
              ข้อมูลและข่าวสารเกี่ยวกับการออกแบบและติดตั้งฝ้าเพดาน
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {[ALL_TAG, ...TAGS].map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagChange(tag)}
                aria-pressed={activeTag === tag}
                className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                  activeTag === tag
                    ? "bg-primary border-primary text-white"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <p className="text-muted-foreground mb-6 text-sm">
            แสดง {filteredArticles.length} บทความ
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentArticles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <Card className="group flex h-full flex-col p-0 transition-shadow hover:shadow-lg">
                  <CardHeader className="p-0">
                    <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={article.image}
                        alt={`${article.title}`}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between p-6 pt-0">
                    <div className="text-muted-foreground mb-3 flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        {new Date(article.date).toLocaleDateString("en-GB")}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        ใช้เวลาอ่าน {article.readTime} นาที
                      </div>
                    </div>
                    <CardTitle className="mb-3 line-clamp-2 text-xl">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="mb-4 line-clamp-3 min-h-[72px]">
                      {article.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-end">
                      <span className="border-primary text-primary group-hover:bg-primary rounded-md border px-3 py-1 text-sm transition-colors group-hover:text-white">
                        อ่านต่อ
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                      currentPage === page
                        ? "bg-primary border-primary text-white"
                        : "border-primary text-primary hover:bg-primary hover:text-white"
                    }`}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
