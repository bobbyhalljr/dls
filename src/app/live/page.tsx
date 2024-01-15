'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CommandInput, CommandEmpty, CommandItem, CommandGroup, CommandList, Command } from "@/components/ui/command"
import Link from "next/link"
import Image from "next/image"

export default function Component() {
  return (
    <div key="1" className="grid grid-cols-1 pt-4 mx-4 lg:mx-16 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="rounded-xl overflow-hidden">
          <span className="w-full aspect-video rounded-md bg-muted" />
        </div>
        <div className="py-2 grid gap-2">
          <h1 className="text-xl font-semibold line-clamp-2">
            Live Coding Session: Building a Full Stack App with React and Node.js
          </h1>
          <div className="py-2 grid gap-2">
            <video controls src='/coding.mp4' className="w-full aspect-video rounded-md bg-muted" />
           
          </div>
          <div className="flex gap-3 border-b pb-2 border-t pt-2 items-center">
              <Button
                className="rounded-xl p-2 border border-gray-200 w-10 h-10 dark:border-gray-800"
                size="icon"
                variant="outline"
              >
                <HeartIcon className="h-6 w-6" />
                <span className="sr-only">Like</span>
              </Button>
              <Button
                className="rounded-xl p-2 border border-gray-200 w-10 h-10 dark:border-gray-800"
                size="icon"
                variant="outline"
              >
                <UserIcon className="h-6 w-6" />
                <span className="sr-only">Follow</span>
              </Button>
              <Button
                className="px-12"
              >
                Follow
                <span className="sr-only">Share</span>
              </Button>
            <div className="flex justify-center items-center">
                <EyeIcon className="h-6 ml-4 text-gray-600 mr-2 w-4" /> <p className="text-sm text-gray-600">4k viewers</p>
            </div>
            </div>
          <p className="text-gray-500 dark:text-gray-400">
            Join us for a live coding session where we will be building a full stack application using React and
            Node.js. We will cover everything from setting up the development environment to deploying the application.
          </p>
          <div className="flex pb-8 items-center gap-2">
            <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">#React</span>
            <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">#Node.js</span>
            <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">#FullStack</span>
          </div>
        </div>
        
        <div className="bg-blue-100 mx-auto max-w-3xl rounded-lg p-4 text-sm dark:bg-gray-800">
          <p>Q&A: What is your preferred state management library for React applications?</p>
          <div className="mt-2 space-y-2 grid gap-2">
            <Button className="text-sm" variant="outline">
              Redux
            </Button>
            <Button className="text-sm" variant="outline">
              MobX
            </Button>
            <Button className="text-sm" variant="outline">
              Zustand
            </Button>
            <Button className="text-sm" variant="outline">
              React Query
            </Button>
          </div>
        </div>

        <div className="mt-4 max-w-3xl  p-4  rounded-2xl border-2 mx-auto pb-8">
          <h2 className="text-lg font-semibold">Chat</h2>
          <div className="border rounded-lg p-4 mt-2 h-60 overflow-auto" />
          <form className="mt-2 flex items-center gap-2">
            <Input className="flex-grow" placeholder="Type your message..." type="text" />
            <Button className="flex-none" type="submit">
              Send
            </Button>
            <Popover>
              <PopoverTrigger asChild>
                <Button className="rounded-full" size="icon" variant="outline">
                  <SmileIcon className="w-4 h-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Add a reaction</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Choose an emoji to react with.</p>
                  </div>
                  <div className="grid space-y-2 gap-2">
                    <Button className="w-full" variant="outline">
                      <HeartIcon className="mr-2 h-4 w-4" />
                      Love
                    </Button>
                    <Button className="w-full" variant="outline">
                      <ThumbsUpIcon className="mr-2 h-4 w-4" />
                      Like
                    </Button>
                    <Button className="w-full" variant="outline">
                      <LaughIcon className="mr-2 h-4 w-4" />
                      Haha
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AnnoyedIcon className="mr-2 h-4 w-4" />
                      Wow
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AngryIcon className="mr-2 h-4 w-4" />
                      Sad
                    </Button>
                    <Button className="w-full" variant="outline">
                      <AngryIcon className="mr-2 h-4 w-4" />
                      Angry
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </form>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-2">
          <Image
            alt="Avatar"
            className="rounded-full"
            height="50"
            src="/placeholder.svg"
            style={{
              aspectRatio: "50/50",
              objectFit: "cover",
            }}
            width="50"
          />
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer</p>
          </div>
        </div>
        <div className="mt-4 grid gap-2">
          <div className="flex items-center gap-2">
            <TrophyIcon className="h-6 w-6 text-yellow-500" />
            <span>Top Contributor</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckIcon className="h-6 w-6 text-green-500" />
            <span>Verified</span>
          </div>
        </div>
        <div className="mt-4 grid pb-8 gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Share code snippet</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Interactive Code Snippets</DialogTitle>
                <DialogDescription>Share and discuss code snippets interactively</DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="title">
                    Title
                  </Label>
                  <Input className="col-span-3" id="title" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="description">
                    Description
                  </Label>
                  <Input className="col-span-3" id="description" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-right" htmlFor="code">
                    Code Snippet
                  </Label>
                  <Textarea className="col-span-3" id="code" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Code Editor</h3>
          <div className="border rounded-lg p-4 mt-2 h-60 overflow-auto">
            <p className="text-sm text-gray-500 dark:text-gray-400">Enter your code here...</p>
          </div>
        </div>
        <div className="mt-4 pb-8">
          <h3 className="font-semibold">Invite Users</h3>
          <Command className="rounded-lg border border-gray-200 shadow-md dark:border-gray-800">
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Invite User 1</span>
                </CommandItem>
                <CommandItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Invite User 2</span>
                </CommandItem>
                <CommandItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Invite User 3</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <div className="mt-4 pb-8">
          <h3 className="font-semibold">Streamer Information</h3>
          <div className="flex items-center gap-2 mt-2">
            <Image
              alt="Streamer Avatar"
              className="rounded-full object-cover"
              height={50}
              src="/placeholder.svg"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
              }}
              width={50}
            />
            <div>
              <h4 className="font-semibold">John Doe</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">Full Stack Developer | Live Coding Enthusiast</p>
            </div>
          </div>
          <Button className="mt-2">Follow</Button>
          <h3 className="font-semibold mt-4">Suggested Live Streams</h3>
          <div className="grid gap-2 mt-2">
            <Link className="group border-2 p-4 rounded-2xl m-2 flex items-center gap-2" href="#">
              <video
                className="rounded-md object-cover"
                height={75}
                src="/coding.mp4"
                style={{
                  aspectRatio: "150/75",
                  objectFit: "cover",
                }}
                width={150}
              />
              <div className="text-sm font-medium group-hover:underline">
                Building a Full Stack App with React and Node.js
              </div>
            </Link>
            <Link className="group flex items-center gap-2" href="#">
              <Image
                alt="Live Stream Thumbnail"
                className="rounded-md object-cover"
                height={50}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width={50}
              />
              <div className="text-sm font-medium group-hover:underline">Exploring the New Features of React 18</div>
            </Link>
            <Link className="group flex items-center gap-2" href="#">
              <Image
                alt="Live Stream Thumbnail"
                className="rounded-md object-cover"
                height={50}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                }}
                width={50}
              />
              <div className="text-sm font-medium group-hover:underline">Advanced JavaScript Concepts: A Deep Dive</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function AngryIcon(props: any) {
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
      <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
      <path d="M7.5 8 10 9" />
      <path d="m14 9 2.5-1" />
      <path d="M9 10h0" />
      <path d="M15 10h0" />
    </svg>
  )
}


function AnnoyedIcon(props: any) {
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
      <path d="M8 15h8" />
      <path d="M8 9h2" />
      <path d="M14 9h2" />
    </svg>
  )
}


function CheckIcon(props: any) {
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
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function HeartIcon(props: any) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function LaughIcon(props: any) {
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
      <path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function ShareIcon(props: any) {
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
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  )
}


function SmileIcon(props: any) {
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
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function ThumbsUpIcon(props: any) {
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
      <path d="M7 10v12" />
      <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
    </svg>
  )
}


function TrophyIcon(props: any) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
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
function EyeIcon(props: any) {
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
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  }
