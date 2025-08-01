import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Check, Star } from "lucide-react"

// Mock product data - in a real app, this would come from a database
const getProduct = (id: string) => {
  const products = {
    "1": {
      id: 1,
      name: "Premium Acoustic Ceiling",
      category: "Acoustic",
      price: "$45/sq ft",
      rating: 4.8,
      reviews: 124,
      description:
        "High-performance acoustic ceiling tiles designed for superior sound control in commercial and residential spaces.",
      images: [
        "/placeholder.svg?height=500&width=600",
        "/placeholder.svg?height=500&width=600",
        "/placeholder.svg?height=500&width=600",
        "/placeholder.svg?height=500&width=600",
      ],
      features: [
        "Superior sound absorption (NRC 0.85)",
        "Fire-resistant Class A rating",
        "Moisture and sag resistant",
        "Easy installation system",
        "Available in multiple sizes",
        "Recyclable materials",
      ],
      specifications: {
        Material: "Mineral fiber composite",
        Thickness: "5/8 inch (16mm)",
        "Size Options": '24"x24", 24"x48", 12"x12"',
        "Edge Detail": "Square, Tegular, Beveled",
        "Fire Rating": "Class A",
        "NRC Rating": "0.85",
        "CAC Rating": "35",
        "Light Reflectance": "85%",
      },
      applications: [
        "Office buildings and conference rooms",
        "Educational facilities",
        "Healthcare facilities",
        "Retail spaces",
        "Restaurants and hospitality",
        "Residential spaces",
      ],
    },
  }

  return products[id as keyof typeof products] || null
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProduct(id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Button asChild>
            <Link href="/products">Back to Products</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image src={product.images[0] || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg mb-6">{product.description}</p>
              <div className="text-3xl font-bold text-primary mb-6">{product.price}</div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <div className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="flex-1">
                Request Quote
              </Button>
              <Button size="lg" variant="outline" className="flex-1 bg-transparent">
                Download Specs
              </Button>
            </div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="specifications" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
            </TabsList>

            <TabsContent value="specifications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Technical Specifications</CardTitle>
                  <CardDescription>Detailed technical information and performance data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ideal Applications</CardTitle>
                  <CardDescription>Perfect environments and use cases for this product</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Information</CardTitle>
                  <CardDescription>Professional installation guidelines and requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Installation Method</h4>
                      <p className="text-muted-foreground">
                        Professional installation recommended. Standard suspended ceiling grid system required.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tools Required</h4>
                      <p className="text-muted-foreground">
                        Standard ceiling installation tools, measuring equipment, safety gear.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Installation Time</h4>
                      <p className="text-muted-foreground">
                        Approximately 1-2 hours per 100 sq ft with professional installation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
