import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="bg-blue-50 rounded-xl p-8">
      <div className="max-w-3xl mx-auto text-center">
        <Mail className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Subscribe to Our Newsletter</h2>
        <p className="text-muted-foreground mb-6">Get exclusive deals, travel tips, and more delivered to your inbox</p>

        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input type="email" placeholder="Enter your email" className="flex-1" required />
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  )
}
