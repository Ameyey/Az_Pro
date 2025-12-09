import React, { useEffect, useState } from 'react'
import { getData } from '../Context/DataContext'
import FilterSection from '../component/FilterSection'
import ProductsCard from '../component/ProductsCard'
import Pagination from '../component/Pagination'
import Lottie from 'lottie-react'
 import Not_Found from '../assets/Empty box.json'

// import Loading from '' // video type .webm 
const Loading =null
function Products() {
  const {data  ,fetchAllProducts }=getData()
  const [search , setSerach]=useState("")
  const [category , setCategory] = useState("All")
  const [brand ,setBrand]=useState('All')
  const [priceReange ,setPriceReange]= useState([0 ,5000])
  const [page , setpage]=useState(1)

  
  useEffect(()=>{
  fetchAllProducts()
  },[])

  const handleCategoryChange =(e)=>{
   setCategory(e.target.value)
         setpage(1)

  }

  const handleBrandChange = (e)=>{
   setBrand(e.target.value)
   setpage(1)
  }

  const pageHandler =(selectPage)=>{
      setpage(selectPage)

  }

    const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
   (category === "All" || item.category === category) &&
   (brand === "All" || item.brand === brand )  &&
   item.price >= priceReange[0] && item.price <=priceReange[1]
  )

  const dynamicPage = Math.ceil(filteredData?.length / 8) 
  
  console.log(filteredData)


  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10 '>
        {
      data?.length>0 ? (
        <>
        <div className='flex gap-8'>
          <FilterSection search={search} setSerach={setSerach} brand={brand}  setBrand={setBrand} priceReange={priceReange} setPriceReange={setPriceReange} category={category} setCategory={setCategory} handleCategoryChange={handleCategoryChange} handleBrandChange={handleBrandChange} />
          {
            filteredData?.length > 0 ? (
              <div className='flex flex-col justify-center items-center'>
                 <div className='grid grid-cols-4 gap-7 mt-10'>
            {
             filteredData?.slice(page * 8-8 ,page * 8).map((product,index)=>{
              return <ProductsCard key={index} product={product} />
             }) 
            }
          </div>
           <Pagination pageHandler={pageHandler} page={page} dynamicPage={dynamicPage}  />
            </div>

            ):(
              <div className='flex justify-center items-center md:h-[600px] md:w-[900px] mt-10'>
                <Lottie animationData={Not_Found} classID='w-[500px]' />
              </div>
            )
          }
         
        </div>

        </>
        
      ):(
        <div className='flex items-center justify-center h-[400px]'>
          <video muted autoPlay loop>
            <source  src={Loading} type='video/webm'/>
            <h1>No </h1>
          </video>
        </div>
      )
        }
      </div>
    </div>
  )
}

export default Products
