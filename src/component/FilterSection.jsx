import React from 'react'
import { getData } from '../Context/DataContext'

function FilterSection() {

    const {categoryOnlyData , brandOnlyData}=getData()  

  return (
    <div className='bg-gray-80 mt-10 p-4 rounded-md h-max bg-gray-100 rounded-[10px]'>
      <input type="text" placeholder='Search...'  className='bg-white p-2 rounded-md border-gray-300 border-2'/>
      {/* item  */}
      <h1 className='mt-3 font-semibold text-xl'>Category</h1>
      <div className='flex flex-col gap-2 mt-2'>
        {
          categoryOnlyData?.map((item,index)=>{
            return (
              <div key={index} className='flex gap-2' >
                <input type="checkbox" />
                <button className='cursor-pointer uppercase'>{item}</button>
              </div>
            )
          })
        }
      </div>
      {/* brand */}
       <h1 className='mt-3 font-semibold text-xl mt-2'>Brand</h1>
        <select name="" id="" className='bg-white w-full  p-2 border-gray-200 border-2 rounded-md'>
          {
            brandOnlyData?.map((item,index)=>{
              return(
                <option key={index} value={item} >{item}</option>
              )
            })
          }
        </select>
        {/* price range */}
       <h1 className='mt-3 font-semibold text-xl mt-2'>Price Range</h1>
       <div className='flex flex-col gap-2'>
        <label htmlFor="" className='text-[14px] mt-2 font-semibold'>Price Range : $0 -$5000</label>
        <input type="range"  />
       </div>
       <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-3 font-semibold  cursor-pointer'>Reset Filters</button>

    </div>
  )
}

export default FilterSection
