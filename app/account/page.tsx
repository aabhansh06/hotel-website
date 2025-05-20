"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { AccountTabs } from "@/components/account-tabs"

export default function AccountPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      </div>
    )
  }

  if (status === "unauthenticated") {
    redirect("/login")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">My Account</h1>
      <AccountTabs user={session?.user} />
    </div>
  )
}
