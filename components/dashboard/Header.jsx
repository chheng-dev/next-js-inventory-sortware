import { Bell, Grip, History, Plus, Settings, User, Users } from 'lucide-react'
import React from 'react'
import SearchInput from "../../components/dashboard/SearchInput";

function Header() {
  return (
    <div className='bg-gray-200 h-12 flex items-center justify-between px-6 border-b border-slate-300 shadow-sm site-header'>
      <div className='flex gap-3'>
        {/* Recent activities */}
        <button>
          <History className='w-6 h-6' />
        </button>

        {/* Search */} 
        <SearchInput />
        
      </div>

      <div className='flex items-center gap-3'>
        {/* Plus Icon */}
        <div className='border-r border-gray-400 pr-2 '>
          <button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" className="bg-blue-600 text-white p-0.75 rounded-lg p-1">
            <Plus className='w-4 h-4' />
          </button>
          <div id="tooltip-bottom" role="tooltip" className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Quick Chat
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div> 
        </div>

        <div className="flex gap-4 items-center">
          <Users className='w-4 h-4 text-gray-900' />
          <Bell className='w-4 h-4 text-gray-900' />
          <Settings className='w-4 h-4 text-gray-900' />

          <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-xs text-gray-600 dark:text-gray-300">C</span>
          </div>

          <Grip className='w-4 h-4 text-gray-900' />

        </div>


      </div>
    </div> 
  )
}

export default Header
