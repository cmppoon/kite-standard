"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  images,
  alt,
  dim = false,
}: {
  images: string[];
  alt: string;
  dim?: boolean;
}) {
  const [active, setActive] = useState(0);

  if (images.length === 0) return null;

  const dimClass = dim ? " brightness-95" : "";

  return (
    <div className="space-y-3">
      {/* Main image */}
      <div className="relative aspect-[700/600] w-full overflow-hidden rounded-lg">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover${dimClass}`}
        />
      </div>

      {/* Thumbnails (only when more than one image) */}
      {images.length > 1 && (
        <div className="flex gap-2">
          {images.map((img, i) => (
            <button
              key={`${img}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`ดูรูปที่ ${i + 1}`}
              className={`relative aspect-square w-20 flex-shrink-0 overflow-hidden rounded-md border-2 transition ${
                active === i
                  ? "border-primary"
                  : "border-transparent hover:border-gray-300"
              }`}
            >
              <Image
                src={img}
                alt={`${alt} รูปที่ ${i + 1}`}
                fill
                sizes="80px"
                className={`object-cover${dimClass}`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
