import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'

const Category = () => {
  const {data , fetchAllProducts }=getData()

  const getUniqueCategory = (data,property)=>{
    let newVAl = data?.map((curElem)=>{
      return curElem[property]
    })
     return newVAl = [...new Set(newVAl)]
  }

  const categoryOnlyData = getUniqueCategory(data,"category")
  console.log(categoryOnlyData);

  useEffect(()=>{
    fetchAllProducts()
  },[])

  return (
    <div className='bg-[#88a2dbcf]'>
      <div className='max-w-7xl mx-auto flex gap-4 items-center justify-evenly py-4 px-4'>
        {
          categoryOnlyData.map((item,index)=>{
            return (
              <div key={index}>
                <button className='uppercase font-bold shadow-2xl  text-white px-3 py-1 rounded-md cursor-pointer'>{item}</button>
              </div>

            )
          })
        }
      </div>
    </div>
  )
}

export default Category
