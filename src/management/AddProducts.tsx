import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { toast } from 'react-toastify';

import { useForm, SubmitHandler } from "react-hook-form"
import { Inputs } from 'types/types';



const categories  = [
    {
      label: "Apple",
      value: "apple",
    },
    {
      label: "Mango",
      value: "mango",
    },
    {
      label: "Banana",
      value: "banana",
    },
    {
      label: "Pineapple",
      value: "pineapple",
    },
  ];
const AddProducts = () => {
    // const{ isProductCreated, error} = useSelector(state=> state.addProduct)
    const [productData, setProductData] = useState({})
    const [file, setFile ] = useState(null)
    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>()


  const onSubmit: SubmitHandler<Inputs> = (data) =>{
          const fd = new FormData();
          fd.append("name", data.name);
          fd.append("category", data.category);
          fd.append("description", data.description);
          fd.append("price", data.price);
          fd.append("stock", data.stock);
          fd.append("quantity", data.quantity);
          fd.append("image", data.image);
     
  }

    useEffect(()=> {
      // if(error) {
      //   toast.error(error, {position: toast.POSITION.TOP_CENTER})   
        // dispatch(productClearError())        
    // }
    // if( isProductCreated === true) {
    //     toast.success("You have successfully created product", {position: toast.POSITION.TOP_CENTER})        
    // }         
  
    }, [])

    

    
   

    
    return (
        <div className='bg-[#EEEEEE] w-full h-screen fixed' >
         
           <div className="lg:w-full flex justify-center justify-items-center md:w-1/3  mx-auto h-[80vh] border border-[#FFFFFF] m-4  ">           
            <div className=" w-full h-auto shadow-sm rounded-md  bg-white border border-slate-300">
                <form onSubmit={handleSubmit(onSubmit)} className='p-6'>
                  <div> <h1 className='text-green text-3xl text-center mt-5'>Add Product </h1></div>
                    <div className="my-3">
                       <label className='block  my-5'> Product Name :  </label>
                        <input  className='border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full block' {...register("name", { required: true })}  placeholder='Enter Product Name' required  />   
                             {errors.name && <span>This field is required</span>} 
                    </div>
                    <div className="my-4">
                      <label className=' block  mb-2  my-5' >Category Selection</label>
                          <select  {...register("category")}  className='border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full block' >
                           {
                                categories.map((category) => (                                    
                                    <option  key={category.value} value={category.value}>{category.label}</option>
                                ))
                            }
                          </select>
                       
                    </div>
                    <div className="my-4">
                       <label className='my-5  block  mb-2'> Product Description : </label>
                           <input  className='border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full block' {...register("description", { required: true })}  placeholder='Enter Product Description' required  />    
                             {errors.description && <span>This field is required</span>}
                    </div>
                    <div className="my-4">
                       <label className='my-5  block  mb-2'> Product price :  </label>
                        <input  className='border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full block' {...register("price", { required: true })}  placeholder='Enter Product price' required  />    
                             {errors.price && <span>This field is required</span>}
                    </div>
                    <div className="my-4">
                       <label className='my-5  block  mb-2'> Product Stock : </label>
                         <input className='border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full block' {...register("stock", { required: true })}  placeholder='Enter Product stock' required  />    
                             {errors.stock && <span>This field is required</span>}
                    </div>
                    <div className="my-4">
                         <label className='block w-full cursor-pointer bg-blue-50 h-12 pt-1 text-center text-xl rounded-md' htmlFor="image">Select Image </label>
                        <input type='file' id='image' {...register("image", { required: true })}  required  hidden />    
                           
                    </div>
                    <div className="my-4">
                       <label> <button  type="submit" className='text-bold w-full h-10 rounded-sm cursor-pointer bg-slate-400 text-center'> Add a Product</button></label>
                    </div>
                </form>
            </div>
           </div>   
        </div>
    );
};


export default AddProducts;