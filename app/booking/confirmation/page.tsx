import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function ConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-8">
          Thank you for your booking. We've sent a confirmation email to your email address. Your booking reference
          number is <span className="font-semibold">BK12345678</span>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-gray-500">Hotel</p>
              <p className="font-medium">Grand Plaza Hotel</p>
            </div>
            <div>
              <p className="text-gray-500">Room Type</p>
              <p className="font-medium">Deluxe King Room</p>
            </div>
            <div>
              <p className="text-gray-500">Check-in</p>
              <p className="font-medium">June 15, 2025</p>
            </div>
            <div>
              <p className="text-gray-500">Check-out</p>
              <p className="font-medium">June 18, 2025</p>
            </div>
            <div>
              <p className="text-gray-500">Guests</p>
              <p className="font-medium">2 Adults</p>
            </div>
            <div>
              <p className="text-gray-500">Total Amount</p>
              <p className="font-medium">$450.00</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/account/bookings">View My Bookings</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
