"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselItems = [
  {
    alt: "อุปกรณ์ฝ้าเพดาน อุปกรณ์หลังคา ชุดครอบแห้ง",
    image: "/hero1.png",
  },
  {
    alt: "แผ่นฝ้าลดเสียงสะท้อน",
    image: "/hero2.png",
  },
  {
    alt: "แผ่นปิดรอยต่อ",
    image: "/hero3.png",
  },
];

export default function HeroCarousel() {
  return (
    <Carousel
      className="w-full"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[500px] w-full">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={`${item.alt}`}
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
