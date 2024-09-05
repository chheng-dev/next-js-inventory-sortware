import { Boxes, Component, Factory, LayoutGrid, ScrollTextIcon, ShoppingBag, Warehouse } from 'lucide-react';
import Link from 'next/link';

export default function ListItems() {
  const items = [
    {
      title: 'Item',
      icon: LayoutGrid,
      description: 'Create standalone items and services that you buy and sell',
      linkTitle: 'New Item',
      link: '/dashboard/inventory/items/new'
    },
    {
      title: 'Categories',
      icon: Boxes,
      description: 'Bundle different items together and sell them as kits',
      linkTitle: 'New Category',
      link: '/dashboard/inventory/categories/new'
    },
    {
      title: 'Brands',
      icon: ShoppingBag,
      description: 'Tweak your item prices for specific contacts or transactions',
      linkTitle: 'New Brand',
      link: '/dashboard/inventory/brands/new'
    },
    {
      title: 'Warehouse',
      icon: Warehouse,
      description: 'Tweak your item prices for specific contacts or transactions',
      linkTitle: 'New Warehouse',
      link: '/dashboard/inventory/warehouse/new'
    },
    {
      title: 'Units',
      icon: Component,
      description: 'Tweak your item prices for specific contacts or transactions',
      linkTitle: 'New Units Items',
      link: '/dashboard/inventory/units/new'
    },
    {
      title: 'Supplier',
      icon: Factory,
      description: 'Tweak your item prices for specific contacts or transactions',
      linkTitle: 'New Supplier Items',
      link: '/dashboard/inventory/supplier/new'
    },
    {
      title: 'Inventory Adjustment',
      icon: ScrollTextIcon,
      description: 'Transfer stock from the Main Warehouse',
      linkTitle: 'New Adjustment',
      link: '/dashboard/inventory/adjustments/new'
    },
  ]
  return(
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 px-4 gap-4'>
      {
        items.map((item, idx) => {
          const Icon = item.icon
          return (
            
            <div key={idx} className="bg-white p-4 rounded-sm flex flex-col items-center justify-center hover:shadow-lg transition-all">
              <h2 className='text-xl font-bold'>{item.title}</h2>
              <div className='my-6'>
                <Icon strokeWidth=".5px" className='w-32 h-32' />
              </div>
              <p className='line-clamp-1 text-gray-500 text-sm'>{item.description}</p>

              <div className="my-5">
                <Link href={item.link} className="bg-blue-700 p-2 rounded-md text-sm text-white flex items-center justify-between">
                  <span className="px-3">{item.linkTitle}</span>
                </Link>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}