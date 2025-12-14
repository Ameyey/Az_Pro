import { createContext, useContext, useState } from "react";

export const CardContext = createContext(null)

export const CartProvider = ({children}) =>{
  const [cardItem  , setCardItem]= useState([])

  const addToCard = (product)=>{
    const itemInCard = cardItem.find((item)=>item._id === product._id)
    if(itemInCard){
      // Increase quesntity if already in Card

      const updatedCart  = cardItem.map((item)=>item._id === product._id ?{...item , quantity: item.quantity + 1}:item
    );     
     setCardItem(updatedCart)
    } else{
      // add Card in item total + 1 
        setCardItem([...cardItem ,{...product , quantity: 1}])
    }
  }

  const updateQuantity = (cardItem, productId , action) =>{
   setCardItem(cardItem.map(item =>{
      if(item._id === productId){
        let newUnit = item.quantity;
        if(action === "increse"){
          newUnit = newUnit + 1
        }else if(action === "decrease"){
          newUnit = newUnit - 1 
        }
        return newUnit > 0 ? {...item , quantity: newUnit } : null
      }
      return item;
    }).filter(item => item != null)
  )
  }

  return <CardContext.Provider value={{cardItem , setCardItem , addToCard ,updateQuantity }}>
    {children}
  </CardContext.Provider>
}

export const useCart = () =>useContext(CardContext)