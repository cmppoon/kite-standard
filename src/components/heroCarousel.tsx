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
    image: "/hero1.webp",
  },
  {
    alt: "แผ่นอะคูสติกจากโรงงาน",
    image: "/hero2.webp",
  },
  {
    alt: "ช่องเซอร์วิส",
    image: "/hero3.webp",
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
            <div className="relative aspect-[2560/947] max-h-[40vh] w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
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
