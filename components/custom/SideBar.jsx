"use client";

import Link from "next/link";
import Image from "next/image";

import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Conversation",
    icon: MessageSquare,
    href: "/conversation",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/image-gen",
  },
  {
    label: "Replicate Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/imageReplicate",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];
export default function SideBar() {
  const pathname = usePathname();
  return (
    <>
      <div className="space-y-4 py-4 flex flex-col h-full bg-primary text-white">
        <div className="px-3 py-2 flex-1">
          <Link
            href="/"
            className=" flex flex-col-reverse md:flex-row md:items-center gap-2 md:gap-3 pl-3 mb-14"
          >
            <div className="relative mx-auto md:mx-0 h-8 w-8 mr-4">
              <Image fill alt="Logo" src="/logo-sass.png" />
            </div>
            {/* TODO name Changeks */}
            <h1 className={cn("text-2xl font-bold")}>SAAS</h1>
          </Link>
          <div className="space-y-1">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                  pathname === route.href
                    ? "text-white bg-white/10"
                    : "text-zinc-400"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon
                    className={cn(
                      "h-8 w-8 mx-auto  md:mx-0 md:h-5 md:w-5 mr-3",
                      route.color
                    )}
                  />
                  <span className="hidden md:flex md:ml-2">{route.label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} /> */}
      </div>
    </>
  );
}
