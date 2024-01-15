"use client";
import LandingNav from "@/components/landing-navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <LandingNav />

      <main
        key="1"
        className="flex flex-col items-center justify-center min-h-screen py-2"
      >
        <section className="w-full md:max-w-[90%] py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Hero"
                className="mx-auto overflow-hidden rounded-xl object-fit sm:w-full order-last lg:aspect-square"
                height="550"
                src="/hero.gif"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    The complete platform for live streaming
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Stream code, design, and ideas in real time. Collaborate
                    with your team and build innovative products faster.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="py-3 px-6">
                      <Link href='/login'>
                        Start streaming
                      </Link>
                    </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to DevStream
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                The ultimate live streaming platform for developers. Connect, share, and learn from the best in the
                industry.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <Button className="w-full">Sign Up with GitHub</Button>
            </div>
          </div>
        </div>
      </section> */}

        <section className="w-full max-w-6xl mx-auto py-12 md:py-24 lg:py-32 md:p-12 rounded-3xl bg-blue-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="space-y-2 pb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover our unique Features
              </h1>
              <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Our features are designed to enhance your productivity and
                streamline your workflow.
              </p>
            </div>
            <div className="grid gap-6 space-y-4 lg:grid-cols-3 lg:gap-12">
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <VideoIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Livestream Hosting</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Host your coding sessions live with the community.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <CodeIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">
                  Collaborative Coding Tools
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Collaborate with your viewers in real-time.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <UsersIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Team Challenges</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Engage your team with coding challenges.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <UserIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">User Profiles</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Create and customize your user profile.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <TextIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Community Forums</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Engage with the community in our forums.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <EyeIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Livestream Viewer</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Watch live coding sessions from the community.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <BadgeIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Badges and Achievements</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Earn badges and achievements for your contributions.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <PlayIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">
                  Interactive Livestream Previews
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Get a sneak peek of live coding sessions.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <UsersIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Community Challenges</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Participate in community coding challenges.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <TagIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Pricing Tiers</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Choose a pricing tier that fits your needs.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <SettingsIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">
                  Customizable User Preferences
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Customize your user preferences for a personalized experience.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <BellIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">User Notifications</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Stay updated with notifications.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <TagIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Livestream Tags</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Tag your livestreams for easy discovery.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <HeartIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">
                  Livestream Likes and Shares
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Like and share your favorite livestreams.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <VoteIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Livestream Polls</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Participate in livestream polls.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <LockIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Private Team Livestreams</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Host private livestreams for your team.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <StarIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">User Ratings and Reviews</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Rate and review livestreams.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <UsersIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">User Followers/Followings</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Follow other users and gain followers.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <BookmarkIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">User Bookmarks</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Bookmark your favorite livestreams.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <FlagIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">User Reports</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Report inappropriate content.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <HistoryIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">User Activity History</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  View your activity history.
                </p>
              </div>
              <div className="shadow-lg bg-white border-gray-400 p-4 rounded-md">
                <BarChartIcon className="h-6 w-6 mb-2" />
                <h3 className="text-lg font-bold">Analytics Dashboard</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Track your progress with our analytics dashboard.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 mx-auto flex flex-col items-center md:py-24 lg:py-32">
          <div className="container">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl font-bold">How It Works</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Getting started with DevStream is as easy as 1, 2, 3.
              </p>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-6xl font-bold">1</div>
                  <h3 className="text-2xl font-bold">Sign Up</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Create your account using your GitHub profile.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-6xl font-bold">2</div>
                  <h3 className="text-2xl font-bold">Set Up Your Stream</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Customize your stream settings and schedule your first
                    session.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                  <div className="text-6xl font-bold">3</div>
                  <h3 className="text-2xl font-bold">Go Live</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Start streaming and engage with your viewers!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="min-h-screen w-full py-12 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Simple, transparent pricing
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We believe in straightforward pricing. No hidden fees or surprises.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border-2 border-gray-300">
                <div>
                  <h3 className="text-3xl font-bold text-center">Free</h3>
                  <p className="text-gray-500 text-center pt-2 dark:text-gray-400 mb-6">
                    Basic Access for All Developers
                  </p>
                  <div className="mt-4 mb-8 text-center text-zinc-600 dark:text-zinc-400">
                    <span className="text-4xl font-bold">$0</span>/ month
                  </div>
                  <ul className="mt-4 space-y-6">
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Up to 3 private streams
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Basic support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Community access
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Access to live streams
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Comment and engage during live sessions
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Limited analytics insights
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Ad-supported experience
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href='/login'>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
              <div className="relative flex mt-8 md:mt-0 flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border-4 border-purple-500">
                <div className="px-3 py-1 text-medium text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full inline-block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  Popular
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-center">
                    Developer Pro
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-center mb-6">
                    Enhanced Features for Individual Developers
                  </p>
                  <div className="mt-4 mb-8 text-center text-zinc-600 dark:text-zinc-400">
                    <span className="text-4xl font-bold">$9.99</span>/ month
                  </div>
                  <ul className="mt-4 space-y-6">
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Unlimted private streams
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Premium support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Advanced features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Ad-free live streaming experience
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Priority access to new features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Advanced analytics insight
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Customizable profile with badges
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href='/login'>
                    <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col p-6 mt-8 bg-white shadow-lg rounded-lg dark:bg-zinc-850 justify-between border-2 border-gray-300">
                <div>
                  <h3 className="text-2xl font-bold text-center">
                    Team Collaboration
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-center mb-6">
                    Collaborative Features for Teams and Groups
                  </p>
                  <div className="mt-4 mb-8 text-center text-zinc-600 dark:text-zinc-400">
                    <span className="text-4xl font-bold">$19.99</span>/ month
                  </div>
                  <ul className="mt-4 space-y-6">
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Premium support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Ad-free live streaming experience
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Priority access to new features
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Advanced analytics insight
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Collaborative stream creation and management
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Unlimited private team streams
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Team analytics and viewer insights
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Shared access to premium integrations
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="text-white text-xs bg-emerald-400 rounded-full mr-2 p-1" />
                      Customizable team badges
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <Link href='/login'>
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 bg-white md:py-24 lg:py-32">
          <div className="container  mx-auto px-4">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Join the DevStream community today and start streaming!
              </p>
              <Link href='/login' className="w-full max-w-sm">
                <Button variant='secondary' className="w-full max-w-sm">Sign Up with GitHub</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

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
  );
}

function BadgeIcon(props: any) {
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
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

function BookmarkIcon(props: any) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  );
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
  );
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
  );
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
  );
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
  );
}

function HistoryIcon(props: any) {
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
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M12 7v5l4 2" />
    </svg>
  );
}

function LockIcon(props: any) {
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
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
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
  );
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
  );
}

function StarIcon(props: any) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TagIcon(props: any) {
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
      <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
      <path d="M7 7h.01" />
    </svg>
  );
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
  );
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
  );
}

function VoteIcon(props: any) {
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
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  );
}
