import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Here you would typically validate the credentials against your database
    // For demo purposes, we'll use a simple check
    if (email === "demo@example.com" && password === "password") {
      // Create a response with success
      const response = NextResponse.json({ success: true, token: "demo-token" })
      
      // Set the auth token cookie
      response.cookies.set("authToken", "demo-token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7 // 1 week
      })
      
      return response
    }

    // If credentials are invalid
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    )
  }
} 