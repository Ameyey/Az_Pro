import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'
import FilterSection from '../component/FilterSection'
import ProductsCard from '../component/ProductsCard'
// import Loading from '' // video type .webm 
const Loading =null
function Products() {
  const {data  ,fetchAllProducts }=getData()
  
  useEffect(()=>{
  fetchAllProducts()
  },[])
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 '>
        {
      data?.length>0 ? (
        <div className='flex gap-8'>
          <FilterSection />
          <div className='grid grid-cols-4 gap-7 mt-10'>
            {
             data?.map((product,index)=>{
              return <ProductsCard key={index} product={product} />
             }) 
            }
          </div>
        </div>
      ):(
        <div className='flex items-center justify-center h-[400px]'>
          <video muted autoPlay loop>
            <source  src={Loading} type='video/webm'/>
          </video>
        </div>
      )
        }
      </div>
    </div>
  )
}

export default Products
