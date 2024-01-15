//@ts-nocheck
'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="w-full max-w-4xl mx-auto p-4 md:p-6 lg:p-8 space-y-8">
      <form className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold">Livestream Title and Description</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Enter livestream title" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="description">Description</Label>
              <Textarea className="min-h-[100px]" id="description" placeholder="Enter livestream description" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="tags">Tags</Label>
              <Input id="tags" placeholder="Enter tags" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="category">Category</Label>
              <Select id="category">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="mobile-development">Mobile Development</SelectItem>
                  <SelectItem value="data-science">Data Science</SelectItem>
                  <SelectItem value="machine-learning">Machine Learning</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Livestream Settings</h2>
          <div className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="privacy">Privacy</Label>
              <Select id="privacy">
                <SelectTrigger>
                  <SelectValue placeholder="Select privacy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="public">Public</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="team">Team</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Interactive Features Setup</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="likes" />
              <Label htmlFor="likes">Enable Likes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="comments" />
              <Label htmlFor="comments">Enable Comments</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="polls" />
              <Label htmlFor="polls">Enable Polls</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="qa" />
              <Label htmlFor="qa">Enable Q&A</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="coding-tools" />
              <Label htmlFor="coding-tools">Enable Collaborative Coding Tools</Label>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Livestream Preview</h2>
          <div className="relative aspect-[16/9] bg-gray-200 rounded-lg">
            <p className="absolute inset-0 flex items-center justify-center text-gray-500">Livestream Preview</p>
          </div>
          <Button className="mt-4">Make Final Adjustments</Button>
        </div>
        <div className="flex justify-end">
          <Button>Create Livestream</Button>
        </div>
      </form>
    </main>
  )
}

