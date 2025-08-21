import { Button } from "@/components/ui/button";
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

export const metadata = {
  title: "บทความ",
  description:
    "Expert articles on ceiling design trends, installation guides, safety standards, and maintenance tips. Stay updated with the latest in ceiling technology and design.",
  keywords:
    "ceiling design trends, ceiling installation guide, acoustic ceiling tips, fire safety ceiling standards, ceiling maintenance, ceiling design articles",
};

export default function ArticlesPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Articles Grid */}
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
            {articles
              .sort((a, b) => b.id - a.id)
              .map((article) => (
                <Card
                  key={article.id}
                  className="group p-0 transition-shadow hover:shadow-lg"
                >
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
                  <CardContent className="p-6 pt-0">
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
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Link href={`/articles/${article.slug}`}>อ่านต่อ</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
