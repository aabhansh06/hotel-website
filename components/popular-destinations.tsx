"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const destinations = [
  {
    id: 1,
    name: "New York",
    country: "USA",
    description: "The city that never sleeps",
    hotelCount: 245,
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "London",
    country: "UK",
    description: "Historic and modern",
    hotelCount: 189,
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Paris",
    country: "France",
    description: "City of love",
    hotelCount: 156,
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    description: "Where tradition meets future",
    hotelCount: 203,
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60"
  }
]

export function PopularDestinations() {
  return (
    <section>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Popular Destinations</h2>
        <Button variant="outline" asChild>
          <Link href="/destinations">View all destinations</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden group">
            <div className="relative h-64 w-full">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <Image
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={destination.id <= 2}
                quality={85}
              />
              <div className="absolute inset-0 z-20 p-4 flex flex-col justify-end text-white">
                <h3 className="font-semibold text-xl mb-1">{destination.name}</h3>
                <p className="text-sm opacity-90">{destination.country}</p>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center gap-1 text-muted-foreground mb-2">
                <MapPin className="h-4 w-4" />
                <span>{destination.description}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">{destination.hotelCount} hotels</span>
                <Button asChild variant="link" className="p-0 h-auto">
                  <Link href={`/destinations/${destination.id}`}>View Hotels</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
