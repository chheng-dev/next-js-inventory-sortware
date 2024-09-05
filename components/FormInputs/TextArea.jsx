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
    <textarea 
      name={name}
      {...register(`${name}`, {
        required: isRequired
      })}
      id="name" 
      rows="4" 
      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder={placeholder}>
      </textarea>
    {
      errors && errors[name] && (
        <span className='text-sm text-red-600'>{label} is required</span>
      )
    }
   </div>
  );
}
