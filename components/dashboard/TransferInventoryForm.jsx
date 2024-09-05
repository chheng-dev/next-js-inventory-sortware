"use client"
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import TextInput from "../../components/FormInputs/TextInput"
import SubmitButton from "../../components/FormInputs/SubmitButton"
import TextArea from "../../components/FormInputs/TextArea"
// import SelectInput from "../../components/FormInputs/SelectInput"
import { toast} from "react-hot-toast"
import dynamic from 'next/dynamic'

const SelectInput = dynamic(() => import("../../components/FormInputs/SelectInput"), {ssr: false})

function TransferInventoryForm () {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    const baseUrl = "http://localhost:3000/api/transfer";
    try {
      const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }); 

      if(response.ok){
        setLoading(false);
        toast.success('Transfer Stock Adjustment has been added successfully :)')
        reset();
      }

      reset();
    } catch(err){
      setLoading(false);
      console.log(err);
    }
  }
  
  const selectWarehouseOptions = [
    { label: "warehouse 1", value: "akjlfdjlajfldjalfd23af" },
    { label: "warehouse 2", value: "falkfjdaljldd2322332afl" },
  ]

  const selectBrandOptions = [
    { label: "brand1", value: "akjlfdjlajfldjalfdaf" },
    { label: "brand2", value: "falkfjdaljldnzmnadll" },
  ]
  
  return (
    <div className="mx-auto max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className='w-full'>
          <TextInput 
            label="Enter Amount of Stock to Transfer" 
            name="transferStockQty"
            type="number"
            register={register}
            errors={errors}
            className='w-full'
          />
        </div>
        <dv className="flex items-center justify-between gap-4">
          <div className='w-1/2'>
            <SelectInput
              label="Select the Warehouse that will give the Stock"
              name="warehouseId"
              register={register}
              options={selectWarehouseOptions}
              className="w-full"
            />
          </div>

          <div className='w-1/2'>
            <SelectInput
              label="Select the Branch that will revive the Stock"
              name="recievingBrandId"
              register={register}
              options={selectBrandOptions}
              className="w-full"
            />
          </div>

        </dv>   
        <div className="w-full">
          <TextArea 
            label="Adjustment Notes"
            name="adjustmentNotes"
            register={register}
            errors={errors}
          />  
        </div>    
        <SubmitButton 
          isLoading={loading}
          title="Adjustment"
        /> 
      </form>
    </div>
  )
}

export default TransferInventoryForm 
