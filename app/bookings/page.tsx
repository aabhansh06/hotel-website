"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Calendar, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

interface Booking {
  _id: string
  hotelId: {
    name: string
    location: string
    image: string
  }
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
  totalPrice: number
  status: string
}

export default function BookingsPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [bookings, setBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login")
      return
    }

    if (status === "authenticated") {
      fetchBookings()
    }
  }, [status, router])

  const fetchBookings = async () => {
    try {
      const response = await fetch("/api/bookings", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      
      if (!response.ok) {
        throw new Error("Failed to fetch bookings")
      }
      
      const data = await response.json()
      setBookings(data)
    } catch (error) {
      console.error("Error fetching bookings:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="container py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <p>Loading your bookings...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Your Bookings</h1>
        <Button asChild>
          <Link href="/hotels">Book Another Stay</Link>
        </Button>
      </div>

      {bookings.length === 0 ? (
        <Card>
          <CardContent className="p-8 text-center">
            <h2 className="text-xl font-semibold mb-2">No Bookings Found</h2>
            <p className="text-muted-foreground mb-4">
              You haven't made any bookings yet. Start planning your next stay!
            </p>
            <Button asChild>
              <Link href="/hotels">Browse Hotels</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {bookings.map((booking) => (
            <Card key={booking._id}>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="relative w-full md:w-64 h-48 rounded-lg overflow-hidden">
                    <Image
                      src={booking.hotelId.image}
                      alt={booking.hotelId.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h2 className="text-xl font-semibold mb-1">{booking.hotelId.name}</h2>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{booking.hotelId.location}</span>
                        </div>
                      </div>
                      <div className={`
                        px-3 py-1 rounded-full text-sm font-medium
                        ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      `}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Check-in</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(booking.checkIn).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Check-out</p>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(booking.checkOut).toLocaleDateString()}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Guests</p>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Total Price</p>
                        <p className="font-semibold">${booking.totalPrice}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button variant="outline" asChild>
                        <Link href={`/hotels/${booking.hotelId._id}`}>View Hotel</Link>
                      </Button>
                      <Button variant="outline" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                        Cancel Booking
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
} 