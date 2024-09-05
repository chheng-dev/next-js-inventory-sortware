import { Check, CheckCircle, CircleEllipsis, File, Package } from "lucide-react";

export default function SalesOverview () {
  return (
    <div className="">
      {/* SALES ACTIVITY */}
      <div className="flex flex-row gap-6">
        <div className="flex-col w-4/6">
          <div className="border border-slate-300 rounded-md">
            <div className="border-b border-grey-12 py-4 card-title bg-gray-200">
              <h2 className="px-4">Sales Activity</h2>
            </div>
            <div className="">
              <div className="flex">
                <div className="flex-col w-1/4 text-center py-6 border-r">
                  <p className="font-size-36 site-sale-qty text-blue-400 text-3xl font-semibold mb-1">51</p>
                  <p className="text-xs sale-qty mb-3">Qty</p>
                  <span className="flex items-center justify-center text-sm text-gray-600 gap-2">
                    <CheckCircle className="w-4 h-4" /> TO BE PACKED
                  </span>
                </div>

                <div className="flex-col w-1/4 text-center py-6 border-r">
                  <p className="font-size-36 text-red-500 text-3xl font-semibold mb-1">41</p>
                  <p className="text-xs sale-qty mb-3">Pkgs</p>
                  <span className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Package className="w-4 h-4" /> TO BE SHIPPED
                  </span>
                </div>

                <div className="flex-col w-1/4 text-center py-6 border-r">
                  <p className="font-size-36 site-sale-qty text-green-600  text-3xl font-semibold mb-1">52</p>
                  <p className="text-xs sale-qty mb-3">Pkgs</p>
                  <span className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <CircleEllipsis className="w-4 h-4" /> TO BE DELIVERED
                  </span>
                </div>

                <div className="flex-col w-1/4 text-center py-6">
                  <p className="font-size-36 site-sale-qty text-yellow-600  text-3xl font-semibold mb-1">80</p>
                  <p className="text-xs sale-qty mb-3">Qty</p>
                  <span className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <File className="w-4 h-4" /> TO BE INVOICED
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INVENTORY SUMMARY */}
        <div className="flex-col w-2/6">
          <div className="border border-slate-300 rounded-md">
            <div className="border-b border-grey-12 py-4 card-title bg-gray-200">
              <h2 className="px-4">Inventory Summary</h2>
            </div>

            <div className="flex-col border-b">
              <div className="border-r flex justify-between items-center p-4">
               <p className="text-xs text-gray-600">QUANTITY IN HAND</p>
               <p className="font-normal text-2xl">12083</p>
              </div>
            </div>

            <div className="flex-col">
              <div className="border-r flex justify-between items-center p-4">
               <p className="text-xs text-gray-600">QUANTITY TO BE RECEIVED</p>
               <p className="font-normal text-2xl">100</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
} 