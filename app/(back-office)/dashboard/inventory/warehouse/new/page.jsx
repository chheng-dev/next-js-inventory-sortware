"use client"
import React, { useState } from 'react'
import FixedFormHeader from  "../../../../../../components/dashboard/FixedFormHeader"
import { useForm } from "react-hook-form"
import TextInput from "../../../../../../components/FormInputs/TextInput"
import SubmitButton from "../../../../../../components/FormInputs/SubmitButton"
import TextArea from "../../../../../../components/FormInputs/TextArea"
import SelectInput from "../../../../../../components/FormInputs/SelectInput"
import { toast} from "react-hot-toast"

function NewWareHouse () {
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
    const baseUrl = "http://localhost:3000/api/warehouse";
    try {
      const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }); 

      if(response.ok){
        toast.success('Warehouse has been added successfully :)')
        setLoading(false);
        reset();
      }

      reset();
    } catch(err){
      setLoading(false);
      console.log(err);
    }
  }
  
  const selectOptions = [
    { label: "Main", value: "main" },
    { label: "Branch", value: "branch" },
  ]

  return (
    <div>
      {/* Header  */}
      <FixedFormHeader title="New Warehouse" />

      {/* Form  */}
      <div className="mx-auto max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <dv className="flex items-center justify-between gap-4">
            <div className='w-1/3'>
              <SelectInput
                label="Select the Warehouse"
                name="warehouseType"
                register={register}
                options={selectOptions}
                className="w-full"
              />
            </div>

            <div className='w-1/3'>
              <TextInput 
                label="Warehouse Name" 
                name="name"
                type="text"
                placeholder="Type Warehouse name"
                register={register}
                errors={errors}
              />
            </div>

            <div className='w-1/3'>
              <TextInput 
                label="Location" 
                name="location"
                type="text"
                placeholder="Type Warehouse location"
                register={register}
                errors={errors}
              />  
            </div>
          </dv>   
          <div className="w-full">
            <TextArea 
              label="Description"
              name="description"
              placeholder="Type Description...."
              register={register}
              errors={errors}
            />  
          </div>    
          <SubmitButton 
            isLoading={loading}
            title="Warehouse"
          /> 

        </form>
      </div>
    </div>
  )
}

export default NewWareHouse 
