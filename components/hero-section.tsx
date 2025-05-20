"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1600&auto=format&fit=crop&q=60"
          alt="Luxury Hotel"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-50"
          style={{ objectPosition: 'center' }}
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-3xl px-4">
          <h1 className="text-5xl font-bold mb-6">Find Your Perfect Stay</h1>
          <p className="text-xl mb-8">Discover and book the best hotels around the world</p>
          <div className="flex gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                placeholder="Where are you going?"
                className="w-full"
              />
            </div>
            <Button size="lg">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
