import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

// Mock article data - in a real app, this would come from a database
const getArticle = (id: string) => {
  const articles = {
    "1": {
      id: 1,
      title: "2024 Ceiling Design Trends: What's Hot This Year",
      content: `
        <p>The world of ceiling design is experiencing a renaissance in 2024, with innovative materials, bold patterns, and sustainable solutions taking center stage. As interior designers and architects push the boundaries of what's possible overhead, we're seeing exciting trends that transform ceilings from mere functional elements into stunning design features.</p>

        <h2>Minimalist Elegance</h2>
        <p>Clean lines and simple forms continue to dominate the design landscape. Minimalist ceiling designs focus on subtle textures and neutral colors that complement rather than compete with other design elements in the space. This approach creates a sense of calm and spaciousness that's particularly appealing in today's busy world.</p>

        <h2>Bold Statement Ceilings</h2>
        <p>On the opposite end of the spectrum, we're seeing more designers embrace the ceiling as the "fifth wall" – a canvas for bold artistic expression. From dramatic coffered designs to eye-catching geometric patterns, statement ceilings are becoming focal points that define entire spaces.</p>

        <h2>Sustainable Materials</h2>
        <p>Environmental consciousness is driving innovation in ceiling materials. Recycled content, rapidly renewable resources, and low-VOC finishes are becoming standard requirements rather than premium options. These materials don't compromise on aesthetics while supporting green building initiatives.</p>

        <h2>Integrated Technology</h2>
        <p>Smart ceiling systems that incorporate lighting, climate control, and even sound systems are gaining popularity. These integrated solutions offer both functionality and clean aesthetics, eliminating the need for visible fixtures and creating seamless, modern environments.</p>

        <h2>Textural Interest</h2>
        <p>Texture is playing an increasingly important role in ceiling design. From subtle wood grains to dramatic three-dimensional patterns, textured ceilings add depth and visual interest without overwhelming the space. These designs work particularly well in spaces with high ceilings where the texture can be appreciated from below.</p>
      `,
      image: "/placeholder.svg?height=400&width=800",
      category: "Design Trends",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Sarah Johnson",
      authorBio:
        "Sarah is a senior interior designer with over 15 years of experience in commercial and residential projects.",
    },
  };

  return articles[id as keyof typeof articles] || null;
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
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
          <Button asChild>
            <Link href="/articles">Back to Articles</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <Button variant="ghost" asChild className="mb-8">
          <Link href="/articles">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Articles
          </Link>
        </Button>

        {/* Article Header */}
        <div className="mb-8">
          <Badge className="mb-4">{article.category}</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-muted-foreground mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(article.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {article.readTime}
            </div>
            <div className="flex items-center">
              <span>By {article.author}</span>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share Article
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        </div>

        {/* Author Bio */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">About the Author</h3>
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
              <span className="text-xl font-semibold">
                {article.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </div>
            <div>
              <h4 className="font-semibold">{article.author}</h4>
              <p className="text-muted-foreground">{article.authorBio}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
