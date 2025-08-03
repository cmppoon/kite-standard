import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { products } from "@/data/products";
import { ArrowLeft, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock product data - in a real app, this would come from a database
const getProduct = (id: string) => {
  const product = products.filter((product) => product.id === parseInt(id, 10));

  return product.length > 0 ? product[0] : null;
};

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProduct(id);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">
            ไม่พบสินค้าที่ตรงกับการค้นหาของคุณ
          </h1>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
          >
            <Link href="/products">กลับสู่หน้าสินค้าทั้งหมด</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="border-primary hover:bg-primary mb-4 hover:text-white"
          >
            <Link href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              กลับสู่หน้าสินค้าทั้งหมด
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative h-96 overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            {/* <div className="grid grid-cols-3 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="relative h-24 rounded-lg overflow-hidden"
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} view ${index + 2}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div> */}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
              <p className="text-muted-foreground mb-6 text-lg">
                {product.description}
              </p>
              <div className="text-primary mb-6 text-3xl font-bold">
                {product.price}
              </div>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div>
                <h3 className="mb-4 text-xl font-semibold">คุณสมบัติ</h3>
                <div className="grid grid-cols-1 gap-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                  <CardDescription>
                    Detailed technical information and performance data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {Object.entries(product.specifications).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between py-2 border-b"
                        >
                          <span className="font-medium">{key}:</span>
                          <span className="text-muted-foreground">{value}</span>
                        </div>
                      )
                    )}
                  </div> */}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="applications" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Ideal Applications</CardTitle>
                  <CardDescription>
                    Perfect environments and use cases for this product
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.applications.map((application, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span>{application}</span>
                      </div>
                    ))}
                  </div> */}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="installation" className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle>Installation Information</CardTitle>
                  <CardDescription>
                    Professional installation guidelines and requirements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-2 font-semibold">
                        Installation Method
                      </h4>
                      <p className="text-muted-foreground">
                        Professional installation recommended. Standard
                        suspended ceiling grid system required.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Tools Required</h4>
                      <p className="text-muted-foreground">
                        Standard ceiling installation tools, measuring
                        equipment, safety gear.
                      </p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold">Installation Time</h4>
                      <p className="text-muted-foreground">
                        Approximately 1-2 hours per 100 sq ft with professional
                        installation.
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
  );
}
