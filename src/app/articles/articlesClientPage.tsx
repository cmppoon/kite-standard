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
import { useState } from "react";

const ARTICLES_PER_PAGE = 6;

export default function ArticlesClientPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const sortedArticles = [...articles].sort((a, b) => b.id - a.id);
  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const currentArticles = sortedArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  return (
    <div className="bg-background min-h-screen">
      <section className="px-4 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">
              บทความล่าสุด
            </h1>
            <p className="text-muted-foreground text-lg">
              ข้อมูลและข่าวสารเกี่ยวกับการออกแบบและติดตั้งฝ้าเพดาน
            </p>
          </div>

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
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`rounded-md border px-4 py-2 text-sm transition-colors ${
                    currentPage === page
                      ? "bg-primary text-white border-primary"
                      : "border-primary text-primary hover:bg-primary hover:text-white"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}