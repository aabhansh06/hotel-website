"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const deals = [
  {
    id: 1,
    name: "Summer Special",
    hotel: "Grand Plaza Hotel",
    location: "New York, USA",
    originalPrice: 299,
    discountedPrice: 199,
    discount: 33,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    validUntil: "2024-08-31"
  },
  {
    id: 2,
    name: "Weekend Getaway",
    hotel: "Seaside Resort",
    location: "Miami, USA",
    originalPrice: 399,
    discountedPrice: 249,
    discount: 38,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60",
    validUntil: "2024-07-15"
  },
  {
    id: 3,
    name: "City Break",
    hotel: "Metropolitan Hotel",
    location: "London, UK",
    originalPrice: 249,
    discountedPrice: 179,
    discount: 28,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=60",
    validUntil: "2024-09-30"
  }
]

export default function DealsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Special Deals & Offers</h1>
      
      <div className="grid gap-6">
        {deals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden group">
            <CardContent className="p-6">
              <div className="flex gap-6">
                <div className="relative w-48 h-32 rounded-lg overflow-hidden">
                  <Image
                    src={deal.image}
                    alt={deal.hotel}
                    fill
                    sizes="(max-width: 768px) 192px, 192px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    priority={deal.id === 1}
                    quality={85}
                  />
                  <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                    {deal.discount}% OFF
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{deal.hotel}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4" />
                    <span>{deal.location}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span>{deal.rating}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Clock className="h-4 w-4" />
                    <span>Valid until {new Date(deal.validUntil).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">${deal.discountedPrice}</p>
                        <p className="text-sm text-muted-foreground line-through">
                          ${deal.originalPrice}
                        </p>
                      </div>
                      <p className="text-sm text-muted-foreground">per night</p>
                    </div>
                    <Button asChild>
                      <Link href={`/hotels/${deal.id}`}>Book Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 