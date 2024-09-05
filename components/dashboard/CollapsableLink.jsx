import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function CollapsibleLink({path, title, key}) {
  const pathname = usePathname()

  const getLinkClassName = (path) => {
    var navLinkClasses = `flex items-center pl-8 pr-4 transition-all duration-300 py-2 space-x-3 rounded-md text-sm ${
      pathname === path ? "bg-blue-500 text-white rounded-md" : ""
    }`;

    return navLinkClasses;
  }
  
  return(
    <Link key={key} href={path} className={getLinkClassName(path)}>
      <span>{title}</span>
    </Link>
    
  )
}

// flex items-center pl-8 pr-4 hover:bg-slate-900 transition-all duration-300 py-2 space-x-3 rounded-md text-sm