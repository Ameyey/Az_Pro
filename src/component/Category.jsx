import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'
import { Navigate, useNavigate } from 'react-router-dom'

const Category = () => {
  const {categoryOnlyData}=getData()
  const navigate = useNavigate()
 
  return (
    <div className='bg-[#88a2dbcf]'>
      <div className='max-w-7xl mx-auto flex flex-wrap gap-4 items-center  justify-center md:justify-around py-4 px-4'>
        {
          categoryOnlyData?.map((item,index)=>{
            return (
              <div key={index}>
                <button onClick={()=>navigate(`/category/${item}`)} className='uppercase font-bold shadow-2xl  text-white px-3 py-1 rounded-md cursor-pointer'>{item}</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category
