export default function OrderOverview() {
  return (
    <div className="mt-8">
      <div className="flex justify-between gap-4 pb-16">
        <div className="w-1/4">
          <div className="border border-slate-300 rounded-md">
            <div className="border-b border-grey-12 py-4 card-title bg-gray-200">
              <div className='flex items-center justify-between'>
                <h2 className="px-4">Purchase Order</h2>
                <p className='pr-4 text-xs text-grey-500'>This Month</p>
              </div>
            </div>

            <div className="flex p-4 items-center justify-center border-b">
              <div className="flex-col items-center">
                <p className="text-sm text-gray-700">Quantity Ordered</p>
                <h3 className="text-blue-500 font-bold text-xl text-center mt-3">2.00</h3>
              </div>
            </div>

            <div className="flex p-4 items-center justify-center">
              <div className="flex-col items-center">
                <p className="text-sm text-gray-700">Total Cost</p>
                <h3 className="text-blue-500 font-bold text-xl text-center mt-3">$14500.00</h3>
              </div>
            </div>

          </div>
        </div>
        <div className="w-3/4 ">
          <div className="border border-slate-300 rounded-md">
            <div className="border-b border-grey-12 py-4 card-title bg-gray-200">
              <div className='flex items-center justify-between'>
                <h2 className="px-4">Sales Order</h2>
                <p className='pr-4 text-xs text-grey-500'>This Month</p>
              </div>
            </div>
            
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-slate-200 border-t border-slate-300 text-center">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Channel
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Draft
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Confirmed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Packed
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Shipped
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Invoiced
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b text-center">
                  <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                    Direct Sales
                  </th>
                  <td className="px-6 py-4">
                    11
                  </td>
                  <td className="px-6 py-4">
                    23
                  </td>
                  <td className="px-6 py-4">
                    90
                  </td>
                  <td className="px-6 py-4">
                    10
                  </td>
                  <td className="px-6 py-4">
                    40
                  </td>
                </tr>
                <tr className="border-b text-center">
                  <th scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                    Direct Sales
                  </th>
                  <td className="px-6 py-4">
                    11
                  </td>
                  <td className="px-6 py-4">
                    23
                  </td>
                  <td className="px-6 py-4">
                    90
                  </td>
                  <td className="px-6 py-4">
                    10
                  </td>
                  <td className="px-6 py-4">
                    40
                  </td>
                </tr>
            </tbody>
          </table>

          </div>
        </div>
      </div>
    </div>
  )
}