import { Search } from 'lucide-react'
import React from 'react'

export default function SearchInput() {
  return (
    <div>
      <form className="flex items-center max-w-sm mx-auto">   
        <label for="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className='text-gray-500 dark:text-gray-400 w-4 h-4' />
            </div>
            <input type="text" id="simple-search" 
              className="search-bg border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 px-2 py-1.5  focus:outline-0" 
              placeholder="Search in Customers (/) " required 
            />
        </div>
      </form>
    </div>
  )
}
