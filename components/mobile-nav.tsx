"use client"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Link from "next/link"
import { useMobile } from "@/hooks/use-mobile"

export function MobileNav() {
  const isMobile = useMobile()

  if (!isMobile) return null

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          <Link href="/" className="text-lg font-medium">
            Home
          </Link>
          <Link href="/hotels" className="text-lg font-medium">
            Find Hotels
          </Link>
          <Link href="/destinations" className="text-lg font-medium">
            Destinations
          </Link>
          <Link href="/deals" className="text-lg font-medium">
            Deals
          </Link>
          <Link href="/about" className="text-lg font-medium">
            About
          </Link>
          <Link href="/account" className="text-lg font-medium">
            My Account
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
