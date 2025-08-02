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
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const categories = [
  { id: -1, name: "ทั้งหมด", count: products.length },
  ...productCategories.map((category) => ({
    id: category.id,
    name: category.name,
    count: products.filter((product) => product.categoryId === category.id)
      .length,
  })),
];

export default function ProductsClientPage() {
  const searchParams = useSearchParams();

  const preselectedCategory = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(
    preselectedCategory ? parseInt(preselectedCategory) : -1
  ); // -1 for "All"
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
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">สินค้าของเรา</h1>
          <p className="text-lg text-muted-foreground">
            เลือกชมประเภทสินค้าที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย
            อาคารพาณิชย์ และอุตสาหกรรม
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="ค้นหาสินค้า..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-4">ประเภทสินค้า</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span
                        className={`text-sm ${
                          selectedCategory === category.id
                            ? "text-white"
                            : "text-muted-foreground"
                        }`}
                      >
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            <div className="mb-6 flex justify-between items-center">
              <p className="text-muted-foreground">
                กำลังแสดงสินค้าจำนวน {filteredProducts.length} รายการ
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow flex flex-col h-full"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 flex flex-col flex-1">
                    <CardTitle className="text-lg mb-2 line-clamp-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm mb-3">
                      {product.description}
                    </CardDescription>

                    <div className="mt-auto pt-2">
                      <div className="text-lg font-semibold text-primary mb-4">
                        {product.price}
                      </div>
                      <div className="flex justify-end items-center">
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
              <div className="text-center py-12">
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
