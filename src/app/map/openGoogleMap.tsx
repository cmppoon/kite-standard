"use client";

import { Button } from "@/components/ui/button";
import { Navigation } from "lucide-react";
import React from "react";

export default function OpenGoogleMap({
  googleMapUrl,
}: {
  googleMapUrl: string;
}) {
  return (
    <div className="flex gap-2 pt-4">
      <Button
        size="sm"
        className="flex-1"
        onClick={() => window.open(googleMapUrl, "_blank")}
      >
        <Navigation className="mr-2 h-4 w-4" />
        เปิดใน Google Maps
      </Button>
    </div>
  );
}
