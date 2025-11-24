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

  return <DataContext.Provider value={{data , setData ,fetchAllProducts }}>
    {children}
  </DataContext.Provider>
}

export const getData= ()=>useContext(DataContext)