import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            ทำไมต้องเลือกเรา?
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            เพราะเราไม่ใช่แค่ผู้จัดจำหน่าย
            แต่เป็นโรงงานผู้เชี่ยวชาญที่อยู่ในวงการมากว่า 40 ปี
            โดยเฉพาะในงานที่ต้องใช้ความชำนาญสูงอย่างการทำลวดลาย
            บังใบและเจาะรูแผ่นยิปซั่ม ซึ่งเป็นสิ่งที่เราถนัดที่สุด
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <Card className="text-center">
            <CardContent className="pt-4">
              <div className="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-primary text-2xl font-bold">40+</span>
              </div>
              <CardTitle className="mb-3 text-xl">ปีในวงการฝ้าเพดาน</CardTitle>
              <CardDescription>
                ได้รับความไว้วางใจจากลูกค้าหลายพันรายทั่วประเทศมานานกว่า 40 ปี
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-4">
              <div className="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-primary text-2xl font-bold">24/7</span>
              </div>
              <CardTitle className="mb-3 text-xl">
                พร้อมให้บริการตลอด 24 ชั่วโมง
              </CardTitle>
              <CardDescription>
                บริการช่วยเหลือตลอด 24
                ชั่วโมงสำหรับการซ่อมแซมเร่งด่วนและการติดตั้งฉุกเฉิน
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-4">
              <div className="bg-secondary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                <span className="text-primary text-2xl font-bold">100%</span>
              </div>
              <CardTitle className="mb-3 text-xl">
                การรับประกันและความพึงพอใจ
              </CardTitle>
              <CardDescription>
                รับประกันคุณภาพสินค้าทุกชิ้น พร้อมการรับประกันความพึงพอใจ 100%
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
