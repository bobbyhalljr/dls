'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { ResponsiveLine } from "@nivo/line"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsivePie } from "@nivo/pie"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import Image from "next/image"

export default function Component() {
  return (
    <div key="1" className="flex flex-col w-full min-h-screen">
     
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-4">
          <form className="w-full">
            <Input className="bg-white border-2 block w-full dark:bg-gray-950" placeholder="Search livestreams..." />
            <Button className="sr-only" type="submit">
              Submit
            </Button>
          </form>
          <div className="flex">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button variant="outline">Filter</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup defaultValue="team">
                    <DropdownMenuRadioItem value="team">Team</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="project">Project</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <Button className="ml-4">
                Add New Livestream
            </Button>
            <Button className="ml-4" variant="secondary">
                Create Challenge
            </Button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <PlayIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Team Alpha</CardTitle>
                <CardDescription>Project X</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Live Coding Session</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">John Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">3h ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <PlayIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Team Beta</CardTitle>
                <CardDescription>Project Y</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Live Debugging Session</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">Jane Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <PlayIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Team Gamma</CardTitle>
                <CardDescription>Project Z</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Live Review Session</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">Alex Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Team Challenges</h2>
          <Button className="ml-auto" variant="outline">
            View All
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FlagIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Code Challenge</CardTitle>
                <CardDescription>Team Alpha</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Ongoing</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">5 Participants</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FlagIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Debugging Challenge</CardTitle>
                <CardDescription>Team Beta</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Completed</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">7 Participants</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <FlagIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Review Challenge</CardTitle>
                <CardDescription>Team Gamma</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Ongoing</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">3 Participants</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Collaborative Coding Sessions</h2>
          <Button className="ml-auto" variant="outline">
            View All
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CodeIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Team Alpha</CardTitle>
                <CardDescription>Project X</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Live Coding Session</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">John Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">3h ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CodeIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Team Beta</CardTitle>
                <CardDescription>Project Y</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Live Debugging Session</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">Jane Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">1 day ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CodeIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Team Gamma</CardTitle>
                <CardDescription>Project Z</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Live Review Session</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UserIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">Alex Doe</span>
                </div>
                <div className="flex items-center gap-1">
                  <ClockIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">2 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Team Analytics Overview</h2>
          <Button className="ml-auto" variant="outline">
            View All
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Livestream Views</CardTitle>
              <CardDescription>Total views for all livestreams</CardDescription>
            </CardHeader>
            <CardContent>
              <LineChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Livestream Likes</CardTitle>
              <CardDescription>Total likes for all livestreams</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Livestream Comments</CardTitle>
              <CardDescription>Total comments for all livestreams</CardDescription>
            </CardHeader>
            <CardContent>
              <LabelledpieChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Team Achievements</CardTitle>
              <CardDescription>Total achievements for all livestreams</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[9/4]" />
            </CardContent>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Team Members</h2>
          <Button className="ml-auto" variant="outline">
            View All
          </Button>
        </div>
        <div className="max-w-6xl w-full mx-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Contributions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>120</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Doe</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>110</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Alex Doe</TableCell>
                <TableCell>Developer</TableCell>
                <TableCell>100</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </main>
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


function ClockIcon(props: any) {
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
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CodeIcon(props: any) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function FlagIcon(props: any) {
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
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  )
}


function LabelledpieChart(props: any) {
  return (
    <div {...props}>
      <ResponsivePie
        data={[
          { id: "Jan", value: 111 },
          { id: "Feb", value: 157 },
          { id: "Mar", value: 129 },
          { id: "Apr", value: 150 },
          { id: "May", value: 119 },
          { id: "Jun", value: 72 },
        ]}
        sortByValue
        margin={{ top: 30, right: 50, bottom: 30, left: 50 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={2}
        borderWidth={1}
        arcLinkLabelsThickness={1}
        enableArcLabels={false}
        colors={["#2563eb"]}
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
        }}
        role="application"
      />
    </div>
  )
}


function LineChart(props: any) {
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
        }}
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


function UserIcon(props: any) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
