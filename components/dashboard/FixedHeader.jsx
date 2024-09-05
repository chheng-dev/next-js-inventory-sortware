import { LayoutGrid, List, MoreVertical, Plus } from "lucide-react";
import Link from "next/link";

export default function FixedHeader({ newLink }){
  return(
    <div className="flex items-center justify-between bg-white px-6 py-5 sticky top-[50px] shadow-sm">
      <h2 className="text-2xl font-medium">All Items</h2>
      <div className="flex items-center gap-2">
        <Link href={newLink} className="bg-blue-700 p-2 rounded-md text-sm text-white flex items-center justify-between">
          <Plus className="w-4 h-4"/>
          <span className="px-3">New</span>
        </Link>

        {/* Layout  */}
        <div className="flex rounded-md overflow-hidden">
          <button className="bg-gray-400 p-2 border-r">
            <List className="w-4 h-4" />
          </button>
          <button className="bg-gray-200 p-2">
            <LayoutGrid className="w-4 h-4" />
          </button>
        </div>

        {/* More  */}
        <button className="bg-gray-200 p-2 rounded-md">
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}