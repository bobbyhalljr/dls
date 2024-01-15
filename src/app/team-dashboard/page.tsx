'use client'
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { CommandInput, CommandEmpty, CommandItem, CommandGroup, CommandList, Command } from "@/components/ui/command"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { ResponsiveBar } from "@nivo/bar"

export default function Component() {
  return (
    <div key="1" className="flex h-screen bg-gray-white dark:bg-gray-800">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Creation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-xl font-bold">Create Your Team</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Define your team details, such as team name and description. Especially beneficial for Pro and Team
                  subscribers.
                </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Create Team</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Creating a Team</DialogTitle>
                        <DialogDescription>Follow the steps to create your team.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="team-name">
                            Team Name
                          </Label>
                          <Input className="col-span-3" id="team-name" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="team-description">
                            Team Description
                          </Label>
                          <Input className="col-span-3" id="team-description" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="team-type">
                            Team Type
                          </Label>
                          <Select>
                            <SelectTrigger className="w-[180px]">
                              <SelectValue placeholder="Select Type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="public">Public</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="team-category">
                            Team Category
                          </Label>
                          <Input className="col-span-3" id="team-category" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="team-logo">
                            Team Logo
                          </Label>
                          <Input className="col-span-3" id="team-logo" type="file" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="communication-channels">
                            Communication Channels
                          </Label>
                          <Input className="col-span-3" id="communication-channels" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="collaboration-tools">
                            Collaboration Tools
                          </Label>
                          <Input className="col-span-3" id="collaboration-tools" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="joining-requirements">
                            Joining Requirements
                          </Label>
                          <Input className="col-span-3" id="joining-requirements" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="additional-settings">
                            Additional Settings
                          </Label>
                          <Input className="col-span-3" id="additional-settings" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label className="text-right" htmlFor="team-leader">
                            Team Leader
                          </Label>
                          <Command className="col-span-3">
                            <CommandInput placeholder="Search user..." />
                            <CommandList>
                              <CommandEmpty>No user found.</CommandEmpty>
                              <CommandGroup heading="Users">
                                <CommandItem>
                                  <div>
                                    <div>User 1</div>
                                    <div>User 2</div>
                                    <div>User 3</div>
                                    <div>User 4</div>
                                  </div>
                                </CommandItem>
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit">Save changes</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Inviting Members</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage alt="User 1" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>U1</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <p className="font-medium">Invite Members</p>
                    <p>
                      Team owners can invite other users to join their team and specify roles within the team (e.g.,
                      Admin, Member).
                    </p>
                    <Button className="mt-2" variant="outline">
                      Invite
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Collaborative Streams Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-xl font-bold">Manage Collaborative Streams</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Allows team members to create collaborative streams where multiple developers can contribute
                  simultaneously. Supports real-time editing, code sharing, and collaborative problem-solving during
                  live streams.
                </p>
                <Button className="mt-2" variant="outline">
                  Manage Streams
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Team Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-xl font-bold">Manage Team Settings</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Enables team administrators to manage settings related to the collaboration dashboard. Options include
                  inviting new members, adjusting permissions, and configuring team-specific preferences.
                </p>
                <Button className="mt-2" variant="outline">
                  Manage Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Member Management</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-xl font-bold">Manage Team Members</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Provides a comprehensive view of team members, their roles, and contributions. Allows administrators
                  to add, remove, or modify team members and their permissions.
                </p>
                <Button className="mt-2" variant="outline">
                  Manage Members
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Overview of Collaborative Streams</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <h2 className="text-xl font-bold">Collaborative Streams Overview</h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  Displays a list of ongoing collaborative streams with details such as participants, status, and
                  topics. Allows team members to join or leave collaborative streams based on their interests or
                  expertise.
                </p>
                <Button className="mt-2" variant="outline">
                  View Streams
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Team Analytics</CardTitle>
            </CardHeader>
            <CardContent>
              <BarChart className="aspect-[9/4]" />
              <div className="grid gap-4 mt-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium">Total Viewers</p>
                  <p className="text-gray-500 dark:text-gray-400">1,234</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Viewer Info</p>
                  <p className="text-gray-500 dark:text-gray-400">Most viewers are from North America</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">Average Watch Time</p>
                  <p className="text-gray-500 dark:text-gray-400">15 minutes</p>
                </div>
              </div>
            </CardContent>
          </Card>
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
