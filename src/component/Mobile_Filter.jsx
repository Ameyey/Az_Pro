import React from 'react'
import { FaFilter } from 'react-icons/fa6'
import { getData } from '../Context/DataContext'

function Mobile_Filter({setOpenFilter , openFilter , search , setSerach  , setBrand , brand ,setCategory , priceReange, setPriceReange ,category ,handleBrandChange ,handleCategoryChange }) {
      const {categoryOnlyData , brandOnlyData  }=getData() 
      
    const toggleFilter = ()=>{
        setOpenFilter(!openFilter)
      }
      console.log(toggleFilter)
  
  return (
    <>
 <div  onClick={toggleFilter} className='bg-gray-100 flex justify-between items-center md:hidden px-4 p-2 mt-5 cursor-pointer'>
      <h1  onClick={toggleFilter}  className='font-medium text-xl'>Filters</h1>
      <FaFilter onClick={toggleFilter} className='text-gray-800 cursor-pointer' />

    </div>
    {
      openFilter ? <div className='bg-gray-100 p-2 md:hidden rounded-xl'>
         <input type="text"
       placeholder='Search...'
       value={search}
        onChange={(e)=>setSerach(e.target.value)} 
         className='bg-white p-2 rounded-md border-gray-300 border-2 w-full '/>
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

 <h1 className='mt-3 font-semibold text-xl mb-2'>Price Range</h1>
       <div className='flex flex-col gap-2'>
        <label htmlFor="" className='text-[14px] mt-2 font-semibold'>Price Range : ${priceReange[0]} -${priceReange[1]}</label>
        <input type="range" name='' id='' max="1000" value={priceReange[1]}  onChange={(e)=>setPriceReange([priceReange[0], Number(e.target.value)])} />
       </div>
       <button className='bg-red-500 text-white rounded-md px-3 py-1 mt-3 font-semibold  cursor-pointer'
       onClick={()=>{setSerach(''); setCategory('All');setBrand('All');setPriceReange([0,5000]); setOpenFilter(false
        
       )}}
       >Reset Filters</button>


      </div>:null
    }
    </>
   
  )
}

export default Mobile_Filter
