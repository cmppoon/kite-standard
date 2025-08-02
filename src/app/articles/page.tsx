import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { articles } from "@/data/articles";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Ceiling Design Articles & Installation Guides | Expert Tips & Trends",
  description:
    "Expert articles on ceiling design trends, installation guides, safety standards, and maintenance tips. Stay updated with the latest in ceiling technology and design.",
  keywords:
    "ceiling design trends, ceiling installation guide, acoustic ceiling tips, fire safety ceiling standards, ceiling maintenance, ceiling design articles",
};

const featuredArticles = [
  {
    id: 1,
    title: "2024 Ceiling Design Trends",
    description: "Discover the latest trends in ceiling design and materials",
    image: "/placeholder.svg?height=400&width=800",
    category: "Design Trends",
  },
  {
    id: 2,
    title: "Acoustic Ceiling Installation Guide",
    description: "Complete guide to professional acoustic ceiling installation",
    image: "/placeholder.svg?height=400&width=800",
    category: "Installation",
  },
  {
    id: 3,
    title: "Fire Safety in Ceiling Materials",
    description: "Understanding fire ratings and safety standards for ceilings",
    image: "/placeholder.svg?height=400&width=800",
    category: "Safety",
  },
];


export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Featured Articles Carousel */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Carousel className="w-full">
            <CarouselContent>
              {featuredArticles.map((article) => (
                <CarouselItem key={article.id}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={`${article.title}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-end"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              บทความล่าสุด
            </h1>
            <p className="text-lg text-muted-foreground">
              ข้อมูลและข่าวสารเกี่ยวกับการออกแบบและติดตั้งฝ้าเพดาน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.sort((a, b) => b.id - a.id).map((article) => (
              <Card
                key={article.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={`${article.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString("en-GB")}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime} นาที
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-3 line-clamp-2">
                    {article.title}
                  </CardTitle>

                  <CardDescription className="mb-4 line-clamp-3 min-h-[72px]">
                    {article.excerpt}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      เขียนโดย Kai Standard Team
                    </span>
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Link href={`/articles/${article.id}`}>อ่านต่อ</Link>
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
