import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import connectDB from '@/lib/mongodb'
import Booking from '@/models/Booking'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.id) {
      return new NextResponse(
        JSON.stringify({ error: 'Unauthorized' }),
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    }

    try {
      await connectDB()
    } catch (error) {
      console.error('Database connection error:', error)
      return new NextResponse(
        JSON.stringify({ error: 'Database connection error' }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    }

    try {
      const bookings = await Booking.find({ userId: session.user.id })
        .populate('hotelId')
        .sort({ createdAt: -1 })

      return new NextResponse(
        JSON.stringify(bookings),
        { 
          status: 200,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    } catch (error) {
      console.error('Error fetching bookings:', error)
      return new NextResponse(
        JSON.stringify({ error: 'Error fetching bookings' }),
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    }
  } catch (error) {
    console.error('Session error:', error)
    return new NextResponse(
      JSON.stringify({ error: 'Session error' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        }
      }
    )
  }
}

export async function POST(req: Request) {
  try {
    // Connect to database first
    await connectDB()

    // Check authentication
    const session = await getServerSession(authOptions)
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Please sign in to continue' },
        { 
          status: 401,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    }

    // Parse request body
    let body
    try {
      body = await req.json()
    } catch (error) {
      return NextResponse.json(
        { error: 'Invalid request body', message: 'Please provide valid JSON data' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    }

    const { hotelId, roomId, checkIn, checkOut, guests, rooms, totalPrice, guestInfo } = body

    // Validate required fields
    if (!hotelId || !roomId || !checkIn || !checkOut || !guests || !rooms || !totalPrice || !guestInfo) {
      return NextResponse.json(
        { error: 'Missing required fields', message: 'Please fill in all required fields' },
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    }

    // Create booking
    try {
      const booking = await Booking.create({
        userId: session.user.id,
        hotelId,
        roomId,
        checkIn: new Date(checkIn),
        checkOut: new Date(checkOut),
        guests,
        rooms,
        totalPrice,
        guestInfo,
        status: 'confirmed'
      })

      // Populate hotel details
      const populatedBooking = await booking.populate('hotelId')

      return NextResponse.json(populatedBooking, { 
        status: 201,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        }
      })
    } catch (error) {
      console.error('Error creating booking:', error)
      return NextResponse.json(
        { error: 'Error creating booking', message: 'Failed to create booking. Please try again.' },
        { 
          status: 500,
          headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store, no-cache, must-revalidate'
          }
        }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Server error', message: 'An unexpected error occurred. Please try again.' },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store, no-cache, must-revalidate'
        }
      }
    )
  }
} 