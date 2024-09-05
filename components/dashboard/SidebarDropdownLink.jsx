import { ChevronDown, ChevronRight, MoveDown } from "lucide-react";
import {Collapsible, CollapsibleContent, CollapsibleTrigger,} from "../ui/collapsible";
import CollapsibleLink from "../dashboard/CollapsableLink";
import { usePathname } from 'next/navigation'
import { Fragment, useEffect, useState } from "react";

export default function SidebarDropdownLink({title, items, icon}) {
  const Icon = icon;
  const pathname = usePathname()

  const [isActive, setIsActive] = useState(false);

  useEffect(() =>{
    setIsActive(items.some(item => pathname.startsWith(item.path)));
  }, [pathname, items]);

  return (  
    <Collapsible>
      <CollapsibleTrigger         
        className={`flex items-center justify-between space-x-2 py-3 px-2 w-full rounded-md ${
          isActive ? "bg-gray-900 text-blue-400" : ""
        }`}
      >
        <span className="flex space-x-2">
          <Icon className="w-4 h-4" />
          <span>{title}</span>
        </span>
        {isActive ? (<ChevronDown  className="w-4 h-4"/>) : <ChevronRight className="w-4 h-4 space-x-5" />}
      </CollapsibleTrigger>
      <CollapsibleContent>
        {
          items.map((item, idx) => {
            return (
              <CollapsibleLink 
                key={idx} 
                title={item.title} 
                path={item.path} 
                isActive={pathname === item.path}
              />
            )
          })
        }
      </CollapsibleContent>
    </Collapsible>
  )
}