"use client"
import React, { useState } from 'react'
import FixedFormHeader from  "../../../../../../components/dashboard/FixedFormHeader"
import { useForm } from "react-hook-form"
import TextInput from "../../../../../../components/FormInputs/TextInput"
import SubmitButton from "../../../../../../components/FormInputs/SubmitButton"
import TextArea from "../../../../../../components/FormInputs/TextArea"
import { toast} from "react-hot-toast"
import {makeApiRequest} from "../../../../../../lib/apiRequest";

function NewCategory () {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    const baseUrl = "http://localhost:3000/api/categories";
    await makeApiRequest(setLoading, baseUrl, data, "Category", reset);
  }
  

  return (
    <div>
      {/* Header  */}
      <FixedFormHeader title="New Category" />

      {/* Form  */}
      <div className="mx-auto max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <TextInput 
            label="Category Title" 
            name="title"
            type="text"
            placeholder="Type Category title"
            register={register}
            errors={errors}
          />

          <TextArea 
            label="Description"
            name="description"
            placeholder="Type Description...."
            register={register}
            errors={errors}
          />
       
          <SubmitButton 
            isLoading={loading}
            title="Category"
          /> 

        </form>
      </div>
    </div>
  )
}

export default NewCategory 
