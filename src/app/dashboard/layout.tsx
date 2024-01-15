"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { LucideVideo, MenuIcon } from "lucide-react";
import { ModeToggle } from "@/components/modeToggle";

export default function Component() {
  return (
    <div
      key="1"
      className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]"
    >
      <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800">
        <div className="flex h-[60px] lg:block hidden pt-4 items-center border-b px-6">
          <Link
            className="flex ml-4 items-center border-b pb-4 text-medium gap-2 font-semibold 1g:block"
            href="#"
          >
            <span className="">Dev Live Stream</span>
          </Link>
        </div>
        <nav className="flex hidden lg:block items-start space-y-2 mt-8 px-4 text-sm font-medium">
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-700 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <HomeIcon className="h-4 w-4" />
            Home
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
            href="#"
          >
            <LucideVideo className="h-4 w-4" />
            Live Streams
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <CalendarIcon className="h-4 w-4" />
            Schedule
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <UsersIcon className="h-4 w-4" />
            Subscribers
          </Link>
          <Link
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            href="#"
          >
            <LineChartIcon className="h-4 w-4" />
            Analytics
          </Link>
        </nav>
      </div>

      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" href="#">
            <span className="sr-only">Home</span>
          </Link>
          {/* Mobile view */}
          <div className="w-full flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button className="lg:hidden" size="icon" variant="outline">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex mr-8 mb-8">
                  <Link
                    className="flex items-center gap-2 font-semibold"
                    href="#"
                  >
                    <span className="">Dev Live Stream</span>
                  </Link>
                </div>
                <nav className="grid items-start space-y-2 px-4 text-sm font-medium">
                  <Link
                    className="flex items-center border-b pb-4 text-medium gap-2 rounded-lg px-1 py-2 text-gray-700 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <HomeIcon className="h-4 w-4" />
                    Home
                  </Link>
                  <Link
                    className="flex items-center border-b pb-4 text-medium gap-2 rounded-lg px-1 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                    href="#"
                  >
                    <LucideVideo className="h-4 w-4" />
                    Live Streams
                  </Link>
                  <Link
                    className="flex items-center border-b pb-4 text-medium gap-2 rounded-lg px-1 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <CalendarIcon className="h-4 w-4" />
                    Schedule
                  </Link>
                  <Link
                    className="flex items-center border-b pb-4 text-medium gap-2 rounded-lg px-1 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <UsersIcon className="h-4 w-4" />
                    Subscribers
                  </Link>
                  <Link
                    className="flex items-center border-b pb-4 text-medium gap-2 rounded-lg px-1 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                    href="#"
                  >
                    <LineChartIcon className="h-4 w-4" />
                    Analytics
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
            <form className="flex-1">
              <div className="relative">
                <SearchIcon className="absolute left-4 top-3 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full border-2 ml-2 bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search streams"
                  type="search"
                />
              </div>
            </form>
          </div>
          {/* <ModeToggle /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
                size="icon"
                variant="ghost"
              >
                <Image
                  alt="Avatar"
                  className="rounded-full"
                  height="32"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  width="32"
                />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="flex flex-col md:grid md:grid-cols-6 gap-6">
            <div className="md:col-span-4 lg:col-span-3 xl:col-span-4 flex flex-col gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Live Streams</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2 border-b pb-4">
                      <Label htmlFor="stream-1">John Doe</Label>
                      <video
                        autoPlay={true}
                        className="w-full max-w-3xl aspect-video rounded-xl bg-muted"
                        controls
                        src="/coding.mp4"
                      />
                      <div className="flex items-center max-w-3xl justify-between">
                        <div className="flex items-center justify-center gap-2">
                          <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>500 viewers</span>
                        </div>
                        <Button>Join</Button>
                      </div>
                    </div>
                    <div className="space-y-2 border-b pb-4">
                      <Label htmlFor="stream-1">Jane doe</Label>
                      <video
                        autoPlay={true}
                        className="w-full max-w-3xl aspect-video rounded-xl bg-muted"
                        controls
                        src="/coding.mp4"
                      />
                      <div className="flex items-center max-w-3xl justify-between">
                        <div className="flex items-center justify-center gap-2">
                          <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>500 viewers</span>
                        </div>
                        <Button>Join</Button>
                      </div>
                    </div>
                    <div className="space-y-2 border-b pb-4">
                      <Label htmlFor="stream-1">Jim Doe</Label>
                      <video
                        autoPlay={true}
                        className="w-full max-w-3xl aspect-video rounded-xl bg-muted"
                        controls
                        src="/coding.mp4"
                      />
                      <div className="flex items-center max-w-3xl justify-between">
                        <div className="flex items-center justify-center gap-2">
                          <UsersIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span>500 viewers</span>
                        </div>
                        <Button>Join</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2 lg:col-span-3 xl:col-span-2 flex flex-col gap-6">
              <Card>
                <div>
                  <CardHeader className="flex flex-row items-center space-y-0">
                    <CardTitle>User Profile</CardTitle>
                    <Button className="ml-auto" variant="secondary">
                      Edit
                    </Button>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="grid gap-1">
                      <Link className="text-blue-600 underline" href="#">
                        John Doe
                      </Link>
                      <div>23 total streams</div>
                    </div>
                  </CardContent>
                </div>
                <Separator />
                <div>
                  <CardHeader>
                    <CardTitle>Badges and Achievements</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <div className="grid gap-1">
                      <div>Streamer of the Month</div>
                      <div>Top Coder</div>
                      <div>Community Leader</div>
                    </div>
                  </CardContent>
                </div>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Schedule a Live Stream</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="stream-title">Stream Title</Label>
                      <Input
                        id="stream-title"
                        placeholder="Enter stream title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="stream-date">Stream Date</Label>
                      <Input id="stream-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="stream-time">Stream Time</Label>
                      <Input id="stream-time" type="time" />
                    </div>
                    <Button>Schedule Stream</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function ArrowLeftIcon(props: any) {
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
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}

function BellIcon(props: any) {
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
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarIcon(props: any) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function CameraIcon(props: any) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChartIcon(props: any) {
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
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
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
  );
}
