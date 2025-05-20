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
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&auto=format&fit=crop&q=60",
    description: "The city that never sleeps",
    hotelCount: 245
  },
  {
    id: 2,
    name: "London",
    country: "UK",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&auto=format&fit=crop&q=60",
    description: "Historic and modern",
    hotelCount: 189
  },
  {
    id: 3,
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&auto=format&fit=crop&q=60",
    description: "City of love",
    hotelCount: 156
  },
  {
    id: 4,
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&auto=format&fit=crop&q=60",
    description: "Where tradition meets future",
    hotelCount: 203
  }
]

export default function DestinationsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Popular Destinations</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination) => (
          <Card key={destination.id} className="overflow-hidden group">
            <div className="relative aspect-video">
              <div className="absolute inset-0 bg-black/20 z-10" />
              <Image
                src={destination.image}
                alt={`${destination.name}, ${destination.country}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={destination.id <= 2}
                quality={85}
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4" />
                  <span>{destination.country}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{destination.name}</h3>
                <p className="text-white/90 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-white/90">
                    {destination.hotelCount} hotels
                  </span>
                  <Button asChild variant="secondary">
                    <Link href={`/hotels?destination=${destination.name}`}>
                      View Hotels
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 