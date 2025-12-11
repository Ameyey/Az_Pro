import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../component/Breadcrums'
import { IoCartOutline } from 'react-icons/io5'
import Loading from '../assets/Loading.json'

function Sign_Page_Prodect() {
  const params = useParams()
  const [ SingleProduct ,setSingleProduct]=useState()

  const getSingleProduct = async ()=>{
    try {
     let res= await axios.get(`https://fakestoreapiserver.reactbd.org/api/products/${params.id}`)
     setSingleProduct(res.data)
    } catch (error) {
       console.log(error.message)
    }
  }

  useEffect(()=>{
    getSingleProduct()
  },[])

  return (
    <div>
      {
        SingleProduct ? 
        <div className='px-4 pb-4  md:px-0 '>
          <Breadcrums title={SingleProduct.title}  />
          <div className='max-w-4xl mx-auto md:p-6 grid grid-cols-2 gap-10'>
            {/* product images */}
            <div className='w-full'>
              <img src={SingleProduct.image} alt={SingleProduct.title} className='rounded-2xl w-full object-cover' />
            </div>
            {/* product details */}
            <div className='flex flex-col gap-6'>
              <h1 className='md:text-4xl font-medium text-gray-800'>{SingleProduct.title}</h1>
              <div className='text-gray-700  font-semibold'>{SingleProduct.brand?.toUpperCase()} / {SingleProduct.category?.toUpperCase()} / {SingleProduct.type?.toUpperCase()}</div>
              <p className='text-2xl font-bold  text-red-600'>{SingleProduct.price}.0  <span className='text-gray-700 line-through'>{SingleProduct.oldPrice}.0</span>  <span className='bg-red-500 text-white font-mono px-4 py-1 rounded-3xl '>{SingleProduct.discountedPrice}% discount </span> </p>
              <p className='text-gray-500 font-bold'>{SingleProduct.description}</p>

              {/* qunatity selector  */}
              <div className='flex items-center gap-4 '>
                <label htmlFor="" className='text-sm font-medium text-gray-500'>Quantity:
                  <input type="number" min={1} value={1} className='w-20 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:right-2 focus:right-red-500' />
                </label>
              </div>

              <div className='flax gap-4 mt-4'>
                <button className='px-6 flex gap-2 py-2 text-lg bg-red-500 text-white rounded-md'> <IoCartOutline className='w-7 h-auto'/>  Add to Cart</button>
              </div>

            </div>
          </div>
        </div> :<div className='flex items-center justify-center h-screen'>
        <h1>
          <img src={Loading} alt="Loading" />
          {/* <img animationData={Loading} classID='w-[500px]' />           */}
          <h1>Loding</h1>
        </h1>   
        </div>
      }
    </div>
  )
}

export default Sign_Page_Prodect
