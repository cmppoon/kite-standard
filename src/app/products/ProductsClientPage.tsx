"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categories = [
  { id: "all", name: "All Products", count: 24 },
  { id: "acoustic", name: "Acoustic Ceilings", count: 6 },
  { id: "decorative", name: "Decorative Ceilings", count: 8 },
  { id: "safety", name: "Fire-Resistant", count: 4 },
  { id: "specialty", name: "Specialty Ceilings", count: 3 },
  { id: "commercial", name: "Commercial", count: 5 },
  { id: "residential", name: "Residential", count: 7 },
];

const products = [
  {
    id: 1,
    name: "Premium Acoustic Ceiling",
    category: "acoustic",
    image: "/placeholder.svg?height=300&width=400",
    price: "$45/sq ft",
    description:
      "High-performance acoustic ceiling tiles for superior sound control",
    features: ["Sound absorption", "Easy installation", "Moisture resistant"],
  },
  {
    id: 2,
    name: "Luxury Coffered Ceiling",
    category: "decorative",
    image: "/placeholder.svg?height=300&width=400",
    price: "$85/sq ft",
    description: "Elegant coffered ceiling design for upscale interiors",
    features: [
      "Premium materials",
      "Custom designs",
      "Professional installation",
    ],
  },
  {
    id: 3,
    name: "Fire-Resistant Ceiling",
    category: "safety",
    image: "/placeholder.svg?height=300&width=400",
    price: "$55/sq ft",
    description: "Fire-rated ceiling panels meeting all safety standards",
    features: ["Fire rated", "Safety certified", "Durable construction"],
  },
  {
    id: 4,
    name: "Moisture-Resistant Ceiling",
    category: "specialty",
    image: "/placeholder.svg?height=300&width=400",
    price: "$38/sq ft",
    description: "Perfect for bathrooms and high-humidity environments",
    features: ["Moisture proof", "Mold resistant", "Easy maintenance"],
  },
  {
    id: 5,
    name: "LED Integrated Ceiling",
    category: "specialty",
    image: "/placeholder.svg?height=300&width=400",
    price: "$95/sq ft",
    description: "Modern ceiling with integrated LED lighting system",
    features: ["LED integrated", "Energy efficient", "Smart controls"],
  },
  {
    id: 6,
    name: "Suspended Grid Ceiling",
    category: "commercial",
    image: "/placeholder.svg?height=300&width=400",
    price: "$25/sq ft",
    description: "Professional suspended ceiling system for offices",
    features: ["Easy access", "Professional look", "Cost effective"],
  },
];

export default function ProductsClientPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">สินค้าของเรา</h1>
          <p className="text-lg text-muted-foreground">
            เลือกชมประเภทสินค้าที่หลากหลายและครอบคลุมสำหรับการใช้งานในที่พักอาศัย อาคารพาณิชย์ และอุตสาหกรรม
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
                Showing {filteredProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="group hover:shadow-lg transition-shadow"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`${product.name} - ${
                          product.category
                        } ceiling material with ${product.features.join(", ")}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription className="text-sm mb-3">
                      {product.description}
                    </CardDescription>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {product.features.map((feature, index) => (
                          <Badge
                            key={index}
                            variant="secondary"
                            className="text-xs text-white"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-primary">
                        {product.price}
                      </span>
                      <Button asChild size="sm">
                        <Link href={`/products/${product.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No products found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
