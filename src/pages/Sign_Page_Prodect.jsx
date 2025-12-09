import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
        SingleProduct ? <div></div> :<div className='flex items-center justify-center h-screen'>
        <h1>Loading</h1>   
        </div>
      }
    </div>
  )
}

export default Sign_Page_Prodect
