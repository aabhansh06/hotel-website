import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Trash2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { hotels } from "@/data/hotels"

export function SavedHotels() {
  // Use first 3 hotels as saved hotels for demo
  const savedHotels = hotels.slice(0, 3)

  return (
    <div className="space-y-4">
      {savedHotels.length > 0 ? (
        savedHotels.map((hotel) => (
          <Card key={hotel.id}>
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative w-full md:w-48 h-32 rounded-md overflow-hidden flex-shrink-0">
                  <Image src={hotel.images[0] || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="font-semibold">{hotel.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{hotel.rating}</span>
                        </div>
                        <p className="text-muted-foreground flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          {hotel.location.address}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 mb-4">
                    <p className="text-sm text-muted-foreground line-clamp-2">{hotel.description}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-bold">${hotel.price}</span>
                      <span className="text-sm text-muted-foreground">per night</span>
                    </div>

                    <div className="flex gap-2 mt-3 sm:mt-0">
                      <Button size="sm" variant="outline" className="gap-1">
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </Button>

                      <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link href={`/hotels/${hotel.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-muted-foreground">You haven't saved any hotels yet</p>
          <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
            <Link href="/hotels">Browse Hotels</Link>
          </Button>
        </div>
      )}
    </div>
  )
}
