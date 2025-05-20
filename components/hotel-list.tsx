import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Wifi, Coffee, Tv, ParkingMeterIcon as Parking } from "lucide-react"
import Link from "next/link"
import { hotels } from "@/data/hotels"
import { LazyImage } from "@/components/ui/lazy-image"

interface HotelListProps {
  className?: string
}

export function HotelList({ className }: HotelListProps) {
  return (
    <div className={className}>
      <div className="flex items-center justify-between mb-4">
        <p className="text-muted-foreground">Showing {hotels.length} hotels</p>
        <div className="flex items-center gap-2">
          <span className="text-sm">Sort by:</span>
          <select className="text-sm border rounded p-1">
            <option>Recommended</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Rating</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {hotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-1/3 h-48 md:h-auto">
                <LazyImage
                  src={hotel.images[0] || "/placeholder.svg"}
                  alt={hotel.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
                {hotel.discount && <Badge className="absolute top-2 left-2 bg-blue-600">{hotel.discount}% OFF</Badge>}
              </div>

              <CardContent className="flex-1 p-4 md:p-6">
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-xl font-bold">{hotel.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="font-medium">{hotel.rating}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{hotel.location.address}</p>

                    <div className="flex flex-wrap gap-2 mb-2">
                      {hotel.amenities.slice(0, 4).map((amenity, index) => {
                        const icons = {
                          "Free WiFi": <Wifi className="h-3 w-3 mr-1" />,
                          Breakfast: <Coffee className="h-3 w-3 mr-1" />,
                          TV: <Tv className="h-3 w-3 mr-1" />,
                          Parking: <Parking className="h-3 w-3 mr-1" />,
                        }

                        return (
                          <span key={index} className="inline-flex items-center text-xs text-muted-foreground">
                            {icons[amenity as keyof typeof icons]}
                            {amenity}
                          </span>
                        )
                      })}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold">${hotel.price}</span>
                        <span className="text-sm text-muted-foreground">per night</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Includes taxes and fees</p>
                    </div>

                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <Link href={`/hotels/${hotel.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
