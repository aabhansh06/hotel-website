"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, MapPin, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { SearchForm } from "@/components/search-form"
import { FeaturedHotels } from "@/components/featured-hotels"
import { PopularDestinations } from "@/components/popular-destinations"
import { Testimonials } from "@/components/testimonials"
import { Newsletter } from "@/components/newsletter"
import { HeroSection } from "@/components/hero-section"

const featuredHotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "New York, USA",
    rating: 4.5,
    price: 199,
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Miami, USA",
    rating: 4.8,
    price: 299,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 3,
    name: "Metropolitan Hotel",
    location: "London, UK",
    rating: 4.3,
    price: 249,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&auto=format&fit=crop&q=60"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <div className="container mx-auto px-4 py-12 space-y-20">
        <SearchForm className="relative -mt-24 z-10" />
        <FeaturedHotels />
        <PopularDestinations />
        <Testimonials />
        <Newsletter />
      </div>
    </div>
  )
}
