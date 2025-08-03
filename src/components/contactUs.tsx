import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MessageSquare, Phone } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ContactUs() {
  return (
    <section className="bg-secondary/5 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">ติดต่อเรา</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            ติดต่อผู้เชี่ยวชาญของเราเพื่อรับโซลูชันฝ้าเพดานที่ออกแบบเฉพาะสำหรับคุณ
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <Card className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="from-primary/10 to-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                <Phone className="text-primary h-8 w-8" />
              </div>
              <h3 className="text-accent mb-2 text-lg font-semibold">
                โทรศัพท์
              </h3>
              <p className="text-muted-foreground mb-3 text-sm">
                จันทร์ - ศุกร์ 07:30 - 18:00
              </p>
              <a
                href="tel:+6624153676"
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                02-415-3676
              </a>
            </CardContent>
          </Card>

          {/* Line Contact */}
          <Card className="group border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="from-primary/10 to-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                <MessageSquare className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-accent mb-2 text-lg font-semibold">
                ติดต่อทางไลน์
              </h3>
              <p className="text-muted-foreground mb-3 text-sm">
                สะดวก ตอบกลับรวดเร็ว
              </p>
              <a
                href="https://line.me/ti/p/@kaistandard"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                @kaistandard
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="group border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="from-primary/10 to-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                <Mail className="text-accent h-8 w-8" />
              </div>
              <h3 className="text-accent mb-2 text-lg font-semibold">อีเมล</h3>
              <p className="text-muted-foreground mb-3 text-sm">
                คำถามทั่วไปและการติดต่อธุรกิจ
              </p>
              <a
                href="mailto:info@kaistandard.com"
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                info@kaistandard.com
              </a>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6 text-center">
              <div className="from-primary/10 to-primary/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                <svg
                  className="text-primary h-8 w-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <h3 className="text-accent mb-2 text-lg font-semibold">
                Facebook
              </h3>
              <p className="text-muted-foreground mb-3 text-sm">
                ติดตามข่าวสารและโปรโมชั่นล่าสุด
              </p>
              <a
                href="https://www.facebook.com/kaistandardds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 font-medium transition-colors"
              >
                คลิกที่นี่เพื่อเยี่ยมชม
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90"
          >
            <Link href="/map">สาขาทั้งหมด</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
