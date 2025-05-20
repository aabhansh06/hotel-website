"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { LazyImage } from "@/components/ui/lazy-image"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Travel Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60",
    rating: 5,
    comment: "The booking process was seamless and the hotel exceeded our expectations. Will definitely use this platform again!"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
    rating: 5,
    comment: "Great selection of hotels and competitive prices. The customer service team was very helpful when I needed to modify my booking."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Family Vacationer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60",
    rating: 5,
    comment: "Found the perfect family-friendly hotel with all the amenities we needed. The kids loved the pool and the staff was amazing!"
  }
]

export function Testimonials() {
  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
        <p className="text-muted-foreground">Read reviews from our satisfied customers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <LazyImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground">{testimonial.comment}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

