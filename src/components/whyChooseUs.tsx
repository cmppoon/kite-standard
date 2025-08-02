import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 bg-text-accent">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ทำไมต้องไคสแตนดาร์ด
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            เพราะเราไม่ใช่แค่ผู้จัดจำหน่าย
            แต่เป็นโรงงานผู้เชี่ยวชาญที่อยู่ในวงการมากว่า 40 ปี
            โดยเฉพาะในงานที่ต้องใช้ความชำนาญสูงอย่างการทำลวดลาย
            บังใบและเจาะรูแผ่นยิปซั่ม ซึ่งเป็นสิ่งที่เราถนัดที่สุด
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">40+</span>
              </div>
              <CardTitle className="text-xl mb-3">ปีในวงการฝ้าเพดาน</CardTitle>
              <CardDescription>
                ได้รับความไว้วางใจจากลูกค้าหลายพันรายทั่วประเทศมานานกว่า 40 ปี
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">24/7</span>
              </div>
              <CardTitle className="text-xl mb-3">
                พร้อมให้บริการตลอด 24 ชั่วโมง
              </CardTitle>
              <CardDescription>
                บริการช่วยเหลือตลอด 24
                ชั่วโมงสำหรับการซ่อมแซมเร่งด่วนและการติดตั้งฉุกเฉิน
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="pt-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">100%</span>
              </div>
              <CardTitle className="text-xl mb-3">
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
