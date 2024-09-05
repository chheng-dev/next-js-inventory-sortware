export default function SaleOrderSummary(){
  return(
    <div className="mt-8">
      <div className="flex justify-between gap-4 pb-16">
        <div className="w-full">
          <div className="border border-slate-300 rounded-md">
            <div className="border-b border-grey-12 py-4 card-title bg-gray-200">
              <div className='flex items-center justify-between'>
                <h2 className="px-4">Sales Order Summary (in USD)</h2>
                <p className='pr-4 text-xs text-grey-500'>This Month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}