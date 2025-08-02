import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock article data - in a real app, this would come from a database
const getArticle = (id: string) => {
  const article = articles.filter((article) => article.id === parseInt(id, 10));
  return article.length > 0 ? article[0] : null;
};

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = getArticle(id);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">ไม่พบบทความที่คุณต้องการ</h1>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link href="/articles">กลับสู่หน้าบทความทั้งหมด</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Button
          variant="ghost"
          asChild
          className="mb-8 border-primary hover:bg-primary hover:text-white"
        >
          <Link href="/articles">
            <ArrowLeft className="h-4 w-4 mr-2" />
            กลับสู่หน้าบทความทั้งหมด
          </Link>
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(article.date).toLocaleDateString("en-GB")}
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-full aspect-square rounded-lg overflow-hidden mb-8">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={900}
            height={900}
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </div>
  );
}
