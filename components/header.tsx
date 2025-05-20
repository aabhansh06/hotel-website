import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { UserNav } from "@/components/user-nav"
import { Search, Bed, MapPin } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <MobileNav />
          <Link href="/" className="flex items-center gap-2">
            <Bed className="h-6 w-6" />
            <span className="text-xl font-bold">StayEase</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/hotels" className="text-sm font-medium flex items-center gap-1">
            <Search className="h-4 w-4" />
            Find Hotels
          </Link>
          <Link href="/destinations" className="text-sm font-medium flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Destinations
          </Link>
          <Link href="/deals" className="text-sm font-medium">
            Deals
          </Link>
          <Link href="/about" className="text-sm font-medium">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
