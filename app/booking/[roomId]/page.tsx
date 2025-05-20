import { BookingForm } from "@/components/booking-form"
import { BookingSummary } from "@/components/booking-summary"
import { hotels } from "@/data/hotels"
import { rooms } from "@/data/rooms"
import { notFound } from "next/navigation"

export default function BookingPage({ params }: { params: { roomId: string } }) {
  const room = rooms.find((r) => r.id === params.roomId)

  if (!room) {
    notFound()
  }

  const hotel = hotels.find((h) => h.id === room.hotelId)

  if (!hotel) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Complete Your Booking</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <BookingForm hotel={hotel} room={room} />
        </div>
        <div className="lg:col-span-1">
          <BookingSummary hotel={hotel} room={room} />
        </div>
      </div>
    </div>
  )
}
