"use client"

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { LucideImage } from 'lucide-react';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ProductDetailOverview () {
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [12],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="mt-8">
      <div className="flex gap-6">
        <div className="flex-col w-1/2 items-center">
          <div className="border border-slate-300 rounded-md">
            <div className="border-b border-grey-12 py-4 card-title bg-gray-200">
              <h2 className="px-4">Product Details</h2>
            </div>
            <div className="flex items-center">
              <div className="flex-col w-3/5 border-r justify-center items-center">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-red-500 text-md">Low Stock Items</p>
                    <p className="font-semibold text-red-500">22</p>
                  </div>

                  <div className="flex items-center justify-between pt-6">
                    <p className="text-gray-500 text-md">All Item Groups</p>
                    <p className="font-semibold">34</p>
                  </div>

                  <div className="flex items-center justify-between pt-6">
                    <p className="text-gray-500 text-md">All Items</p>
                    <p className="font-semibold">129</p>
                  </div>
                </div>
              </div>
              <div className="flex-col w-2/5 p-4">
                <div className="flex-col items-center justify-center">
                  <p className="text-md text-gray-500 text-center">Active Items</p>
                  <div className='h-24'>
                    <Doughnut data={data} options={options} />
                  </div>
                </div>  
              </div>
            </div>  
          </div>
        </div>

        <div className="flex-col w-1/2 items-center">
          <div className="border border-slate-300 rounded-md">
            <div className="border-b border-grey-12 py-4 card-title bg-gray-200">
              <div className='flex items-center justify-between'>
                <h2 className="px-4">Top Selling Items</h2>
                <p className='pr-4 text-xs text-grey-500'>This Month</p>
              </div>
            </div>
            <div className='flex justify-center items-center'>
              <div className='w-1/3 p-4 flex flex-col items-center border-r'>
                <LucideImage className='w-16 h-16 mb-4' alt="Queen Size Bed" />
                <span className='text-sm text-gray-500 mb-1'>Queen Size Bed</span>
                <p className='text-xl font-semibold'>270 <span className='text-sm font-normal'>Mtr</span></p>
              </div>

              <div className='w-1/3 p-4 flex flex-col items-center border-r'>
                <LucideImage className='w-16 h-16 mb-4' alt="Queen Size Bed" />
                <span className='text-sm text-gray-500 mb-1'>Patio Dining Set</span>
                <p className='text-xl font-semibold'>181 <span className='text-sm font-normal'>Mtr</span></p>
              </div>
              
              <div className='w-1/3 p-4 flex flex-col items-center border-r'>
                <LucideImage className='w-16 h-16 mb-4' alt="Queen Size Bed" />
                <span className='text-sm text-gray-500 mb-1'>Queen Size Bed</span>
                <p className='text-xl font-semibold'>15 <span className='text-sm font-normal'>Mtr</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}