"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { User, Mail, Phone, MessageSquare } from "lucide-react"
import type { Hotel, Room } from "@/types"

interface BookingFormProps {
  hotel: Hotel
  room: Room
  checkIn: string
  checkOut: string
  guests: number
  rooms: number
  totalPrice: number
}

export function BookingForm({ hotel, room, checkIn, checkOut, guests, rooms, totalPrice }: BookingFormProps) {
  const router = useRouter()
  const { data: session, status } = useSession()
  const [isLoading, setIsLoading] = useState(false)
  const [calculatedTotal, setCalculatedTotal] = useState(0)
  const [numberOfNights, setNumberOfNights] = useState(0)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    specialRequests: ""
  })

  useEffect(() => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn)
      const end = new Date(checkOut)
      const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
      setNumberOfNights(nights)
      setCalculatedTotal(room.price * nights * rooms)
    }
  }, [checkIn, checkOut, room.price, rooms])

  useEffect(() => {
    if (session?.user) {
      setFormData(prev => ({
        ...prev,
        email: session.user.email || "",
        firstName: session.user.name?.split(" ")[0] || "",
        lastName: session.user.name?.split(" ")[1] || ""
      }))
    }
  }, [session])

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    router.push("/login")
    return null
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId: hotel._id,
          roomId: room._id,
          checkIn,
          checkOut,
          guests,
          rooms,
          totalPrice: calculatedTotal,
          guestInfo: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            specialRequests: formData.specialRequests
          }
        }),
      })

      // Log response details for debugging
      console.log('Response status:', response.status)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      // Check if response is JSON
      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned non-JSON response')
      }

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to create booking')
      }

      toast.success("Booking confirmed! Please complete your payment.")
      router.push(`/payment?bookingId=${data._id}`)
    } catch (error) {
      console.error("Booking error:", error)
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error("Failed to create booking. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-3 mb-2">
          <h2 className="text-base font-semibold text-blue-900 flex items-center gap-2">
            <User className="h-4 w-4" />
            Guest Information
          </h2>
        </div>

        <div className="space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="firstName" className="text-xs font-medium text-gray-600">First Name</Label>
              <div className="relative">
                <User className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-400" />
                <Input 
                  id="firstName" 
                  required 
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="pl-7 h-8 text-sm bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="First name"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="lastName" className="text-xs font-medium text-gray-600">Last Name</Label>
              <div className="relative">
                <User className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-400" />
                <Input 
                  id="lastName" 
                  required 
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="pl-7 h-8 text-sm bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Last name"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="email" className="text-xs font-medium text-gray-600">Email</Label>
              <div className="relative">
                <Mail className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-400" />
                <Input 
                  id="email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-7 h-8 text-sm bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Email"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="phone" className="text-xs font-medium text-gray-600">Phone</Label>
              <div className="relative">
                <Phone className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-400" />
                <Input 
                  id="phone" 
                  type="tel" 
                  required 
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="pl-7 h-8 text-sm bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Phone"
                />
              </div>
            </div>
          </div>

          <div>
            <Label htmlFor="specialRequests" className="text-xs font-medium text-gray-600">Special Requests</Label>
            <div className="relative">
              <MessageSquare className="absolute left-2 top-1.5 h-3.5 w-3.5 text-gray-400" />
              <Textarea 
                id="specialRequests" 
                value={formData.specialRequests}
                onChange={handleInputChange}
                placeholder="Any special requests?" 
                className="pl-7 text-sm bg-gray-50/50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 min-h-[50px]"
              />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-3 mt-4">
          <h2 className="text-base font-semibold text-green-900 flex items-center gap-2 mb-2">
            <span className="h-4 w-4">💰</span>
            Price Details
          </h2>
          <div className="space-y-1.5 text-sm">
            <div className="flex justify-between text-gray-600">
              <span>Price per night:</span>
              <span className="font-medium">${room.price}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Number of nights:</span>
              <span className="font-medium">{numberOfNights}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Number of rooms:</span>
              <span className="font-medium">{rooms}</span>
            </div>
            <div className="border-t border-green-200 pt-1.5 mt-1.5">
              <div className="flex justify-between">
                <span className="font-semibold text-gray-900">Total:</span>
                <span className="font-bold text-green-600">${calculatedTotal}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          <Button 
            type="submit" 
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200 text-sm" 
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : "Submit Booking"}
          </Button>
          <Button 
            type="button"
            onClick={() => router.back()}
            className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200 text-sm"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  )
}
