"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredHotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "123 Main Street",
    rating: 4.8,
    price: 250,
    discount: 15,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Seaside Resort & Spa",
    location: "789 Ocean Drive",
    rating: 4.9,
    price: 350,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Mountain Lodge",
    location: "456 Pine Trail",
    rating: 4.7,
    price: 180,
    discount: 10,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "City Center Hotel",
    location: "321 Business Avenue",
    rating: 4.6,
    price: 200,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=60"
  }
]

export function FeaturedHotels() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Handpicked accommodations for your perfect stay</h2>
        <Button variant="outline" asChild>
          <Link href="/hotels">View all hotels</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredHotels.map((hotel) => (
          <Card key={hotel.id} className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src={hotel.image}
                alt={hotel.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
                priority={hotel.id <= 2}
              />
              {hotel.discount && (
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                  {hotel.discount}% OFF
                </div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">{hotel.name}</h3>
              <div className="flex items-center gap-1 text-muted-foreground mb-2">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>{hotel.rating}</span>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground mb-4">
                <MapPin className="h-4 w-4" />
                <span>{hotel.location}</span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xl font-bold">${hotel.price}</p>
                  <p className="text-sm text-muted-foreground">per night</p>
                </div>
                <Button asChild>
                  <Link href={`/hotels/${hotel.id}`}>View Details</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
