import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import connectDB from "@/lib/mongodb"
import User from "@/models/User"

export async function PUT(req: Request) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 })
    }

    const body = await req.json()
    const { name, email, phone, address, city, state, zip } = body

    await connectDB()

    const user = await User.findById(session.user.id)
    if (!user) {
      return new NextResponse("User not found", { status: 404 })
    }

    // Update user fields
    user.name = name
    user.email = email
    user.phone = phone
    user.address = address
    user.city = city
    user.state = state
    user.zip = zip

    await user.save()

    return NextResponse.json({
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      city: user.city,
      state: user.state,
      zip: user.zip
    })
  } catch (error) {
    console.error("[PROFILE_UPDATE]", error)
    return new NextResponse("Internal error", { status: 500 })
  }
} 