import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Navigation } from "lucide-react"
import type { Location } from "@/types"
import { LazyImage } from "@/components/ui/lazy-image"

interface HotelLocationProps {
  location: Location
}

export function HotelLocation({ location }: HotelLocationProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Location</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium">{location.address}</p>
                <p className="text-sm text-muted-foreground">
                  {location.city}, {location.country}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground">{location.description}</p>

            <div>
              <h4 className="font-medium mb-2">Nearby Attractions</h4>
              <ul className="space-y-2">
                {location.nearbyAttractions?.map((attraction, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>
                      {attraction.name} - {attraction.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-0 overflow-hidden rounded-lg">
            <div className="relative h-64 w-full">
              <LazyImage
                src="/placeholder.svg?height=400&width=600"
                alt="Map location"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Navigation className="h-6 w-6" />
                </div>
              </div>
            </div>
            <div className="p-4">
              <h4 className="font-medium mb-2">Transportation</h4>
              <ul className="space-y-2">
                {location.transportation?.map((item, index) => (
                  <li key={index} className="text-sm flex justify-between">
                    <span className="text-muted-foreground">{item.type}</span>
                    <span>{item.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
