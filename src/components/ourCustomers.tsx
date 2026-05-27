"use client";

import React, { useState } from "react";
import Image from "next/image";
import { customers } from "@/data/customers";

export default function OurCustomers() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="bg-white px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-center">
          <h1 className="text-primary mb-2 text-3xl font-bold md:text-4xl">
            ลูกค้า
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-base">
            โครงการที่ใช้ผลิตภัณฑ์ของเรา
          </p>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-8 gap-y-12 md:grid-cols-6">
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
              className="border-primary text-primary hover:bg-primary rounded-md border-2 px-6 py-2 font-semibold transition-colors hover:text-white"
            >
              ดูเพิ่มเติม
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
