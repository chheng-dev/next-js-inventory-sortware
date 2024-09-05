"use client"
import React, { useState } from 'react'
import FixedFormHeader from  "../../../../../../components/dashboard/FixedFormHeader"
import TransferInventoryForm from "../../../../../../components/dashboard/TransferInventoryForm"
import { Minus, Plus } from 'lucide-react'
import AddInventoryForm from "../../../../../../components/dashboard/AddInventoryForm"

function NewAdjustment () {  
  const tabs = [
    {
      title: "Add Stock",
      icon: Plus,
      form: "add"
    },
    {
      title: "Transfer Stock",
      icon: Minus,
      form: "transfer"
    } 
  ]

  const [activeForm, setActiveForm] = useState('add');

  return (
    <div>
      {/* Header  */}
      <FixedFormHeader title="New Adjustment" />

      {/* Tab Content  */}
      <div className="bg-white mt-4 mx-auto max-w-5xl p-4 rounded-md">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          {
            tabs.map((tab, i) => {
              const Icon = tab.icon;
              return(
                <li className="me-2 cursor-pointer" key={i}>
                  <a 
                    onClick={() => setActiveForm(tab.form)} 
                    className={`${activeForm === tab.form ? "text-blue-700 font-semibold" : 
                    ""} inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-blue-800 hover:border-blue-800`}>
                    <Icon className='w-4 h-4 mr-2 hover:text-blue-800' /> 
                    <span>{tab.title}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>


      {/* Form  */}
      {
        activeForm === 'add' ? <AddInventoryForm /> : <TransferInventoryForm />
      }
    </div>
  )
}

export default NewAdjustment 
