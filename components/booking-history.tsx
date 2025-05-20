import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarRange, MapPin, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BookingHistory() {
  const upcomingBookings = [
    {
      id: "BK12345678",
      hotelName: "Grand Plaza Hotel",
      roomType: "Deluxe King Room",
      checkIn: "June 15, 2025",
      checkOut: "June 18, 2025",
      guests: 2,
      status: "Confirmed",
      image: "/placeholder.svg?height=100&width=150",
      location: "New York, USA",
      price: 450,
    },
  ]

  const pastBookings = [
    {
      id: "BK87654321",
      hotelName: "Seaside Resort & Spa",
      roomType: "Ocean View Suite",
      checkIn: "March 10, 2025",
      checkOut: "March 15, 2025",
      guests: 2,
      status: "Completed",
      image: "/placeholder.svg?height=100&width=150",
      location: "Miami, USA",
      price: 780,
    },
    {
      id: "BK76543210",
      hotelName: "Mountain Lodge",
      roomType: "Standard Double Room",
      checkIn: "January 5, 2025",
      checkOut: "January 8, 2025",
      guests: 2,
      status: "Completed",
      image: "/placeholder.svg?height=100&width=150",
      location: "Denver, USA",
      price: 320,
    },
  ]

  const cancelledBookings = [
    {
      id: "BK65432109",
      hotelName: "City Center Hotel",
      roomType: "Executive Suite",
      checkIn: "February 20, 2025",
      checkOut: "February 22, 2025",
      guests: 1,
      status: "Cancelled",
      image: "/placeholder.svg?height=100&width=150",
      location: "Chicago, USA",
      price: 380,
      refundAmount: 342,
    },
  ]

  return (
    <Tabs defaultValue="upcoming" className="space-y-4">
      <TabsList>
        <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
        <TabsTrigger value="past">Past</TabsTrigger>
        <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming">
        {upcomingBookings.length > 0 ? (
          <div className="space-y-4">
            {upcomingBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You have no upcoming bookings</p>
            <Button asChild className="mt-4 bg-blue-600 hover:bg-blue-700">
              <Link href="/hotels">Find a Hotel</Link>
            </Button>
          </div>
        )}
      </TabsContent>

      <TabsContent value="past">
        {pastBookings.length > 0 ? (
          <div className="space-y-4">
            {pastBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You have no past bookings</p>
          </div>
        )}
      </TabsContent>

      <TabsContent value="cancelled">
        {cancelledBookings.length > 0 ? (
          <div className="space-y-4">
            {cancelledBookings.map((booking) => (
              <BookingCard key={booking.id} booking={booking} />
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-muted-foreground">You have no cancelled bookings</p>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}

interface BookingCardProps {
  booking: any
}

function BookingCard({ booking }: BookingCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-32 h-24 rounded-md overflow-hidden flex-shrink-0">
            <Image src={booking.image || "/placeholder.svg"} alt={booking.hotelName} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
              <div>
                <h3 className="font-semibold">{booking.hotelName}</h3>
                <p className="text-sm text-muted-foreground flex items-center">
                  <MapPin className="h-3 w-3 mr-1" />
                  {booking.location}
                </p>
              </div>

              <Badge
                className={`self-start md:self-center mt-2 md:mt-0 ${
                  booking.status === "Confirmed"
                    ? "bg-green-500"
                    : booking.status === "Cancelled"
                      ? "bg-red-500"
                      : "bg-blue-500"
                }`}
              >
                {booking.status}
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              <div className="text-sm">
                <span className="text-muted-foreground">Booking ID: </span>
                <span className="font-medium">{booking.id}</span>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Room Type: </span>
                <span className="font-medium">{booking.roomType}</span>
              </div>
              <div className="text-sm flex items-center">
                <CalendarRange className="h-3 w-3 mr-1 text-muted-foreground" />
                <span>
                  {booking.checkIn} - {booking.checkOut}
                </span>
              </div>
              <div className="text-sm">
                <span className="text-muted-foreground">Guests: </span>
                <span className="font-medium">{booking.guests}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div>
                <div className="text-lg font-bold">${booking.price}</div>
                {booking.refundAmount && (
                  <div className="text-sm text-green-600">Refunded: ${booking.refundAmount}</div>
                )}
              </div>

              <div className="flex gap-2 mt-3 sm:mt-0">
                <Button size="sm" variant="outline" className="gap-1">
                  <Download className="h-4 w-4" />
                  Receipt
                </Button>

                {booking.status === "Confirmed" && (
                  <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href={`/booking/${booking.id}`}>Manage</Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
