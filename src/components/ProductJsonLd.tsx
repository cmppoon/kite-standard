import { productCategories } from "@/data/productCategories";

const SITE = "https://www.kaistandard.com";

type ProductLike = {
  id: number | string;
  name: string;
  price?: string;
  image?: string;
  description?: string;
  categoryId?: number;
};

/**
 * Emits Product + Offer and BreadcrumbList JSON-LD for a product page.
 * - Price is parsed defensively from product.price (any format: "32 บาท", "฿1,200", etc.).
 *   If no number is found (e.g. "สอบถามราคา"), the Offer/price is omitted rather than faked.
 * - Category (for the breadcrumb) is resolved from productCategories via categoryId.
 */
export default function ProductJsonLd({
  product,
  slug,
}: {
  product: ProductLike;
  slug: string;
}) {
  const category = productCategories.find((c) => c.id === product.categoryId);

  const priceMatch = (product.price || "").replace(/,/g, "").match(/\d+(\.\d+)?/);
  const price = priceMatch ? priceMatch[0] : null;

  const productUrl = `${SITE}/products/${slug}`;
  const image = product.image
    ? product.image.startsWith("http")
      ? product.image
      : `${SITE}${product.image}`
    : undefined;
  const brandName = /scg|เอสซีจี|ตราช้าง/i.test(product.name)
    ? "SCG"
    : "ไคสแตนดาร์ด";

  const productLd: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    ...(image ? { image } : {}),
    description: product.description || product.name,
    sku: String(product.id),
    brand: { "@type": "Brand", name: brandName },
  };

  if (price) {
    productLd.offers = {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "THB",
      price,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "ไคสแตนดาร์ด (KAI Standard)" },
    };
  }

  const crumbs: Array<Record<string, unknown>> = [
    { "@type": "ListItem", position: 1, name: "หน้าแรก", item: SITE },
    { "@type": "ListItem", position: 2, name: "สินค้า", item: `${SITE}/products` },
  ];
  if (category) {
    crumbs.push({
      "@type": "ListItem",
      position: 3,
      name: category.name,
      item: `${SITE}/products/category/${encodeURIComponent(category.slug)}`,
    });
  }
  crumbs.push({
    "@type": "ListItem",
    position: category ? 4 : 3,
    name: product.name,
    item: productUrl,
  });

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
