import { SubmitHandler, useForm } from "react-hook-form";
import { FaCloudUploadAlt } from "react-icons/fa";
import { TProduct } from "types/types";


const CarouselImageUpload = () => {
  const {
    register,    
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<TProduct, "image">>();
  const onSubmit: SubmitHandler<Pick<TProduct, "image">> = async (data) => {   

    const file = data.image[0]; 
    console.log(file)
   const fileData = new FormData();
   fileData.append('image', file);
   console.log(JSON.stringify(fileData))
    
  };





  return (
    <div className="w-full h-full md:my-10 md:p-10  flex justify-center m-auto justify-items-center">
      <div className="w-screen h-full md:w-1/3 md:h-[320px] m-auto p-6 rounded-md border ">
        <div>
          {" "}
          <h1 className="text-center text-xl text-red-500 font-bold">Carousel image upload to Cloudinary </h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col space-y-2 mb-2 mt-5 border border-gray-300 rounded-md">
            <label
              htmlFor="file"
              className="flex justify-evenly justify-items-center text-sm font-medium leading-6 text-gray-900"
            >
              <span className="text-3xl my-3">Upload Image : </span>
              <span>
                <FaCloudUploadAlt className="text-gray-500" size={64} />
              </span>
            </label>
            <input
              type="file"
              id="file"
              {...register("image", { required: true })}
              hidden
            ></input>
            {errors.image && (
              <span className="text-red-500">File is required</span>
            )}
          </div>
          <div className="w-full flex justify-center justify-items-center mt-6">
            <input
              type="submit"
              value="Upload Image"
              className="text-red-500  bg-slate-200 hover:bg-slate-300 hover:scale-105 px-8 py-2 rounded-full cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarouselImageUpload;
