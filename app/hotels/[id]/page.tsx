"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import Image from "next/image"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon, MapPin, Star, Wifi, Waves, Car, Utensils, Heart, Dumbbell } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import { Label } from "@/components/ui/label"
import { BookingForm } from "@/components/booking-form"

// Sample hotel data - In real app, this would come from an API
const hotel = {
  id: 1,
  name: "Grand Plaza Hotel",
  location: "New York, USA",
  rating: 4.5,
  reviewCount: 120,
  price: 199,
  description: "Experience luxury at its finest in the heart of New York City. Our 5-star hotel offers world-class amenities, stunning views, and exceptional service.",
  amenities: [
    { icon: Wifi, name: "Free WiFi" },
    { icon: Waves, name: "Swimming Pool" },
    { icon: Car, name: "Free Parking" },
    { icon: Utensils, name: "Restaurant" },
    { icon: Heart, name: "Spa" },
    { icon: Dumbbell, name: "Fitness Center" }
  ],
  images: [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&auto=format&fit=crop&q=60"
  ],
  rooms: [
    {
      id: 1,
      name: "Deluxe Room",
      price: 199,
      capacity: 2,
      size: "35m²",
      bedType: "King Bed"
    },
    {
      id: 2,
      name: "Executive Suite",
      price: 299,
      capacity: 2,
      size: "50m²",
      bedType: "King Bed"
    },
    {
      id: 3,
      name: "Family Suite",
      price: 399,
      capacity: 4,
      size: "70m²",
      bedType: "2 Queen Beds"
    }
  ]
}

export default function HotelDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [guests, setGuests] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState(hotel.rooms[0])
  const [showBookingForm, setShowBookingForm] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBookNow = () => {
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates")
      return
    }
    setShowBookingForm(true)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hotel Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{hotel.location}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{hotel.rating} ({hotel.reviewCount} reviews)</span>
          </div>
        </div>
      </div>

      {/* Hotel Images */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {hotel.images.map((image, index) => (
          <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={image}
              alt={`${hotel.name} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column - Hotel Info */}
        <div className="col-span-2">
          <Card className="mb-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">About this hotel</h2>
              <p className="text-muted-foreground mb-6">{hotel.description}</p>
              
              <h3 className="text-lg font-semibold mb-4">Amenities</h3>
              <div className="grid grid-cols-3 gap-4">
                {hotel.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <amenity.icon className="h-4 w-4" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Room Selection */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Select a Room</h2>
              <div className="space-y-4">
                {hotel.rooms.map((room) => (
                  <div
                    key={room.id}
                    className={cn(
                      "p-4 border rounded-lg cursor-pointer transition-colors",
                      selectedRoom.id === room.id
                        ? "border-primary bg-primary/5"
                        : "hover:border-primary/50"
                    )}
                    onClick={() => setSelectedRoom(room)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{room.name}</h3>
                        <div className="text-sm text-muted-foreground mt-1">
                          <p>Up to {room.capacity} guests</p>
                          <p>{room.size} • {room.bedType}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold">${room.price}</p>
                        <p className="text-sm text-muted-foreground">per night</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Booking */}
        <div>
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-4">Book Your Stay</h2>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Check-in</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkIn && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkIn ? format(checkIn, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkIn}
                          onSelect={setCheckIn}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div>
                    <Label>Check-out</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOut && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOut ? format(checkOut, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={checkOut}
                          onSelect={setCheckOut}
                          initialFocus
                          disabled={(date) =>
                            checkIn ? date < checkIn : false
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div>
                  <Label>Guests</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{guests}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.min(selectedRoom.capacity, guests + 1))}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Price per night</span>
                    <span>${selectedRoom.price}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Number of nights</span>
                    <span>
                      {checkIn && checkOut
                        ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
                        : 0}
                    </span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t">
                    <span>Total</span>
                    <span>
                      $
                      {checkIn && checkOut
                        ? selectedRoom.price *
                          Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
                        : 0}
                    </span>
                  </div>
                </div>

                <Button
                  className="w-full"
                  onClick={handleBookNow}
                  disabled={!checkIn || !checkOut}
                >
                  Book Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Dialog open={showBookingForm} onOpenChange={setShowBookingForm}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Complete Your Booking</DialogTitle>
          </DialogHeader>
          {checkIn && checkOut && (
            <BookingForm
              hotel={hotel}
              room={selectedRoom}
              checkIn={checkIn.toISOString()}
              checkOut={checkOut.toISOString()}
              guests={guests}
              rooms={1}
              totalPrice={
                selectedRoom.price *
                Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))
              }
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
