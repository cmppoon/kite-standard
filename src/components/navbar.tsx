"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { name: "หน้าแรก", href: "/" },
  { name: "สินค้า", href: "/products" },
  { name: "แคตตาล็อก", href: "/catalogs" },
  { name: "บทความ", href: "/articles" },
  { name: "เกี่ยวกับเรา", href: "/about-us" },
  { name: "ติดต่อเรา", href: "/contact-us" },
  { name: "แผนที่", href: "/map" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  return (
    <nav className="bg-navbar-primary border-navbar-border sticky top-0 z-50 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Kai Standard Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-bold text-white" lang="en">
                Kai Standard
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-accent-foreground transition-colors ${
                  path === item.href
                    ? "text-accent-foreground underline underline-offset-8"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:text-white"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="mt-8 flex flex-col space-y-4 p-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`hover:text-primary text-lg transition-colors ${
                        path === item.href
                          ? "text-accent-foreground underline underline-offset-8"
                          : ""
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
