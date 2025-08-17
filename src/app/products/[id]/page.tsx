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
import { ArrowLeft, Check, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
        <div className="mb-2">
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
            <div className="relative aspect-[700/600] w-full overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="mb-4 text-3xl font-bold">{product.name}</h1>
              <p className="text-muted-foreground mb-6 text-md">
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
        {(product.applications || product.optionalServices) && (
          <div className="mt-16">
            <Tabs
              defaultValue={
                product.applications ? "applications" : "optionalServices"
              }
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-2">
                {product.applications && (
                  <TabsTrigger value="applications">
                    พื้นที่การใช้งาน
                  </TabsTrigger>
                )}
                {product.optionalServices && (
                  <TabsTrigger value="optionalServices">
                    บริการเสริม
                  </TabsTrigger>
                )}
              </TabsList>

              {product.applications && (
                <TabsContent value="applications" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl leading-none font-semibold tracking-tight">
                        พื้นที่การใช้งาน
                      </CardTitle>
                      <CardDescription>
                        พื้นที่การใช้งานที่เหมาะสมกับสินค้านี้
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        {product.applications?.map((application, index) => (
                          <div key={index} className="flex items-center">
                            <Check className="mr-3 h-5 w-5 flex-shrink-0 text-green-500" />
                            <span>{application}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
              {product.optionalServices && (
                <TabsContent value="optionalServices" className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl leading-none font-semibold tracking-tight">
                        บริการเสริม
                      </CardTitle>
                      <CardDescription>
                        บริการเสริมโดยผู้เชี่ยวชาญ
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {product.optionalServices.map((service, index) => (
                          <div key={index} className="flex items-center">
                            <Phone className="mr-3 h-5 w-5 flex-shrink-0 text-primary" />
                            <div>
                              <span className="font-semibold">
                                {service.title}
                              </span>
                              <span className="text-muted-foreground mt-1 line-clamp-2">
                                {service.description}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              )}
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
}
