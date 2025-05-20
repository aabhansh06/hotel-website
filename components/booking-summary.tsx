import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CalendarRange, Users, Clock } from "lucide-react"
import Image from "next/image"
import type { Hotel, Room } from "@/types"

interface BookingSummaryProps {
  hotel: Hotel
  room: Room
}

export function BookingSummary({ hotel, room }: BookingSummaryProps) {
  // Calculate total price
  const basePrice = room.discount ? Math.round(room.price * (1 - room.discount / 100)) : room.price

  const nights = 3 // Hardcoded for demo
  const subtotal = basePrice * nights
  const taxes = Math.round(subtotal * 0.15)
  const total = subtotal + taxes

  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex gap-4">
          <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
            <Image src={hotel.images[0] || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold">{hotel.name}</h3>
            <p className="text-sm text-muted-foreground">{hotel.location.address}</p>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-2">Room Details</h4>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Users className="h-4 w-4 text-muted-foreground" />
              <span>
                {room.name} - Sleeps {room.capacity}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CalendarRange className="h-4 w-4 text-muted-foreground" />
              <span>June 15 - June 18, 2025 ({nights} nights)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span>
                Check-in: {hotel.policies.checkIn} · Check-out: {hotel.policies.checkOut}
              </span>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-semibold mb-2">Price Details</h4>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                ${basePrice} x {nights} nights
              </span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Taxes & fees</span>
              <span>${taxes}</span>
            </div>
            {room.discount && (
              <div className="flex justify-between text-sm text-green-600">
                <span>Discount ({room.discount}%)</span>
                <span>-${Math.round(room.price * (room.discount / 100) * nights)}</span>
              </div>
            )}
          </div>
        </div>

        <Separator />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>

        {room.cancellation && (
          <div className="bg-green-50 p-3 rounded-md text-sm text-green-700">{room.cancellation}</div>
        )}
      </CardContent>
    </Card>
  )
}
