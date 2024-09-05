"use client"
import React, { useState } from 'react'
import FixedFormHeader from  "../../../../../../components/dashboard/FixedFormHeader"
import { set, useForm } from "react-hook-form"
import TextInput from "../../../../../../components/FormInputs/TextInput"
import SubmitButton from "../../../../../../components/FormInputs/SubmitButton"
import TextArea from "../../../../../../components/FormInputs/TextArea"
import {makeApiRequest} from "../../../../../../lib/apiRequest";

function NewSupplier() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const baseUrl = "http://localhost:3000";
    
    try {
      await makeApiRequest(setLoading, `${baseUrl}/api/suppliers`, data, "Supplier", reset);
    } catch (error) {
      console.error("An error occurred during the API request:", error);
    }
  };
  
  

  return (
    <div>
      {/* Header  */}
      <FixedFormHeader title="New Supplier" />

      {/* Form  */}
      <div className="mx-auto max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <dv className="flex items-center justify-between gap-4">
            <div className='w-1/2'>
              <TextInput 
                label="Supplier Name" 
                name="name"
                type="text"
                placeholder="Type Supplier Name"
                register={register}
                errors={errors}
              />
            </div>

            <div className='w-1/2'>
              <TextInput 
                label="Supplier Location" 
                name="phone"
                type="text"
                placeholder="Type Supplier Location"
                register={register}
                errors={errors}
              />  
            </div>
          </dv>     

          <dv className="flex items-center justify-between gap-4">
            <div className='w-1/2'>
              <TextInput 
                label="Supplier Email" 
                name="email"
                type="email"
                placeholder="Type Supplier Email"
                register={register}
                  errors={errors}
              />
            </div>

            <div className='w-1/2'>
              <TextInput 
                label="Supplier Address" 
                name="address"
                type="text"
                placeholder="Type Supplier Address"
                register={register}
                errors={errors}
              />  
            </div>
          </dv>    

          <dv className="flex items-center justify-between gap-4">
            <div className='w-1/2'>
              <TextInput 
                label="Supplier Contact Person" 
                name="contactPerson"
                type="text"
                placeholder="Type Supplier Contact Person"
                register={register}
                  errors={errors}
              />
            </div>

            <div className='w-1/2'>
              <TextInput 
                label="Supplier Code" 
                name="supplierCode"
                type="number"
                placeholder="Type Supplier Code"
                register={register}
                errors={errors}
              />  
            </div>
          </dv>     

          <dv className="flex items-center justify-between gap-4">
            <div className='w-1/2'>
              <TextInput 
                label="Supplier TIN" 
                name="taxID"
                type="text"
                placeholder="Type Supplier Contact Person"
                register={register}
                  errors={errors}
              />
            </div>

            <div className='w-1/2'>
              <TextInput 
                label="Supplier Payment Term" 
                name="paymentTerm"
                type="text"
                placeholder="Type Supplier Payment Term"
                register={register}
                errors={errors}
              />  
            </div>
          </dv>     

          <dv className="flex items-center justify-between gap-4">
            <div className='w-full'>
              <TextArea 
                label="Notes"
                name="notes"
                placeholder="Type Notes...."
                register={register}
                errors={errors}
              />  
            </div>
          </dv>     

          <SubmitButton 
            isLoading={loading}
            title="Supplier"
          /> 

        </form>
      </div>
    </div>
  )
}

export default NewSupplier 
