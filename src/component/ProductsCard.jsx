import React from 'react'
import { IoCartOutline } from 'react-icons/io5'
import { PiStarThin } from 'react-icons/pi'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../Context/CardContext'

function ProductsCard({product}) {

  const navigate = useNavigate()
  const {addToCard ,cardItem }=useCart()
  console.log(cardItem)

  return (
    <div className='border relative border-gray-200 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max my-2 '>
       <img src={product.image} alt={product.category}  className='bg-gray-100 aspect-square rounded-[10px]' onClick={()=>navigate(`/products/${product._id}`)}/>
       <h1 className='text-red-500 my-1 font-semibold shadow-2xl'>{product.brand}</h1>
       <h1 className='line-clamp-2  font-semibold'>{product.title}</h1>
       <p className='text-lg text-gray-800 font-bold'>${product.price}</p>
       <button className='bg-red-500 px-3 py-2 text-lg rounded-md text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold' onClick={()=>addToCard(product)} ><IoCartOutline className='w-6 h-6' /> Add to Card</button>
       {/* <PiStarThin  className=''/> */}
    </div>

  )
}

export default ProductsCard
