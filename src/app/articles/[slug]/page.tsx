import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((article) => article.slug === decodeURIComponent(slug));

  if (!article) {
    return {
      title: "ไม่พบบทความ",
      description: "ไม่พบบทความที่คุณต้องการ",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: "บทความ, ฝ้า, การออกแบบฝ้า, การติดตั้งฝ้า",
    openGraph: {
      url: article.image
    }
  };
}

const getArticle = (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const article = articles.filter((article) => article.slug === decodedSlug);
  return article.length > 0 ? article[0] : null;
};

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">ไม่พบบทความที่คุณต้องการ</h1>
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
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        <Button
          variant="ghost"
          asChild
          className="border-primary hover:bg-primary mb-8 hover:text-white"
        >
          <Link href="/articles">
            <ArrowLeft className="mr-2 h-4 w-4" />
            กลับสู่หน้าบทความทั้งหมด
          </Link>
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <h1 className="mb-6 text-3xl font-bold md:text-4xl">
            {article.title}
          </h1>

          <div className="text-muted-foreground mb-6 flex items-center gap-6">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              {new Date(article.date).toLocaleDateString("en-GB")}
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              ใช้เวลาอ่าน {article.readTime} นาที
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative mb-8 aspect-square h-full w-full overflow-hidden rounded-lg">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            width={900}
            height={900}
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg mb-12 max-w-none">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>
      </div>
    </div>
  );
}
