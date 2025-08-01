import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export const metadata = {
  title: "Ceiling Design Articles & Installation Guides | Expert Tips & Trends",
  description:
    "Expert articles on ceiling design trends, installation guides, safety standards, and maintenance tips. Stay updated with the latest in ceiling technology and design.",
  keywords:
    "ceiling design trends, ceiling installation guide, acoustic ceiling tips, fire safety ceiling standards, ceiling maintenance, ceiling design articles",
}

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
]

const articles = [
  {
    id: 1,
    title: "2024 Ceiling Design Trends: What's Hot This Year",
    excerpt:
      "Explore the latest trends in ceiling design, from minimalist approaches to bold statement pieces that are defining interior spaces in 2024.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Design Trends",
    date: "2024-01-15",
    readTime: "5 min read",
    author: "Sarah Johnson",
  },
  {
    id: 2,
    title: "Complete Guide to Acoustic Ceiling Installation",
    excerpt:
      "Step-by-step guide to installing acoustic ceiling tiles, including tools needed, preparation, and professional tips for perfect results.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Installation",
    date: "2024-01-10",
    readTime: "8 min read",
    author: "Mike Chen",
  },
  {
    id: 3,
    title: "Understanding Fire Safety Standards for Ceilings",
    excerpt:
      "Learn about fire ratings, safety codes, and compliance requirements for ceiling materials in commercial and residential applications.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Safety",
    date: "2024-01-08",
    readTime: "6 min read",
    author: "Dr. Emily Rodriguez",
  },
  {
    id: 4,
    title: "Moisture Control in Bathroom Ceilings",
    excerpt: "Best practices for preventing moisture damage and mold growth in bathroom ceiling installations.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Maintenance",
    date: "2024-01-05",
    readTime: "4 min read",
    author: "Tom Wilson",
  },
  {
    id: 5,
    title: "LED Integration in Modern Ceiling Design",
    excerpt: "How to incorporate LED lighting systems into ceiling designs for energy efficiency and aesthetic appeal.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Technology",
    date: "2024-01-03",
    readTime: "7 min read",
    author: "Lisa Park",
  },
  {
    id: 6,
    title: "Sustainable Ceiling Materials: Eco-Friendly Options",
    excerpt:
      "Explore environmentally friendly ceiling materials and their benefits for sustainable construction projects.",
    image: "/placeholder.svg?height=300&width=400",
    category: "Sustainability",
    date: "2024-01-01",
    readTime: "5 min read",
    author: "Green Building Team",
  },
]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Featured Articles Carousel */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Knowledge Center</h1>

          <Carousel className="w-full">
            <CarouselContent>
              {featuredArticles.map((article) => (
                <CarouselItem key={article.id}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={`${article.title} - Expert ceiling design and installation article`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-end">
                      <div className="p-8 text-white">
                        <Badge className="mb-4">{article.category}</Badge>
                        <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                        <p className="text-lg mb-6 max-w-2xl">{article.description}</p>
                        <Button asChild>
                          <Link href={`/articles/${article.id}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest insights, tips, and industry knowledge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.id} className="group hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={`${article.title} - Expert ceiling design and installation article`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">{article.category}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(article.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>

                  <CardTitle className="text-xl mb-3 line-clamp-2">{article.title}</CardTitle>

                  <CardDescription className="mb-4 line-clamp-3">{article.excerpt}</CardDescription>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {article.author}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/articles/${article.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
