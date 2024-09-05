"use client"
import { Building2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeNavbar() {
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Dashboard",
      path: "/dashboard/home/overview"
    },
    {
      title: "Getting Started",
      path: "/dashboard/home/getting-started"
    },
    {
      title: "Announcements",
      path: "/dashboard/home/announcements"
    },
    {
      title: "Recent Updates",
      path: "/dashboard/home/updates"
    },
  ]

  return (
    <div className={`h-32 bg-header bg-slate-50 p-5 border-b border-slate-200 site-homebar`}>
      <div className="flex space-x-3 site-hiddeen">
        <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white">
          <Building2 />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-slate-700">Hello, JB WEBDEVELOPER</p>
          <span className="text-sm text-grey-12">Garat</span>
        </div>
      </div>
    
      <nav className="mt-6 flex space-x-4 ">
          {
            navLinks.map((item, index) => {
              return(
                <Link key={index} href={item.path} className={`${pathname === item.path ? "py-2 border-b-2 border-b-blue-600" : "py-2"}`}>
                  {item.title}
                </Link>
              )
            })
          }
        </nav>
    </div>
  );
}
