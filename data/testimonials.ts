interface Testimonial {
  name: string
  rating: number
  comment: string
  location: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: "Emily Johnson",
    rating: 5,
    comment:
      "StayEase made finding the perfect hotel so simple! The booking process was seamless, and I loved being able to compare options easily. Will definitely use again for my next trip!",
    location: "New York, USA",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Marcus Chen",
    rating: 5,
    comment:
      "I've used many hotel booking sites, but StayEase is by far the best. The filters helped me find exactly what I was looking for, and I saved so much with their exclusive deals!",
    location: "Toronto, Canada",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Sophia Rodriguez",
    rating: 4,
    comment:
      "Great selection of hotels and the reviews were spot on! The only reason for 4 stars instead of 5 is that I wish there were more filter options for amenities. Otherwise, fantastic service!",
    location: "London, UK",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]
