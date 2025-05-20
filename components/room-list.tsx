import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Square, Maximize2 } from "lucide-react"
import Link from "next/link"
import { rooms } from "@/data/rooms"
import { LazyImage } from "@/components/ui/lazy-image"

interface RoomListProps {
  hotelId: string
}

export function RoomList({ hotelId }: RoomListProps) {
  // Filter rooms by hotel ID
  const hotelRooms = rooms.filter((room) => room.hotelId === hotelId)

  return (
    <div className="space-y-6">
      {hotelRooms.map((room) => (
        <Card key={room.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-1/3 h-48 md:h-auto">
              <LazyImage
                src={room.image || "/placeholder.svg"}
                alt={room.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
              {room.discount && <Badge className="absolute top-2 left-2 bg-green-600">{room.discount}% OFF</Badge>}
            </div>

            <CardContent className="flex-1 p-4 md:p-6">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{room.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      <span>Sleeps {room.capacity}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center">
                      <Square className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{room.bedType}</span>
                    </div>
                    <div className="flex items-center">
                      <Maximize2 className="h-4 w-4 mr-1 text-muted-foreground" />
                      <span>{room.size} sq ft</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {room.features.slice(0, 4).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Check className="h-4 w-4 mr-2 text-green-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {room.cancellation && <p className="text-sm text-green-600 mb-4">{room.cancellation}</p>}
                </div>

                <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      {room.discount && (
                        <span className="text-sm line-through text-muted-foreground">${room.price}</span>
                      )}
                      <span className="text-2xl font-bold">
                        ${room.discount ? Math.round(room.price * (1 - room.discount / 100)) : room.price}
                      </span>
                      <span className="text-sm text-muted-foreground">per night</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Includes taxes and fees</p>
                  </div>

                  <Button asChild className="bg-blue-600 hover:bg-blue-700">
                    <Link href={`/booking/${room.id}`}>Select Room</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
  )
}
