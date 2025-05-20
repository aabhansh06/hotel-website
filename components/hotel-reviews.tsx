import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Star } from "lucide-react"
import type { Review } from "@/types"

interface HotelReviewsProps {
  reviews: Review[]
}

export function HotelReviews({ reviews }: HotelReviewsProps) {
  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={review.user.avatar} alt={review.user.name} />
              <AvatarFallback>{review.user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{review.user.name}</p>
              <p className="text-sm text-muted-foreground">{review.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground">{review.comment}</p>
          {review.ratings && (
            <div className="space-y-2">
              {Object.entries(review.ratings).map(([category, rating]) => (
                <div key={category} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize">{category}</span>
                    <span>{rating}/5</span>
                  </div>
                  <Progress value={rating * 20} className="h-2" />
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
