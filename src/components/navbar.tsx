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
  { name: "แคตาล็อค", href: "/catalog" },
  { name: "บทความ", href: "/articles" },
  { name: "เกี่ยวกับเรา", href: "/about-us" },
  { name: "ติดต่อเรา", href: "/contact-us" },
  { name: "แผนที่", href: "/map" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();

  console.log("Current path:", path);

  return (
    <nav className="border-b bg-navbar-primary border-navbar-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Kai Standard Logo"
                width={50}
                height={50}
              />
              <span className="text-xl font-bold text-white">Kai Standard</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-accent-foreground transition-colors ${
                  path === item.href
                    ? "underline underline-offset-8 text-accent-foreground"
                    : "text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-lg hover:text-primary transition-colors ${
                        path === item.href
                          ? "underline underline-offset-8 text-accent-foreground"
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
