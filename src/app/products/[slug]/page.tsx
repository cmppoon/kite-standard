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
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const getProductBySlug = (slug: string) => {
  const decodedSlug = decodeURIComponent(slug);
  const product = products.filter((product) => product.slug === decodedSlug);
  return product.length > 0 ? product[0] : null;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {};
  }

  const canonicalUrl = `https://www.kaistandard.com/products/${slug}`;

  return {
    title: `${product.name} | ไคสแตนดาร์ด ราคาโรงงาน`,
    description: product.description
      ? `${product.description} สอบถามราคาโทร 02-415-3676`
      : `${product.name} คุณภาพสูง ราคาโรงงาน จากไคสแตนดาร์ด ประสบการณ์กว่า 40 ปี สอบถามราคาโทร 02-415-3676`,
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
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
              <p className="text-muted-foreground text-md mb-6">
                {product.description}
              </p>
              <div className="text-primary mb-6 text-3xl font-bold">
                {product.price}
              </div>

              <Button
                asChild
                className="rounded-3xl bg-[#02C300] px-6 py-6 text-white hover:bg-[#02C300]/90"
              >
                <Link
                  href="https://line.me/ti/p/@kaistandard"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="!h-8 !w-8 text-white"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                  >
                    <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
                  </svg>
                  <span className="text-lg font-bold">
                    สอบถามและสั่งซื้อผ่านไลน์
                  </span>
                </Link>
              </Button>
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
                            <Phone className="text-primary mr-3 h-5 w-5 flex-shrink-0" />
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

        {/* Related Products */}
        {(() => {
          const related = products
            .filter(
              (p) =>
                p.categoryId === product.categoryId &&
                p.slug !== product.slug
            )
            .slice(0, 4);

          if (related.length === 0) return null;

          return (
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-semibold">สินค้าที่เกี่ยวข้อง</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/products/${item.slug}`}
                    className="group rounded-lg border transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-[700/600] w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <p className="line-clamp-2 text-sm font-medium">
                        {item.name}
                      </p>
                      <p className="text-primary mt-1 text-sm font-semibold">
                        {item.price}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })()}

      </div>
    </div>
  );
}
