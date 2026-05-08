"use client";

import React, { useState } from "react";
import Image from "next/image";
import { customers } from "@/data/customers";

export default function OurCustomers() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl text-primary">ลูกค้าและโครงการที่ใช้ผลิตภัณฑ์ของเรา</h1>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 gap-y-12">
          {customers.map((customer, index) => (
            <div
              key={customer.id}
              className={`relative mx-auto h-24 w-full ${
                !showAll && index >= 6 ? "hidden md:block" : ""
              }`}
            >
              <Image
                src={customer.image}
                alt={customer.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 text-center md:hidden">
            <button
              onClick={() => setShowAll(true)}
              className="rounded-md border-2 border-primary px-6 py-2 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        )}
      </div>
    </section>
  );
}