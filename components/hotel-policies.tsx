import { Card, CardContent } from "@/components/ui/card"
import { Clock, Calendar, CreditCard, Users, CigaretteIcon as Smoking, Dog } from "lucide-react"
import type { Policies } from "@/types"

interface HotelPoliciesProps {
  policies: Policies
}

export function HotelPolicies({ policies }: HotelPoliciesProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Check-in & Check-out</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Check-in time</span>
              <span className="font-medium">{policies.checkIn}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Check-out time</span>
              <span className="font-medium">{policies.checkOut}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Early check-in</span>
              <span className="font-medium">{policies.earlyCheckIn || "Subject to availability"}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Late check-out</span>
              <span className="font-medium">{policies.lateCheckOut || "Subject to availability"}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Cancellation Policy</h3>
          </div>
          <p className="mb-4">{policies.cancellation}</p>
          <ul className="space-y-2 text-sm">
            {policies.cancellationDetails?.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <CreditCard className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">Payment Information</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-muted-foreground">Accepted payment methods</span>
              <span className="font-medium">{policies.paymentMethods.join(", ")}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Deposit required</span>
              <span className="font-medium">{policies.deposit ? "Yes" : "No"}</span>
            </li>
            <li className="flex justify-between">
              <span className="text-muted-foreground">Taxes</span>
              <span className="font-medium">{policies.taxes}</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-semibold">House Rules</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <Smoking className="h-5 w-5 text-muted-foreground" />
              <div>
                <span className="font-medium">Smoking Policy</span>
                <p className="text-sm text-muted-foreground">{policies.smoking}</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Dog className="h-5 w-5 text-muted-foreground" />
              <div>
                <span className="font-medium">Pet Policy</span>
                <p className="text-sm text-muted-foreground">{policies.pets}</p>
              </div>
            </li>
            {policies.additionalRules?.map((rule, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
