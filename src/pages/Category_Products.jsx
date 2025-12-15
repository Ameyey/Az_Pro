import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
// import Loading from "../assets/Loading4.webm"
import { ChevronLeft } from 'lucide-react'
import ProductListView from '../component/ProductListView'

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([])
  const params = useParams()
  const category = params.category
  const navigate = useNavigate()

  const getFilterData = async ()=>{
    try {
      const res = await axios.get(`https://fakestoreapiserver.reactbd.org/api/products/?type=category=${category}`)
      const data1 = res.data.data
      console.log(data1)
      setSearchData(data1)

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getFilterData()
    window.scrollTo(0,0)
  },[])
  
  return (

    <div>
        {
        searchData.length > 0 ? (
          <div className='max-w-6xl mx-auto mt-10 mb-10 px-4'>
             <button onClick={()=>navigate('/')} className='bg-red-500 mb-5 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft/> Back</button>
             {
              searchData.map((product, index) =>{
                return <ProductListView key={index} product={product}/>
              })
             }
          </div>
        ):(
          <div className='flex items-center justify-center h-[400px]'>
             <video muted autoPlay loop>
              {/* <source src="" type='video/webm'/> */}
              <h1>Lodi</h1>
             </video>
          </div>
        )
      }
    </div>
  )
}

export default CategoryProduct