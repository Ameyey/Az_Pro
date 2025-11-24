import React, {  useEffect } from 'react'
import {  getData } from '../Context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Category from './Category';

const CarouseL = () => {

  const{ data , fetchAllProducts}= getData()
  console.log(data)

  useEffect(()=>{
    fetchAllProducts()
  },[])
 
    var settings = {
    dots: false,
    autoplay:true,
    autoplaySpeed:2000,
    infinite: true,
    pauseOnHover:false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
        <Slider {...settings}>
          {
             data?.slice(0,5)?.map((item,index)=>{
              return <div key={index} className='bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10 '>
                <div className='flex gap-10 justify-center h-[470px] items-center  px-4'>
                  <div className='space-y-6'>
                    <h3 className='text-red-500 font-semibold font-sans text-1xl'>{item.brand}</h3>
                    <h1 className='text-4xl font-bold uppercase line-clamp-3 w-[370px] text-white'>{item.title}</h1>
                    <p className='md:w-[500px] line-clamp-3 text-gray-400 pr-7'>{item.description}</p>
                    <button className='bg-gradient-to-r text-2xl  from-red-500 to-white-200 text-black px-3 py-2 rounded-md cursor-pointer mt-2'>Shop Now</button>
                  </div>
                  <div>
                    <img src={item.image} alt={item.type} className='rounded-full w-[300px] hover:scale-10 transition-all shadow-2xl shadow-red-500' />
                  </div>
                </div>
              </div>
             })
          }
     

    </Slider>
    <Category />
    </div>
  )
}

export default CarouseL
