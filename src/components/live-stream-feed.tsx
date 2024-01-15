import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function LiveStreamFeed(){
    return (
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Featured Live Streams</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <VideoIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Live Stream 1</CardTitle>
                <CardDescription>Web Development</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Streamer: John Doe</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">300 viewers</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <VideoIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Live Stream 2</CardTitle>
                <CardDescription>Mobile Development</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Streamer: Jane Doe</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">200 viewers</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <VideoIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Live Stream 3</CardTitle>
                <CardDescription>AI/ML</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Streamer: Alex Doe</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">150 viewers</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Categories</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CodeIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Web Development</CardTitle>
                <CardDescription>Explore Streams</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <SmartphoneIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Mobile Development</CardTitle>
                <CardDescription>Explore Streams</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <CpuIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>AI/ML</CardTitle>
                <CardDescription>Explore Streams</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Followed Developers</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="John Doe" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>John Doe</CardTitle>
                <CardDescription>Web Development</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Jane Doe" src="/placeholder-avatar.jpg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>Jane Doe</CardTitle>
                <CardDescription>Mobile Development</CardDescription>
              </div>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarImage alt="Alex Doe" src="/placeholder-avatar.jpg" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <CardTitle>Alex Doe</CardTitle>
                <CardDescription>AI/ML</CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>
        <div className="max-w-6xl w-full mx-auto flex items-center gap-4">
          <h2 className="text-2xl font-bold">Recommended Streams</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <VideoIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Live Stream 4</CardTitle>
                <CardDescription>Web Development</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Streamer: John Doe</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">300 viewers</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <VideoIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Live Stream 5</CardTitle>
                <CardDescription>Mobile Development</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Streamer: Jane Doe</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">200 viewers</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <VideoIcon className="w-8 h-8" />
              <div className="grid gap-1">
                <CardTitle>Live Stream 6</CardTitle>
                <CardDescription>AI/ML</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <div className="text-sm font-semibold">Streamer: Alex Doe</div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <UsersIcon className="w-4 h-4" />
                  <span className="text-gray-500 dark:text-gray-400">150 viewers</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
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
  
  
  function CpuIcon(props: any) {
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
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M15 2v2" />
        <path d="M15 20v2" />
        <path d="M2 15h2" />
        <path d="M2 9h2" />
        <path d="M20 15h2" />
        <path d="M20 9h2" />
        <path d="M9 2v2" />
        <path d="M9 20v2" />
      </svg>
    )
  }
  
  
  function FrameIcon(props: any) {
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
        <line x1="22" x2="2" y1="6" y2="6" />
        <line x1="22" x2="2" y1="18" y2="18" />
        <line x1="6" x2="6" y1="2" y2="22" />
        <line x1="18" x2="18" y1="2" y2="22" />
      </svg>
    )
  }
  
  
  function SmartphoneIcon(props: any) {
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
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
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
  
  
  function VideoIcon(props: any) {
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
        <path d="m22 8-6 4 6 4V8Z" />
        <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
      </svg>
    )
  }
  