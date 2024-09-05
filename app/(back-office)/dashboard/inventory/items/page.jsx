export default function Items() {
  return (
    <div className="px-8 py-4">
      <div className="mt-6">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-slate-900 rounded-xl">
          <thead className="text-xs text-gray-700 uppercase bg-slate-200 border-t border-slate-900">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                SKU
              </th>
              <th scope="col" className="px-6 py-3">
                TYPE
              </th>
              <th scope="col" className="px-6 py-3">
                DESCRIPTION
              </th>
              <th scope="col" className="px-6 py-3">
                RATE
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-900">
              <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                Direct Sales
              </td>
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
            </tr>
            <tr className="border-b border-slate-900">
              <td scope="row" className="px-6 py-4 text-gray-900 whitespace-nowrap">
                Direct Sales
              </td>
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
            </tr>
            
        </tbody>
      </table>
      </div>
    </div>
  )
}