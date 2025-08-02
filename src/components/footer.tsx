import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary border-t">
      <div className="max-w-5xl mx-auto  py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center text-white" lang="en">
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
            <h4 className="font-semibold mb-4 text-accent-foreground">
              สาขาทั้งหมด
            </h4>
            <ul className="space-y-2 text-white">
              <li>สาขาบางบอน</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">
              เกี่ยวกับเรา
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products"
                  className="text-white hover:text-accent-foreground"
                >
                  สินค้า
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-white hover:text-accent-foreground"
                >
                  บทความ
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white hover:text-accent-foreground"
                >
                  เกี่ยวกับเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-white hover:text-accent-foreground"
                >
                  ติดต่อเรา
                </Link>
              </li>
              <li>
                <Link
                  href="/map"
                  className="text-white hover:text-accent-foreground"
                >
                  แผนที่
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent-foreground">
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

      <div className="border-t py-4 text-center text-white bg-footer-background border-white" lang="en">
        <p>&copy; 2025 Kai Standard. All rights reserved.</p>
      </div>
    </footer>
  );
}
