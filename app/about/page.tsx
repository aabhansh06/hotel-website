"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, Globe, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const team = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=60",
    bio: "With over 15 years of experience in the hospitality industry, John leads our company with vision and passion."
  },
  {
    name: "Sarah Johnson",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=60",
    bio: "Sarah ensures smooth operations and exceptional customer service across all our platforms."
  },
  {
    name: "Michael Chen",
    role: "Technology Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=60",
    bio: "Michael leads our technology initiatives, ensuring we stay at the forefront of digital innovation."
  }
]

const stats = [
  {
    icon: Building2,
    value: "500+",
    label: "Partner Hotels"
  },
  {
    icon: Users,
    value: "1M+",
    label: "Happy Customers"
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries"
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience"
  }
]

export default function AboutPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to make hotel booking simple, transparent, and enjoyable for everyone.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6 text-center">
              <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Story Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-muted-foreground mb-4">
            Founded in 2009, we started with a simple idea: to make hotel booking as easy as possible. 
            What began as a small team of passionate travelers has grown into a global platform serving 
            millions of customers worldwide.
          </p>
          <p className="text-muted-foreground mb-6">
            Today, we partner with over 500 hotels across 50+ countries, offering our customers the best 
            selection of accommodations at competitive prices.
          </p>
          <Button asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60"
            alt="Our Team"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-center mb-4">{member.role}</p>
                <p className="text-muted-foreground text-center">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-muted/50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-muted-foreground">
              We put our customers at the heart of everything we do, ensuring their satisfaction is our top priority.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-muted-foreground">
              We constantly innovate to provide the best possible booking experience for our customers.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-muted-foreground">
              We believe in transparent and honest relationships with our customers and partners.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 