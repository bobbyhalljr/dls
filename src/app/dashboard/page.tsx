'use client'
import Link from "next/link"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetTitle, SheetDescription, SheetHeader, SheetClose, SheetFooter, SheetContent, Sheet } from "@/components/ui/sheet"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"

export default function Component() {
  return (
    <div key="1" className="flex flex-col h-screen overflow-hidden">
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 p-6 overflow-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Team Dashboard</h1>
          <div className="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader>
                <CardTitle>Total Livestream Views</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-gray-800 dark:text-white">75</p>
                <p className="text-gray-600 dark:text-gray-200">
                  Number of views for livestreams available in the free plan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Unique Viewers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-gray-800 dark:text-white">30</p>
                <p className="text-gray-600 dark:text-gray-200">
                  Count of unique users who watched livestreams on the free plan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Livestream Likes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-semibold text-gray-800 dark:text-white">15</p>
                <p className="text-gray-600 dark:text-gray-200">
                  Number of likes received on livestreams within the free plan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Livestream Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[4/3]" />
                <p className="text-gray-600 dark:text-gray-200">
                  Count of comments made on livestreams accessible with the free plan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Livestream Shares</CardTitle>
              </CardHeader>
              <CardContent>
                <BarChart className="w-full aspect-[4/3]" />
                <p className="text-gray-600 dark:text-gray-200">
                  Number of times users shared livestreams from the free plan.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Popular Free Livestreams</CardTitle>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[4/3]" />
                <p className="text-gray-600 dark:text-gray-200">
                  Ranking of the most popular livestreams accessible for free.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Average Livestream Duration</CardTitle>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[4/3]" />
                <p className="text-gray-600 dark:text-gray-200">
                  Average time users spent watching livestreams in the free plan.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Team Management</h2>
            <div className="grid gap-6 mt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Create a Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200">
                    Insert a new record into the teams table when a user creates a new team.
                  </p>
                  {/* <Button> */}
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button>Create Team</Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Create a Team</SheetTitle>
                          <SheetDescription>Fill out the form to create a new team.</SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="teamName">
                              Team Name
                            </Label>
                            <Input className="col-span-3" id="teamName" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="teamDescription">
                              Team Description
                            </Label>
                            <Input className="col-span-3" id="teamDescription" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="teamType">
                              Team Type
                            </Label>
                            <Select>
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="Select" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="public">Public</SelectItem>
                                <SelectItem value="private">Private</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <Label className="text-right" htmlFor="teamCategory">
                              Team Category/Tags
                            </Label>
                            <Input className="col-span-3" id="teamCategory" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <Label className="text-right" htmlFor="teamLogo">
                              Team Logo/Avatar
                            </Label>
                            <Input className="col-span-3" id="teamLogo" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <Label className="text-right" htmlFor="communicationChannels">
                              Preferred Communication Channels
                            </Label>
                            <Input className="col-span-3" id="communicationChannels" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <Label className="text-right" htmlFor="teamRules">
                              Team Rules/Guidelines
                            </Label>
                            <Input className="col-span-3" id="teamRules" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <Label className="text-right" htmlFor="joiningRequirements">
                              Joining Requirements (private)
                            </Label>
                            <Input className="col-span-3" id="joiningRequirements" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <Label className="text-right" htmlFor="collaborationTools">
                              Team Collaboration Tools (Optional)
                            </Label>
                            <Input className="col-span-3" id="collaborationTools" />
                          </div>
                          <div className="grid grid-cols-2 items-center gap-4">
                            <Label className="text-right" htmlFor="teamSize">
                              Team Size Limit (if applicable)
                            </Label>
                            <Input className="col-span-3" id="teamSize" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="teamLeader">
                              Team Leader/Owner
                            </Label>
                            <Input className="col-span-3" id="teamLeader" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="timeZone">
                              Time Zone Preferences (Optional)
                            </Label>
                            <Input className="col-span-3" id="timeZone" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label className="text-right" htmlFor="goals">
                              Goals/Objectives (Optional)
                            </Label>
                            <Input className="col-span-3" id="goals" />
                          </div>
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit">Create Team</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                  {/* </Button> */}
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Join a Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200">
                    When a user wants to join a team, insert a record into the team_members table.
                  </p>
                  <Button className="mt-4">Join Team</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Leave a Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-200">
                    When a team member leaves a team, delete the corresponding record from the team_members table.
                  </p>
                  <Button className="mt-4">Leave Team</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  )
}


function BarChartIcon(props: any) {
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
      <line x1="12" x2="12" y1="20" y2="10" />
      <line x1="18" x2="18" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="16" />
    </svg>
  )
}


function CurvedlineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  )
}


function LayoutDashboardIcon(props: any) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function PlayIcon(props: any) {
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
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  )
}


function SettingsIcon(props: any) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function TextIcon(props: any) {
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
      <path d="M17 6.1H3" />
      <path d="M21 12.1H3" />
      <path d="M15.1 18H3" />
    </svg>
  )
}
