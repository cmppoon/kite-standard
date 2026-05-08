import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export default function ContactUs({
  fromContactUs = false,
}: {
  fromContactUs?: boolean;
}) {
  return (
    <section className="bg-secondary/5 px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          {fromContactUs ? (
            <h1 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
              ติดต่อเรา
            </h1>
          ) : (
            <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
              ติดต่อเรา
            </h2>
          )}
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            ติดต่อผู้เชี่ยวชาญเพื่อรับโซลูชันฝ้าเพดานที่หรือคำแนะนำแผ่นลดเสียงสะท้อน
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 md:grid-cols-5">
          {/* Phone */}
          <Card className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-3 text-center">
              <h3 className="text-primary mb-3 text-lg font-bold">Phone</h3>
              <div className="from-primary/10 to-primary/20 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                <Phone className="text-primary h-5 w-5" />
              </div>
              <a
                href="tel:+6624153676"
                className="text-accent hover:text-accent/80 mb-2 block text-sm font-medium transition-colors"
              >
                02-415-3676
              </a>
              <p className="text-muted-foreground text-[10px] leading-tight">
                จันทร์ - เสาร์
                <br />
                08:00 - 17:00
              </p>
            </CardContent>
          </Card>

          {/* LINE */}
          <Card className="group border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-3 text-center">
              <h3 className="text-primary mb-3 text-lg font-bold">LINE</h3>
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#37B70A]/90 transition-transform group-hover:scale-110">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                >
                  <path d="M 9 4 C 6.24 4 4 6.24 4 9 L 4 41 C 4 43.76 6.24 46 9 46 L 41 46 C 43.76 46 46 43.76 46 41 L 46 9 C 46 6.24 43.76 4 41 4 L 9 4 z M 25 11 C 33.27 11 40 16.359219 40 22.949219 C 40 25.579219 38.959297 27.960781 36.779297 30.300781 C 35.209297 32.080781 32.660547 34.040156 30.310547 35.660156 C 27.960547 37.260156 25.8 38.519609 25 38.849609 C 24.68 38.979609 24.44 39.039062 24.25 39.039062 C 23.59 39.039062 23.649219 38.340781 23.699219 38.050781 C 23.739219 37.830781 23.919922 36.789063 23.919922 36.789062 C 23.969922 36.419063 24.019141 35.830937 23.869141 35.460938 C 23.699141 35.050938 23.029062 34.840234 22.539062 34.740234 C 15.339063 33.800234 10 28.849219 10 22.949219 C 10 16.359219 16.73 11 25 11 z M 23.992188 18.998047 C 23.488379 19.007393 23 19.391875 23 20 L 23 26 C 23 26.552 23.448 27 24 27 C 24.552 27 25 26.552 25 26 L 25 23.121094 L 27.185547 26.580078 C 27.751547 27.372078 29 26.973 29 26 L 29 20 C 29 19.448 28.552 19 28 19 C 27.448 19 27 19.448 27 20 L 27 23 L 24.814453 19.419922 C 24.602203 19.122922 24.294473 18.992439 23.992188 18.998047 z M 15 19 C 14.448 19 14 19.448 14 20 L 14 26 C 14 26.552 14.448 27 15 27 L 18 27 C 18.552 27 19 26.552 19 26 C 19 25.448 18.552 25 18 25 L 16 25 L 16 20 C 16 19.448 15.552 19 15 19 z M 21 19 C 20.448 19 20 19.448 20 20 L 20 26 C 20 26.552 20.448 27 21 27 C 21.552 27 22 26.552 22 26 L 22 20 C 22 19.448 21.552 19 21 19 z M 31 19 C 30.448 19 30 19.448 30 20 L 30 26 C 30 26.552 30.448 27 31 27 L 34 27 C 34.552 27 35 26.552 35 26 C 35 25.448 34.552 25 34 25 L 32 25 L 32 24 L 34 24 C 34.553 24 35 23.552 35 23 C 35 22.448 34.553 22 34 22 L 32 22 L 32 21 L 34 21 C 34.552 21 35 20.552 35 20 C 35 19.448 34.552 19 34 19 L 31 19 z"></path>
                </svg>
              </div>
              <a
                href="https://line.me/R/ti/p/@kaistandard"
                className="text-accent hover:text-accent/80 mb-2 block text-sm font-medium transition-colors"
              >
                @kaistandard
              </a>
              <p className="text-muted-foreground text-[10px] leading-tight">
                สอบถามราคาพิเศษ
              </p>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="group border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-3 text-center">
              <h3 className="text-primary mb-3 text-lg font-bold">Email</h3>
              <div className="from-primary/10 to-primary/20 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                <Mail className="text-accent h-5 w-5" />
              </div>
              <a
                href="mailto:sattawatt.sura@hotmail.com"
                className="text-accent hover:text-accent/80 mb-2 block text-sm font-medium transition-colors"
              >
                Email
              </a>
              <p className="text-muted-foreground text-[10px] leading-tight">
                ขอใบเสนอราคา
              </p>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="group border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-3 text-center">
              <h3 className="text-primary mb-3 text-lg font-bold">Facebook</h3>
              <div className="from-primary/10 to-primary/20 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br transition-transform group-hover:scale-110">
                <svg
                  className="text-primary h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <a
                href="https://www.facebook.com/kaistandardds/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 mb-2 block text-sm font-medium transition-colors"
              >
                Facebook
              </a>
              <p className="text-muted-foreground text-[10px] leading-tight">
                ข่าวสารเรื่องฝ้าเพดาน
              </p>
            </CardContent>
          </Card>

          {/* YouTube */}
          <Card className="group border-red-200 hover:border-red-400 transition-all duration-300 hover:shadow-md">
            <CardContent className="p-3 text-center">
              <h3 className="text-primary mb-3 text-lg font-bold">YouTube</h3>
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100 transition-transform group-hover:scale-110">
                <svg
                  className="h-5 w-5 text-red-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <a
                href="https://www.youtube.com/@kaistandard1984/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent/80 mb-2 block text-sm font-medium transition-colors"
              >
                YouTube
              </a>
              <p className="text-muted-foreground text-[10px] leading-tight">
                ความรู้ดีๆ
                <br />
                สำหรับฝ้าเพดาน
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
