"use client"

import { BaggageClaim, BarChart4, Cable, ChevronLeft, Files, Home, ShoppingBag, ShoppingBagIcon, ShoppingCart } from "lucide-react"
import Link from "next/link"
import React from "react"
import SidebarDropdownLink from "../../components/dashboard/SidebarDropdownLink";
import { usePathname } from 'next/navigation'

export default function Sidebar (){

  const inventoryLink = [
    {
      title: 'Items',
      path: '/dashboard/inventory/items/new'
    },
    {
      title: 'Item Groups',
      path: '/dashboard/inventory/item-groups'
    }, 
    {
      title: 'Categories',
      path: '/dashboard/inventory/categories/new'
    },
    {
      title: 'Brands',
      path: '/dashboard/inventory/brands/new'
    },
    {
      title: 'Units',
      path: '/dashboard/inventory/units/new'
    },
    {
      title: 'Warehouse',
      path: '/dashboard/inventory/warehouse/new'
    },
    {
      title: 'Inventory Adjustment',
      path: '/dashboard/inventory/adjustments'
    },
  ]

  const salesLink = [
    {
      title: 'Customers',
      path: '/dashboard/sales/customers'
    },
    {
      title: 'Retainer Invoices',
      path: '/dashboard/sales/retainer-invoices'
    },
    {
      title: 'Sales Orders',
      path: '/dashboard/sales/orders'
    },
    {
      title: 'Packages',
      path: '/dashboard/sales/packages'
    },
    {
      title: 'Shipments',
      path: '/dashboard/sales/shipments'
    },
    {
      title: 'Invoices',
      path: '/dashboard/sales/invoices'
    },
    {
      title: 'Received Payments',
      path: '/dashboard/sales/received-payments'
    },
    {
      title: 'Sales Returns',
      path: '/dashboard/sales/returns'
    },
    {
      title: 'Credit Notes',
      path: '/dashboard/sales/credit-notes'
    },
  ]

  const pathname = usePathname()

  const getLinkClassName = (path) => {
    var navLinkClasses =     `flex items-center space-x-2 py-2 px-2 my-2 text-sm ${
      pathname === path ? "bg-blue-500 text-white rounded-md" : ""
    }`;

    return navLinkClasses;
  }

  return (
    <div className="w-60 h-screen bg-sidebar text-slate-50 site-sidebar">
      <div className="flex flex-col justify-between h-full">
        <div>
          {/* Top Part */}
          <div className="flex flex-col">
            <Link href="#">
              <div className="flex space-x-2 items-center bg-slate-900 py-4 px-2">
                <ShoppingCart className="w-6 h-6" />
                <span className="font-semibold text-xl">Inventory</span>
              </div>
            </Link>
          </div>

          {/* Links */}
          <nav className="flex flex-col px-2">
            <Link href="/dashboard/home/overview">
              <div className={getLinkClassName("/dashboard/home/overview")}>
                <Home className="w-4 h-4" />
                <span>Home</span>
              </div>
            </Link>

            <SidebarDropdownLink 
              items={inventoryLink} 
              title="Inventory"
              icon={BaggageClaim}
            />

            <SidebarDropdownLink 
              items={salesLink} 
              title="Sales"
              icon={ShoppingBag}            
            />

            <Link href="/dashboard/purchases">
              <div className={getLinkClassName("/dashboard/purchases")}>
                <ShoppingBagIcon className="w-4 h-4" />
                <span>Purchases</span>
              </div>
            </Link>

            <Link href="/dashboard/integrations">
              <div className={getLinkClassName("/dashboard/integrations")}>
                <Cable className="w-4 h-4" />
                <span>Integrations</span>
              </div>
            </Link>

            <Link href="/dashboard/reports">
              <div className={getLinkClassName("/dashboard/reports")}>
                <BarChart4 className="w-4 h-4" />
                <span>Reports</span>
              </div>
            </Link>

            <Link href="/dashboard/documents">
              <div className={getLinkClassName("/dashboard/documents")}>
                <Files className="w-4 h-4" />
                <span>Documents</span>
              </div>
            </Link>
          </nav>
        </div>

        {/* Button */}
        <div className="collapse-expand">
          <button className="bg-sidebar py-4 px-2">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Subscript Card */}
        {/* Footer */}
      </div>
    </div>
  )
}