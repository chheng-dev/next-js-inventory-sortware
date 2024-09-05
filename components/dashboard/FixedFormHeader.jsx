import React from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

function FixedFormHeader ({title}) {
  return (
    <div className="flex items-center justify-between bg-white py-6 px-6 sticky top-[45px] shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <Link href=""><X/></Link>
    </div>
  )
}

export default FixedFormHeader 
