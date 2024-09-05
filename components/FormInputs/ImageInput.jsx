import { UploadDropzone } from '@uploadthing/react'
import { Pencil } from 'lucide-react'
import Image from 'next/image'

export default function ImageInput({label, imageUrl= "", setImageUrl, endpoint="imageUploader "}){
  return(
    <div className='sm:col-span-full'>
      <div className="flex justify-between items-center mb-4">
        <label htmlFor="course-image" className="block text-sm font-medium leading-6 text-gray-900">{label}</label>
        {
          imageUrl && (
            <button
              type='button'
              onClick={() => setImageUrl("")}
              className='flex space-x-2 rounded-md shadow text-slate-50 py-2 px-4 bg-yellow-800 mb-3'
            >
              <Pencil className='w-5 h-5' />
              <span className='text-white-700'>Change Image</span>
            </button>
          )
        }
      </div>
      {
        imageUrl ? (
          <Image src={imageUrl} alt="course image"
            width={1000}
            height={667}
            className='w-full h-64 object-cover'
          />
        ) : (
          <UploadDropzone
            alt="course image"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              if (res && res.length > 0) {
                setImageUrl(res[0].url);
                alert("Upload Completed");
              } else {
                alert("Upload failed, no file received.");
              }
            }}
            onUploadError={(error) => {
              alert(`ERROR! ${error.message}`);
            }}
          />
        )
      }
    </div>
  )
}