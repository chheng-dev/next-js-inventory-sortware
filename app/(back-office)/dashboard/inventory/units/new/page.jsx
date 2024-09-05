"use client"
import React, { useState } from 'react'
import FixedFormHeader from  "../../../../../../components/dashboard/FixedFormHeader"
import { useForm } from "react-hook-form"
import TextInput from "../../../../../../components/FormInputs/TextInput"
import SubmitButton from "../../../../../../components/FormInputs/SubmitButton"
import { toast} from "react-hot-toast"

function NewUnits () {
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
    const baseUrl = "http://localhost:3000/api/units";
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
        toast.success('Unit has been added successfully :)')
        reset();
      }

      reset();
    } catch(err){
      setLoading(false);
      console.log(err);
    }
  }
  

  return (
    <div>
      {/* Header  */}
      <FixedFormHeader title="New Unit" />

      {/* Form  */}
      <div className="mx-auto max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <dv className="flex items-center justify-between gap-4">
            <div className='w-1/2'>
              <TextInput 
                label="Unit Title" 
                name="title"
                type="text"
                placeholder="Type Unit title"
                register={register}
                errors={errors}
              />
            </div>

            <div className='w-1/2'>
              <TextInput 
                label="Unit Abbreviation" 
                name="abbreviation"
                type="text"
                placeholder="Type Unit Abbreviation"
                register={register}
                errors={errors}
              />  
            </div>
          </dv>       
          <SubmitButton 
            isLoading={loading}
            title="Unit"
          /> 

        </form>
      </div>
    </div>
  )
}

export default NewUnits 
