import { Wifi, Coffee, Dumbbell, Waves, Utensils, Car, Tv, Wind, Dog, Snowflake } from "lucide-react"
import type { JSX } from "react" // Declare JSX variable

interface HotelAmenitiesProps {
  amenities: string[]
}

export function HotelAmenities({ amenities }: HotelAmenitiesProps) {
  // Map amenities to icons
  const amenityIcons: Record<string, JSX.Element> = {
    "Free WiFi": <Wifi className="h-5 w-5" />,
    Breakfast: <Coffee className="h-5 w-5" />,
    "Fitness Center": <Dumbbell className="h-5 w-5" />,
    "Swimming Pool": <Waves className="h-5 w-5" />,
    Restaurant: <Utensils className="h-5 w-5" />,
    Parking: <Car className="h-5 w-5" />,
    TV: <Tv className="h-5 w-5" />,
    "Air Conditioning": <Snowflake className="h-5 w-5" />,
    "Pet Friendly": <Dog className="h-5 w-5" />,
    Balcony: <Wind className="h-5 w-5" />,
  }

  // Group amenities by category
  const categories = {
    Popular: ["Free WiFi", "Breakfast", "Swimming Pool", "Parking"],
    Facilities: ["Fitness Center", "Restaurant", "Conference Room"],
    "Room Features": ["TV", "Air Conditioning", "Balcony", "Mini Bar"],
    Services: ["Room Service", "Concierge", "Laundry", "Airport Shuttle"],
    Accessibility: ["Wheelchair Accessible", "Elevator", "Accessible Bathroom"],
  }

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([category, categoryAmenities]) => {
        const filteredAmenities = amenities.filter((amenity) => categoryAmenities.includes(amenity))

        if (filteredAmenities.length === 0) return null

        return (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredAmenities.map((amenity) => (
                <div key={amenity} className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600">
                    {amenityIcons[amenity] || <div className="w-5 h-5 bg-blue-600 rounded-full" />}
                  </div>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      <div>
        <h3 className="text-lg font-semibold mb-4">Other Amenities</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {amenities
            .filter((amenity) => !Object.values(categories).flat().includes(amenity))
            .map((amenity) => (
              <div key={amenity} className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-blue-600">
                  {amenityIcons[amenity] || <div className="w-5 h-5 bg-blue-600 rounded-full" />}
                </div>
                <span>{amenity}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
