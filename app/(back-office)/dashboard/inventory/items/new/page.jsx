"use client"
import React, { useState } from 'react'
import FixedFormHeader from  "../../../../../../components/dashboard/FixedFormHeader"
import { useForm } from "react-hook-form"
import TextInput from "../../../../../../components/FormInputs/TextInput"
import SubmitButton from "../../../../../../components/FormInputs/SubmitButton"
import TextArea from "../../../../../../components/FormInputs/TextArea"
import SelectInput from "../../../../../../components/FormInputs/SelectInput"
import ImageInput from "../../../../../../components/FormInputs/ImageInput"

function NewItem () {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm()

  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState("");


  const onSubmit = async (data) => {
    data.imageUrl = imageUrl;
    setLoading(true);
    const baseUrl = "http://localhost:3000/api/items";
    try {
      const response = await fetch(`${baseUrl}`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }); 

      if(response.ok){
        console.log(response);
        setLoading(false);
        reset();
      }

      reset();
    } catch(err){
      setLoading(false);
      console.log(err);
    }
  }
  
  const categories = [
    { label: "Electronics", value: "electroniaeriry90uy323edacs" },
    { label: "Clothes", value: "clodalkjelaj2343ldaf" },
  ]

  const units = [
    { label: "Kg", value: "kg92232l0dakjnfafd" },
    { label: "Pcs", value: "pcsljdal032lkjlkj0" },
  ]

  const brands  = [
    { label: "brand1", value: "kg92232l0dakjnfad" },
    { label: "brand2", value: "pcsljdal032kjlkj0" },
  ]

  const warehouses  = [
    { label: "warehouses1", value: "kg92232l0dakjnfdaad" },
    { label: "warehouses2", value: "pcsljdalda032kjlkj0" },
  ]

  const suppliers  = [
    { label: "supplier 1", value: "kg92232l0dakjnaad" },
    { label: "supplier 2", value: "pcsljdalda0kjlkj0" },
  ]

  return (
    <div>
      {/* Header  */}
      <FixedFormHeader title="New Item" />

      {/* Form  */}
      <div className="mx-auto max-w-5xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 my-5">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <dv className="flex items-center justify-between gap-4">
            <div className='w-1/2'>
              <TextInput 
                label="Warehouse Title" 
                name="title"
                type="text"
                placeholder="Type Warehouse Title"
                register={register}
                errors={errors}
              />  
            </div>

            <div className='w-1/2'>
              <SelectInput
                label="Select the Item Category"
                name="categoryId"
                register={register}
                options={categories}
                className="w-full"
              />
            </div>
          </dv>   

          <div className='flex items-center justify-center gap-4'>
            <div className='w-1/2'>
              <TextInput 
                label="Item SKU" 
                name="sku"
                type="text"
                register={register}
                errors={errors}
              />  
            </div>
            <div className='w-1/2'>
              <TextInput 
                label="Barcode" 
                name="barcode"
                type="text"
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <div className='w-1/2'>
              <TextInput 
                label="Quantity" 
                name="quantity"
                type="number" 
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
            <div className='w-1/2'>
              <SelectInput
                label="Select the Item Unit"
                name="unitId"
                register={register}
                options={units}
                className="w-full"
              />
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <div className='w-1/2'>
              <SelectInput
                label="Select the Item Brand"
                name="brandId"
                register={register}
                options={brands}
                className="w-full"
              />

            </div>
            <div className='w-1/2'>
              <TextInput 
                label="Buying Price" 
                name="buyingPrice"
                type="number"
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <div className='w-1/2'>
              <TextInput 
                label="Selling Price" 
                name="sellingPrice"
                type="number"
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
            <div className='w-1/2'>
              <SelectInput
                label="Select the Item Supplier"
                name="supplierId"
                register={register}
                options={suppliers}
                className="w-full"
              />
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <div className='w-1/2'>
              <SelectInput
                label="Select the Item Warehouse"
                name="warehouseId"
                register={register}
                options={warehouses}
                className="w-full"
              />
            </div>
            <div className='w-1/2'>
              <TextInput 
                label="Item Weight in Kgs" 
                name="weight"
                type="number"
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <div className='w-1/2'>
              <TextInput 
                label="Item Demension in cm (20 x 30 x 100)" 
                name="demension" 
                type="text" 
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
            <div className='w-1/2'>
              <TextInput 
                label="Item Tax Rate in %" 
                name="taxRate" 
                type="number" 
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
          </div>

          <div className='flex items-center justify-between gap-4'>
            <div className='w-1/2'>
              <TextInput 
                label="Re-Order point" 
                name="reOrderPoint"
                type="number"
                register={register}
                errors={errors}
                // isRequired={false}
              />  
            </div>
          </div>

          <div className='flex items-center justify-center gap-4'>
            <div className='w-1/2'>
              <TextArea 
                label="Description"
                name="description"
                placeholder="Type Description...."
                register={register}
                errors={errors}
              />  
            </div>
            <div className='w-1/2'>
              <TextArea 
                label="Note"
                name="note"
                placeholder="Type Note...."
                register={register}
                errors={errors}
              />  
            </div>
          </div>

          <ImageInput 
            label="Item Image"
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            endpoint="imageUploader"
          />

          <SubmitButton 
            isLoading={loading}
            title="Item"
          /> 

        </form>
      </div>
    </div>
  )
}

export default NewItem 
