import { products } from "@/data/products";
import { notFound } from "next/navigation";
import ProductDetailClient from "./productDetailClient";

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

  if (!product) return {};

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

  if (!product) notFound();

  return <ProductDetailClient slug={slug} />;
}
