import MapPageClient from "@/app/map/MapPageClient";

export const metadata = {
  title: "Kai Standard Locations & Service Areas | Find a Branch Near You",
  description:
    "Kai Standard locations across the United States. We serve 30+ states with professional ceiling installation and repair services. Contact your local branch today.",
  keywords:
    "ceiling installation locations, ceiling repair near me, Kai Standard branches, ceiling contractors by state, professional ceiling services locations",
};

export default function MapPage() {
  return <MapPageClient />;
}
