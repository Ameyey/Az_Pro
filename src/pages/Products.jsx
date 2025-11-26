import React, { useEffect } from 'react'
import { getData } from '../Context/DataContext'

function Products() {
  const {data  ,fetchAllProducts }=getData()
  
  useEffect(()=>{
  fetchAllProducts()
  },[])
  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10'>
        {
      data?.length>0 ? (
        <div>

        </div>
      ):(
        <div>
          <h1>No item Found</h1>
        </div>
      )
        }
      </div>
    </div>
  )
}

export default Products
