"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Clock,
  Mail,
  MapPin,
  Navigation,
  Phone
} from "lucide-react";
import Image from "next/image";

const locations = [
  {
    id: 1,
    name: "สาขา บางบอน",
    address: "316,318,320,322 ถนนบางบอน 1 แขวงบางบอน เขตบางบอน กรุงเทพมหานคร 10150",
    phone: "02-415-3676",
    email: "info@kaistandard.com",
    hours: "จันทร์ - ศุกร์ 07:30 - 18:00",
    imageSrc: "/images/locations/ny-office.jpg",
    googleMapUrl: "https://maps.app.goo.gl/kCr3mPjbc1gWfGUk8"
  },
];

export default function MapPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ที่อยู่ของเรา</h1>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="overflow-hidden">
              <div className="md:flex">
                {/* Left - Image */}
                <div className="md:w-1/2 w-full relative">
                  <Image
                    src={location.imageSrc}
                    alt={location.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right - Details */}
                <div className="md:w-1/2 w-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      {location.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="font-medium mb-1">ที่อยู่</p>
                      <p className="text-muted-foreground">
                        {location.address}
                      </p>
                    </div>

                    <div>
                      <p className="font-medium mb-1">ติดต่อ</p>
                      <div className="space-y-1">
                        <div className="flex items-center text-muted-foreground">
                          <Phone className="h-4 w-4 mr-2" />
                          {location.phone}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <Mail className="h-4 w-4 mr-2" />
                          {location.email}
                        </div>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium mb-1">เวลาทำการ</p>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        {location.hours}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button size="sm" className="flex-1" onClick={() => window.open(location.googleMapUrl, "_blank")}>
                        <Navigation className="h-4 w-4 mr-2" />
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
