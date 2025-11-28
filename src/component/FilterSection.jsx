import React from 'react'
import { getData } from '../Context/DataContext'

function FilterSection({search , setSerach  , setBrand , brand ,setCategory , priceReange, setPriceReange ,category ,handleBrandChange ,handleCategoryChange }) {

    const {categoryOnlyData , brandOnlyData ,  brand_name }=getData()  
    // console.log("funciton  "+handleCategoryChange)


  return (
    <div className='bg-gray-80 mt-10 p-4 rounded-md h-max bg-gray-100 '>
      <input type="text"
       placeholder='Search...'
       value={search}
        onChange={(e)=>setSerach(e.target.value)} 
         className='bg-white p-2 rounded-md border-gray-300 border-2'/>

      {/* item  */}
      <h1 className='mt-3 font-semibold text-xl'>Category</h1>
      <div className='flex flex-col gap-2 mt-2'>
        {
          categoryOnlyData?.map((item,index)=>{
            return (
              <div key={index} className='flex gap-2' >
                <input type="checkbox"  
                name={item}
                 checked={category === item}
                  value={item}
                 onChange={handleCategoryChange} />
                <button className='cursor-pointer uppercase'>{item}</button>
              </div>
            )
          })
        }
      </div>
      {/* brand */}
       <h1 className='mt-3 font-semibold text-xl mb-2'>Brand</h1>
        <select name="" id=""
         className='bg-white w-full  p-2 border-gray-200 border-2 rounded-md'
           value={brand} 
           onChange={handleBrandChange}>
          {
            brandOnlyData?.map((item,index)=>{
              return(
                <option key={index} value={item} >{item}</option>
              )
            })
          }
        </select>
        {/* price range */}
       <h1 className='mt-3 font-semibold text-xl mb-2'>Price Range</h1>
       <div className='flex flex-col gap-2'>
        <label htmlFor="" className='text-[14px] mt-2 font-semibold'>Price Range : ${priceReange[0]} -${priceReange[1]}</label>
        <input type="range" name='' id='' max="1000" value={priceReange[1]}  onChange={(e)=>setPriceReange([priceReange[0], Number(e.target.value)])} />
       </div>
       <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-3 font-semibold  cursor-pointer'
       onClick={()=>{setSerach(''); setCategory('All');setBrand('All');setPriceReange([0,5000])}}
       >Reset Filters</button>

    </div>
  )
}

export default FilterSection
