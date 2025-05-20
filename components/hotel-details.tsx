"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"
import Link from "next/link"
import { LazyImage } from "@/components/ui/lazy-image"

interface HotelDetailsProps {
  hotel: {
    id: string
    name: string
    location: string
    rating: number
    price: number
    images: string[]
    description: string
    amenities: string[]
  }
}

export function HotelDetails({ hotel }: HotelDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative h-[400px]">
          <LazyImage
            src={hotel.images[0]}
            alt={hotel.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{hotel.name}</h1>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground">{hotel.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{hotel.rating}</span>
          </div>
          <p className="text-muted-foreground">{hotel.description}</p>
          <div className="flex flex-wrap gap-2">
            {hotel.amenities.map((amenity) => (
              <span
                key={amenity}
                className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
              >
                {amenity}
              </span>
            ))}
          </div>
          <div className="pt-4">
            <p className="text-2xl font-bold">${hotel.price}</p>
            <p className="text-sm text-muted-foreground">per night</p>
          </div>
          <Button asChild className="w-full">
            <Link href={`/hotels/${hotel.id}/book`}>Book Now</Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hotel.images.slice(1).map((image, index) => (
          <div key={index} className="relative h-48">
            <LazyImage
              src={image}
              alt={`${hotel.name} - Image ${index + 2}`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
