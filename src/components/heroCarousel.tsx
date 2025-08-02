"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const carouselItems = [
  {
    alt: "งานฝ้าเพดาน งานผนัง แผ่นอะคูสติก",
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
  {
    alt: "อุปกรณ์ฝ้าเพดาน อุปกรณ์หลังคา ชุดครอบแห้ง",
    image: "/hero4.png",
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
            <div className="w-full relative aspect-[2560/947]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover rounded-md"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1280px"
                priority
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
