"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BedDouble, CreditCard, Headphones, Shield } from "lucide-react"

const features = [
  {
    id: 1,
    title: "Best Price Guarantee",
    description: "We guarantee the best prices for your stay. Found a better deal? We'll match it!",
    icon: CreditCard
  },
  {
    id: 2,
    title: "24/7 Support",
    description: "Our customer support team is available round the clock to assist you with any queries.",
    icon: Headphones
  },
  {
    id: 3,
    title: "Secure Booking",
    description: "Your personal information and payment details are always secure with us.",
    icon: Shield
  },
  {
    id: 4,
    title: "Quality Accommodations",
    description: "We carefully select and verify all our partner hotels to ensure the best quality.",
    icon: BedDouble
  }
]

export function Features() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
        <p className="text-muted-foreground">Experience the best in hotel booking with our premium features</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => (
          <Card key={feature.id}>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 