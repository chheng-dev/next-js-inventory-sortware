"use client"
export default function TextInput({
  label, 
  name, 
  isRequired=true, 
  type, 
  register,
  errors,
  className="sm:col-span-2", 
  placeholder}) {

  return (
   <div className={className}>
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
    <input 
      type={type} 
      {...register(`${name}`, {
        required: isRequired
      })}
      name={name} 
      id={name}
      autoComplete='given-name'
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder={placeholder} 
    />
    {
      errors && errors[name] && (
        <span className='text-sm text-red-600'>{label} is required</span>
      )
    }
   </div>
  );
}
