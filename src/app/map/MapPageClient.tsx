"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";

const locations = [
  {
    id: 1,
    name: "สาขา บางบอน",
    address:
      "316,318,320,322 ถนนบางบอน 1 แขวงบางบอน เขตบางบอน กรุงเทพมหานคร 10150",
    phone: "02-415-3676",
    email: "info@kaistandard.com",
    hours: "จันทร์ - ศุกร์ 07:30 - 18:00",
    imageSrc: "/images/locations/ny-office.jpg",
    googleMapUrl: "https://maps.app.goo.gl/kCr3mPjbc1gWfGUk8",
  },
];

export default function MapPageClient() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">ที่อยู่ของเรา</h1>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="overflow-hidden">
              <div className="md:flex">
                {/* Left - Image */}
                <div className="relative w-full md:w-1/2">
                  <Image
                    src={location.imageSrc}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right - Details */}
                <div className="w-full md:w-1/2">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="mb-1 font-medium">ที่อยู่</p>
                      <p className="text-muted-foreground">
                        {location.address}
                      </p>
                    </div>

                    <div>
                      <p className="mb-1 font-medium">ติดต่อ</p>
                      <div className="space-y-1">
                        <div className="text-muted-foreground flex items-center">
                          <Phone className="mr-2 h-4 w-4" />
                          {location.phone}
                        </div>
                        <div className="text-muted-foreground flex items-center">
                          <Mail className="mr-2 h-4 w-4" />
                          {location.email}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="mb-1 font-medium">เวลาทำการ</p>
                      <div className="text-muted-foreground flex items-center">
                        <Clock className="mr-2 h-4 w-4" />
                        {location.hours}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() =>
                          window.open(location.googleMapUrl, "_blank")
                        }
                      >
                        <Navigation className="mr-2 h-4 w-4" />
                        เปิดใน Google Maps
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
