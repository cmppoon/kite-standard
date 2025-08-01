"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react"

const locations = [
  {
    id: 1,
    name: "New York - Main Office",
    address: "123 Ceiling Street, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "ny@ceilingpro.com",
    hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
    services: ["Residential", "Commercial", "Emergency"],
    isHeadquarters: true,
  },
  {
    id: 2,
    name: "Los Angeles - West Coast",
    address: "456 Pacific Ave, Los Angeles, CA 90210",
    phone: "+1 (555) 234-5678",
    email: "la@ceilingpro.com",
    hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
    services: ["Residential", "Commercial", "Design"],
  },
  {
    id: 3,
    name: "Chicago - Midwest",
    address: "789 Lake Shore Dr, Chicago, IL 60611",
    phone: "+1 (555) 345-6789",
    email: "chicago@ceilingpro.com",
    hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
    services: ["Commercial", "Industrial", "Repair"],
  },
  {
    id: 4,
    name: "Miami - Southeast",
    address: "321 Ocean Drive, Miami, FL 33139",
    phone: "+1 (555) 456-7890",
    email: "miami@ceilingpro.com",
    hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
    services: ["Residential", "Hospitality", "Moisture Control"],
  },
  {
    id: 5,
    name: "Dallas - Southwest",
    address: "654 Main Street, Dallas, TX 75201",
    phone: "+1 (555) 567-8901",
    email: "dallas@ceilingpro.com",
    hours: "Mon-Fri 8AM-6PM, Sat 9AM-4PM",
    services: ["Commercial", "Industrial", "Fire Safety"],
  },
]

export default function MapPageClient() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find a CeilingPro location near you. We have branches across the country to serve you better.
          </p>
        </div>

        {/* Map Placeholder */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Map</CardTitle>
              <CardDescription>Click on any location marker to view details and get directions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive map would be displayed here</p>
                  <p className="text-sm text-muted-foreground mt-2">Integration with Google Maps or similar service</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <Card key={location.id} className="relative">
              {location.isHeadquarters && <Badge className="absolute top-4 right-4">Headquarters</Badge>}
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  {location.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p className="text-muted-foreground">{location.address}</p>
                </div>

                <div>
                  <p className="font-medium mb-1">Contact</p>
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
                  <p className="font-medium mb-1">Hours</p>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {location.hours}
                  </div>
                </div>

                <div>
                  <p className="font-medium mb-2">Services</p>
                  <div className="flex flex-wrap gap-1">
                    {location.services.map((service, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-4">
                  <Button size="sm" className="flex-1">
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Areas */}
        <div className="mt-16">
          <Card>
            <CardHeader>
              <CardTitle>Service Areas</CardTitle>
              <CardDescription>We provide ceiling solutions across multiple states and regions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-semibold mb-3">Northeast Region</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>New York</li>
                    <li>New Jersey</li>
                    <li>Connecticut</li>
                    <li>Massachusetts</li>
                    <li>Pennsylvania</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Southeast Region</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Florida</li>
                    <li>Georgia</li>
                    <li>North Carolina</li>
                    <li>South Carolina</li>
                    <li>Virginia</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Midwest Region</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Illinois</li>
                    <li>Indiana</li>
                    <li>Ohio</li>
                    <li>Michigan</li>
                    <li>Wisconsin</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Southwest Region</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Texas</li>
                    <li>Oklahoma</li>
                    <li>Arkansas</li>
                    <li>Louisiana</li>
                    <li>New Mexico</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">West Coast Region</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>California</li>
                    <li>Nevada</li>
                    <li>Arizona</li>
                    <li>Oregon</li>
                    <li>Washington</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Mountain Region</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>Colorado</li>
                    <li>Utah</li>
                    <li>Montana</li>
                    <li>Wyoming</li>
                    <li>Idaho</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
