import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div>
          <h2 className="text-lg font-medium">Current balance</h2>
          <p className="text-3xl font-bold">₹30,000</p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Month's balance</h2>
          <p className="text-3xl font-bold">₹27,074</p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Month's expense</h2>
          <p className="text-3xl font-bold">₹2,926</p>
        </div>
      </div>
      <div className="mb-6">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="investments">Investments</TabsTrigger>
            <TabsTrigger value="loan">Loan</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Top 5 expenses</h3>
            <div className="flex items-center space-x-2">
              <span>Sort By</span>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Month</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Card className="space-y-4">
            <div className="flex justify-between p-4 border-b">
              <div>
                <p>Outside Food</p>
                <p className="text-xl font-bold">₹368</p>
              </div>
              <div>
                <p>Frequency</p>
                <p className="text-xl font-bold">x7</p>
              </div>
            </div>
            <div className="flex justify-between p-4 border-b">
              <div>
                <p>To mom</p>
                <p className="text-xl font-bold">₹5,000</p>
              </div>
              <div>
                <p>Frequency</p>
                <p className="text-xl font-bold">x7</p>
              </div>
            </div>
            <div className="flex justify-between p-4 border-b">
              <div>
                <p>Amazon Parcels</p>
                <p className="text-xl font-bold">₹1,000</p>
              </div>
              <div>
                <p>Frequency</p>
                <p className="text-xl font-bold">x7</p>
              </div>
            </div>
            <div className="flex justify-between p-4 border-b">
              <div>
                <p>Blinkit</p>
                <p className="text-xl font-bold">₹1,000</p>
              </div>
              <div>
                <p>Frequency</p>
                <p className="text-xl font-bold">x7</p>
              </div>
            </div>
            <div className="flex justify-between p-4">
              <div>
                <p>Education Loan</p>
                <p className="text-xl font-bold">₹8,000</p>
              </div>
              <div>
                <p>Frequency</p>
                <p className="text-xl font-bold">x7</p>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-4">Income Sources</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-md">
              <div>
                <p>Primary (Job)</p>
                <p className="text-xl font-bold">₹30,000</p>
              </div>
              <Button variant="outline" size="icon">
                <FilePenIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-md">
              <div>
                <p>Investments</p>
                <p className="text-xl font-bold">₹7,000</p>
              </div>
              <Button variant="outline" size="icon">
                <FilePenIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-md">
              <div>
                <p>Money Lent</p>
                <p className="text-xl font-bold">₹7,000</p>
              </div>
              <Button variant="outline" size="icon">
                <FilePenIcon className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-md">
              <div>
                <p>Loan</p>
                <p className="text-xl font-bold">₹1,90,000</p>
              </div>
              <Button variant="outline" size="icon">
                <FilePenIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FilePenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  )
}
 

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}