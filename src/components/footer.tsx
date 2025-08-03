import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary border-t">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3
              className="mb-4 flex items-center text-xl font-bold text-white"
              lang="en"
            >
              <Image
                src="/logo.png"
                alt="Kai Standard Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              Kai Standard
            </h3>
            <p className="text-white">
              ผู้นำด้านวัสดุฝ้าเพดานคุณภาพสูงและบริการติดตั้งมืออาชีพมายาวนานกว่า
              40 ปี
            </p>
          </div>

          <div>
            <h4 className="text-accent-foreground mb-4 font-semibold">
              สาขาทั้งหมด
            </h4>
            <ul className="space-y-2 text-white">
              <li>สาขาบางบอน</li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent-foreground mb-4 font-semibold">
              เกี่ยวกับเรา
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent-foreground text-white"
                >
                  สินค้า
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="hover:text-accent-foreground text-white"
                >
                  บทความ
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-accent-foreground text-white"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:text-accent-foreground text-white"
                >
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="hover:text-accent-foreground text-white"
                >
                  แผนที่
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-accent-foreground mb-4 font-semibold">
              ข้อมูลติดต่อ
            </h4>
            <ul className="space-y-2 text-white">
              <li>โทร: 02-415-3676</li>
              <li>อีเมล: info@kaistandard.com</li>
              <li>จันทร์ - ศุกร์ 07:30 - 18:00</li>
            </ul>
          </div>
        </div>
      </div>

      <div
        className="bg-footer-background border-t border-white py-4 text-center text-white"
        lang="en"
      >
        <p>&copy; 2025 Kai Standard. All rights reserved.</p>
      </div>
    </footer>
  );
}
