"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { productCategories } from "@/data/productCategories";
import { products } from "@/data/products";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: -1, name: "ทั้งหมด", count: products.length, slug: "all" },
  ...productCategories.map((category) => ({
    id: category.id,
    name: category.name,
    count: products.filter((product) => product.categoryId === category.id)
      .length,
    slug: category.slug,
  })),
];

export default function ProductsClientPage({
  selectedCategory,
}: {
  selectedCategory: number;
}) {
  console.log("Selected Category:", selectedCategory);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === -1 || product.categoryId === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">สินค้าของเรา</h1>
          <p className="text-muted-foreground text-lg">
            เลือกชมประเภทสินค้าที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย
            อาคารพาณิชย์ และอุตสาหกรรม
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="space-y-6 lg:w-72">
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform" />
              <Input
                placeholder="ค้นหาสินค้า..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="mb-4 font-semibold">ประเภทสินค้า</h3>
              <div className="space-y-2">
                {categories.map((category) => {
                  const isSelected = selectedCategory === category.id;

                  return (
                    <Button
                      key={category.id}
                      asChild
                      variant={isSelected ? "default" : "ghost"}
                      className={`w-full justify-between ${
                        isSelected
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Link
                        href={
                          category.id === -1
                            ? "/products"
                            : `/products/category/${category.slug}`
                        }
                      >
                        <span>{category.name}</span>
                        <span
                          className={`text-sm ${
                            isSelected ? "text-white" : "text-muted-foreground"
                          }`}
                        >
                          {category.count}
                        </span>
                      </Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-muted-foreground">
                กำลังแสดงสินค้าจำนวน {filteredProducts.length} รายการ
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group flex h-full flex-col gap-2 py-0 transition-shadow hover:shadow-lg"
                >
                  <CardHeader className="p-0">
                    <div className="relative aspect-square w-full overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image}
                        alt={`${product.name}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col p-4">
                    <CardTitle className="mb-2 line-clamp-2 text-lg">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="mb-3 line-clamp-5 text-sm">
                      {product.description}
                    </CardDescription>

                    <div className="mt-auto pt-2">
                      <div className="text-primary mb-4 text-lg font-semibold">
                        {product.price}
                      </div>
                      <div className="flex items-center justify-end">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          <Link href={`/products/${product.id}`}>
                            ดูรายละเอียด
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">
                  ไม่พบสินค้าที่ตรงกับการค้นหาของคุณ
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
