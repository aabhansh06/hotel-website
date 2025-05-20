interface Destination {
  id: string
  name: string
  image: string
  propertyCount: number
  description?: string
  country: string
  attractions?: string[]
}

export const destinations: Destination[] = [
  {
    id: "dest-1",
    name: "New York City",
    image: "/placeholder.svg?height=400&width=600",
    propertyCount: 358,
    country: "United States",
    description:
      "Experience the vibrant energy of the Big Apple with its iconic skyline, world-class shopping, and diverse cultural attractions.",
    attractions: ["Times Square", "Central Park", "Empire State Building", "Broadway", "Statue of Liberty"],
  },
  {
    id: "dest-2",
    name: "Paris",
    image: "/placeholder.svg?height=400&width=600",
    propertyCount: 275,
    country: "France",
    description:
      "Discover the romance of the City of Light with its charming boulevards, world-famous monuments, and exquisite cuisine.",
    attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées", "Montmartre"],
  },
  {
    id: "dest-3",
    name: "Tokyo",
    image: "/placeholder.svg?height=400&width=600",
    propertyCount: 312,
    country: "Japan",
    description:
      "Immerse yourself in the fascinating blend of ultramodern and traditional in Japan's bustling capital city.",
    attractions: ["Tokyo Skytree", "Shibuya Crossing", "Meiji Shrine", "Tokyo Disneyland", "Senso-ji Temple"],
  },
  {
    id: "dest-4",
    name: "Bali",
    image: "/placeholder.svg?height=400&width=600",
    propertyCount: 186,
    country: "Indonesia",
    description:
      "Relax on pristine beaches, explore lush rice terraces, and experience the unique spiritual culture of this tropical paradise.",
    attractions: [
      "Ubud Monkey Forest",
      "Tanah Lot Temple",
      "Uluwatu Temple",
      "Tegallalang Rice Terraces",
      "Kuta Beach",
    ],
  },
  {
    id: "dest-5",
    name: "Rome",
    image: "/placeholder.svg?height=400&width=600",
    propertyCount: 203,
    country: "Italy",
    description:
      "Step back in time in the Eternal City, where ancient ruins, artistic masterpieces, and culinary delights await around every corner.",
    attractions: ["Colosseum", "Vatican Museums", "Trevi Fountain", "Roman Forum", "Pantheon"],
  },
  {
    id: "dest-6",
    name: "Barcelona",
    image: "/placeholder.svg?height=400&width=600",
    propertyCount: 178,
    country: "Spain",
    description:
      "Enjoy the perfect blend of beach, architecture, and vibrant street life in this captivating Mediterranean city.",
    attractions: ["Sagrada Familia", "Park Güell", "La Rambla", "Casa Batlló", "Gothic Quarter"],
  },
]
