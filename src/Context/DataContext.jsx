import axios from "axios";
import {  createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider= ({children})=>{
  const [data ,setData]=useState()

  // fetching all product in Api
  const fetchAllProducts = async()=>{
      try {
        const res = await axios.get("https://fakestoreapiserver.reactbd.org/api/products")
        console.log(res.data.data)
        const productsData=res.data.data
        setData(productsData)
      } catch (error) {
        console.log(error)
      }  
  }

  const getUniqueCategory = (data,property)=>{
      let newVAl = data?.map((curElem)=>{
        return curElem[property]
      })
       return newVAl = ["All",...new Set(newVAl)]
    }
  
    const categoryOnlyData = getUniqueCategory(data,"category")
    const brandOnlyData=getUniqueCategory(data,"brand")
    // console.log(categoryOnlyData); 

  return <DataContext.Provider value={{data , setData ,fetchAllProducts  , categoryOnlyData , brandOnlyData}}>
    {children}
  </DataContext.Provider>
}

export const getData= ()=>useContext(DataContext)