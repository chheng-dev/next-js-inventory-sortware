"use client"
import Select from 'react-select';

export default function SelectInput(
  {
    label,
    name,
    register,
    className= "sm:col-span-2",
    options=[]
  }
){

  const defaultValue = options.length > 0 ? options[0] : null;

  const handleChange = (selectedOption) => {
    register(name).onChange({
      target: {
        name,
        value: selectedOption ? selectedOption.value : '',
      },
    });
  };

  return(
    <div className={className}>
      <label 
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          {label}
      </label>
       <Select
          name={name}
          options={options}
          onChange={handleChange}
          defaultValue={defaultValue}
          classNamePrefix="react-select"
          className="react-select-container text-gray-900 text-sm rounded-lg"
        />
    </div>
  )
}