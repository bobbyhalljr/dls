import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function PaymentModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Get started</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Card className="mb-10 p-2 mt-8">
              <CardHeader>
                <CardTitle>Credit Card Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="card-name">Cardholder Name</Label>
                  <Input id="card-name" placeholder="Enter your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="card-number">Card Number</Label>
                  <Input id="card-number" placeholder="Enter your card number" required type="number" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry-date">Expiry Date</Label>
                    <Input id="expiry-date" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV Code</Label>
                    <Input id="cvv" placeholder="CVV" required />
                  </div>
                </div>
              </CardContent>
            </Card>
        <DialogFooter>
          <Button className="w-full my-6" type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
