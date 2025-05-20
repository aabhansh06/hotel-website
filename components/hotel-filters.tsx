"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface HotelFiltersProps {
  className?: string
}

export function HotelFilters({ className }: HotelFiltersProps) {
  const [priceRange, setPriceRange] = useState([50, 500])

  const amenities = [
    "Free WiFi",
    "Breakfast Included",
    "Swimming Pool",
    "Fitness Center",
    "Spa",
    "Restaurant",
    "Room Service",
    "Parking",
    "Pet Friendly",
    "Air Conditioning",
  ]

  const propertyTypes = ["Hotel", "Resort", "Apartment", "Villa", "Hostel"]

  const ratings = [5, 4, 3, 2, 1]

  return (
    <div className={className}>
      <Card className="sticky top-20">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-medium">Price Range</h3>
            <Slider value={priceRange} min={0} max={1000} step={10} onValueChange={setPriceRange} className="mb-6" />
            <div className="flex items-center justify-between">
              <span className="text-sm">${priceRange[0]}</span>
              <span className="text-sm">${priceRange[1]}</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Property Type</h3>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={`type-${type}`} />
                  <Label htmlFor={`type-${type}`} className="text-sm">
                    {type}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Star Rating</h3>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox id={`rating-${rating}`} />
                  <Label htmlFor={`rating-${rating}`} className="text-sm">
                    {rating} Stars & Above
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Amenities</h3>
            <div className="space-y-2">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <Checkbox id={`amenity-${amenity}`} />
                  <Label htmlFor={`amenity-${amenity}`} className="text-sm">
                    {amenity}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex gap-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">Apply Filters</Button>
            <Button variant="outline" className="w-full">
              Reset
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
