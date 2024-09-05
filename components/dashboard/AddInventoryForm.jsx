import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import TextInput from "../../components/FormInputs/TextInput"
import SubmitButton from "../../components/FormInputs/SubmitButton"
import TextArea from "../../components/FormInputs/TextArea"
import SelectInput from "../../components/FormInputs/SelectInput"
import { toast} from "react-hot-toast"

function AddInventoryForm () {
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
    const baseUrl = "http://localhost:3000/api/adjustments/add";
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
        toast.success('Add Stock has been added successfully :)')
        reset();
      }

      reset();
    } catch(err){
      setLoading(false);
      console.log(err);
    }
  }
  
  const selectOptions = [
    { label: "brand1", value: "akjlfdjlajfldjalfdaf" },
    { label: "brand2", value: "falkfjdaljldl" },
  ]

  return (
    <div className="mx-auto max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className='flex items-center justify-between gap-4'>
          <div className='w-full'>
            <TextInput 
              label="Reference Number" 
              name="referenceNumber"
              type="number"
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>  
          {/* <div className='w-1/2'>
            <TextInput 
              label="Reference Date" 
              name="referenceDate"
              type="date"
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>   */}
        </div>
        
        <dv className="flex items-center justify-between gap-4">
          <div className='w-1/2'>
            <TextInput 
              label="Enter Qauntity of Stock to Add" 
              name="addStockQty"
              type="number"
              register={register}
              errors={errors}
              className='w-full'
            />
          </div>

          <div className='w-1/2'>
            <SelectInput
              label="Select the Warehouse that will revive the Stock"
              name="recievingWarehouseId"
              register={register}
              options={selectOptions}
              className="w-full"
            />
          </div>

        </dv>   
        <div className="w-full">
          <TextArea 
            label="Adjustment Notes"
            name="description"
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

export default AddInventoryForm 
