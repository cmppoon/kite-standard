import MapPageClient from "@/app/map/MapPageClient";

export const metadata = {
  title: "แผนที่",
  description:
    "Kai Standard locations across the United States. We serve 30+ states with professional ceiling installation and repair services. Contact your local branch today.",
  keywords:
    "ceiling installation locations, ceiling repair near me, Kai Standard branches, ceiling contractors by state, professional ceiling services locations",
};

export default function MapPage() {
  return <MapPageClient />;
}
