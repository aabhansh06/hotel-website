export interface Hotel {
  _id: string
  id: string
  name: string
  description: string
  price: number
  rating: number
  discount?: number
  location: Location
  images: string[]
  amenities: string[]
  highlights?: string[]
  policies: Policies
  reviews: Review[]
}

export interface Location {
  address: string
  city: string
  country: string
  description: string
  nearbyAttractions?: Attraction[]
  transportation?: Transportation[]
}

export interface Attraction {
  name: string
  distance: string
}

export interface Transportation {
  type: string
  distance: string
}

export interface Policies {
  checkIn: string
  checkOut: string
  cancellation: string
  cancellationDetails?: string[]
  paymentMethods: string[]
  deposit: boolean
  taxes: string
  smoking: string
  pets: string
  additionalRules?: string[]
  earlyCheckIn?: string
  lateCheckOut?: string
}

export interface Review {
  user: {
    name: string
    avatar?: string
  }
  date: string
  rating: number
  comment: string
  ratings?: {
    [key: string]: number
  }
}

export interface Room {
  _id: string
  id: string
  hotelId: string
  name: string
  price: number
  discount?: number
  image: string
  capacity: number
  bedType: string
  size: number
  features: string[]
  cancellation?: string
}
