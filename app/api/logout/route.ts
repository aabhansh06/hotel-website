import { NextResponse } from 'next/server'

export async function POST() {
  // Clear any session cookies or tokens here if needed
  const response = NextResponse.json({ success: true })
  
  // Clear the auth token cookie
  response.cookies.delete('authToken')
  
  return response
} 