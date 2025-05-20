"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Stay?</h2>
          <p className="text-lg mb-8">
            Start exploring our handpicked selection of hotels and book your next adventure today.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link href="/hotels">Browse Hotels</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Link href="/deals">View Deals</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 