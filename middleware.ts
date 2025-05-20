import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    // For API routes, return JSON response for unauthorized requests
    if (req.nextUrl.pathname.startsWith('/api/')) {
      const token = req.nextauth.token
      if (!token) {
        return new NextResponse(
          JSON.stringify({ error: 'Unauthorized', message: 'Please sign in to continue' }),
          { 
            status: 401,
            headers: {
              'Content-Type': 'application/json',
              'Cache-Control': 'no-store, no-cache, must-revalidate',
              'Access-Control-Allow-Origin': '*',
              'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
              'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            }
          }
        )
      }
    }
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token
    },
    pages: {
      signIn: "/login",
      error: "/auth/error"
    }
  }
)

export const config = {
  matcher: [
    "/bookings/:path*",
    "/api/bookings/:path*",
    "/api/account/:path*",
    "/payment/:path*"
  ]
} 