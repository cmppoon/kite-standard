import React from "react";
import Image from "next/image";
import { customers } from "@/data/customers";

export default function OurCustomers() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">ลูกค้าและโครงการที่ใช้ผลิตภัณฑ์ของเรา</h>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5 gap-y-12">
          {customers.map((customer) => (
            <div
              key={customer.id}
              className="relative mx-auto h-24 w-full"
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
      </div>
    </section>
  );
}
