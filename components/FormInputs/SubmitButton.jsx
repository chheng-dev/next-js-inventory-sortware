export default function SubmitButton({isLoading, title}){
  return(
    <div>
      {
        isLoading ? (
        <button type="submit" disabled  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-primary-800">
          Please wait.....
        </button>
        ) : (
          <button type="submit"  className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-primary-800">
            Save {title}
          </button>
        )
      }
    </div>
  )
}