"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "sonner"
import { CreditCard, Paypal, Banknote } from "lucide-react"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const bookingId = searchParams.get("bookingId")
  const [isLoading, setIsLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("paypal")
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [booking, setBooking] = useState<any>(null)

  useEffect(() => {
    if (!bookingId) {
      router.push("/")
      return
    }

    // Fetch booking details
    const fetchBooking = async () => {
      try {
        const response = await fetch(`/api/bookings/${bookingId}`)
        if (!response.ok) throw new Error("Failed to fetch booking")
        const data = await response.json()
        setBooking(data)
      } catch (error) {
        console.error("Error fetching booking:", error)
        toast.error("Failed to load booking details")
        router.push("/")
      }
    }

    fetchBooking()
  }, [bookingId, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptTerms) {
      toast.error("Please accept the terms and conditions")
      return
    }
    
    setIsLoading(true)

    try {
      const response = await fetch(`/api/bookings/${bookingId}/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethod,
        }),
      })

      if (!response.ok) throw new Error("Failed to process payment")

      toast.success("Payment processed successfully!")
      router.push(`/bookings/${bookingId}`)
    } catch (error) {
      console.error("Payment error:", error)
      toast.error("Failed to process payment. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (!booking) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Payment Method</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Choose a payment method:</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
                <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <Label htmlFor="paypal" className="flex items-center gap-2 cursor-pointer">
                    <Paypal className="h-4 w-4" />
                    <span>PayPal</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <RadioGroupItem value="stripe" id="stripe" />
                  <Label htmlFor="stripe" className="flex items-center gap-2 cursor-pointer">
                    <CreditCard className="h-4 w-4" />
                    <span>Stripe</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 p-3 border rounded-lg cursor-pointer hover:border-primary transition-colors">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod" className="flex items-center gap-2 cursor-pointer">
                    <Banknote className="h-4 w-4" />
                    <span>Cash on Delivery</span>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total Amount:</span>
                <span>₹{booking.totalPrice}</span>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="terms" 
                checked={acceptTerms}
                onCheckedChange={(checked) => setAcceptTerms(checked as boolean)}
              />
              <Label htmlFor="terms" className="text-sm">
                I accept the terms and conditions
              </Label>
            </div>

            <Button 
              type="submit" 
              className="w-full" 
              size="lg" 
              disabled={isLoading || !acceptTerms}
            >
              {isLoading ? "Processing..." : "Book Now"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
} 