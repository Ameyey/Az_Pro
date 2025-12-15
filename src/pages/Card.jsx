import React, { useEffect, useState } from "react";
import { useCart } from "../Context/CardContext";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuNotebookText } from "react-icons/lu";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import Loading from "../assets/Loading.json"
import Lottie from "lottie-react";

function Card({getLocation , location}) {
  const { cardItem ,updateQuantity ,deleteItem } = useCart();
  const [ random , setrandom]=useState(0)
 
  const {user}=useUser()

  const navigate= useNavigate()
  

  let Delivery = Math.floor(Math.random()*100.00)
  let Handling =Math.floor(Math.random() * (60 - 10 + 1)) + 10

  const totalPrice= cardItem.reduce((total , item)=>total +item.price,0)



  return (
    <div className="mt-10 max-w-6xl mx-auto mb-5">
      {cardItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl">My Card ({cardItem.length})</h1>
          <div>
            <div className="mt-10">
              {cardItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-md flex items-center justify-between mt-3 w-auto"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-md"
                      />
                      <div>
                        <h1 className="font-bold text-1xl text-gray-500">
                          {item.brand}
                        </h1>
                        <h1 className="w-[300px] line-clamp-2 ">
                          {item.title}
                        </h1>
                        <p className="text-red-500 font-semibold text-lg">
                          ${item.price}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-500 text-white flex gap-4 p-1 rounded-md font-bold text-xl">
                      <button onClick={()=>updateQuantity( cardItem, item._id ,"decrease")} className="cursor-pointer" >-</button>
                      <span>{item.quantity}</span>
                      <button onClick={()=>updateQuantity( cardItem, item._id ,"increse" )} className="cursor-pointer" >+</button>
                    </div>
                    <span onClick={()=>deleteItem(item._id)} className="hover:bg-white/60 transition-all rounded-full p-3 hover:shadow-2xl   ">
                      <FaRegTrashAlt className="text-red-500 text-1xl m-2 cursor-pointer" />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-20">
              <div className="bg-gray-100 rounded-md mt-4 space-y-2 shadow-2xl w-max ">
                <h1 className="text-gray-500 font-bold text-xl p-3 ">
                  Delivery Info
                </h1>
                <div className="flex flex-col space-y-1 p-3 ">
                  <label htmlFor="">Full Name</label>
                  <input
                    value={user.fullName}
                    type="text"
                    name="FullName"
                    placeholder="Enter a Name"
                    className="text-gray-400 p-2 font-bold rounded-md"
                  />
                </div>
                <div className="flex flex-col space-y-1 p-3">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    name="Address"
                    value={`${location.suburb} ${location.town} ${location.state_district} ${location.postcode}. ${location.state} ..`}
                    placeholder="Enter a Address"
                    className="text-gray-400 p-2 font-bold rounded-md"
                  />
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 p-3 w-full">
                    <label htmlFor="">State</label>
                    <input
                      value={location.state}
                      type="text"
                      name="State"
                      placeholder="Enter a State"
                      className="text-gray-400 p-2 w-full font-bold rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 p-3 w-full">
                    <label htmlFor="">Post Code</label>
                    <input
                    value={location.postcode}
                      type="text"
                      name="PostCode"
                      placeholder="Enter a Post Code"
                      className="text-gray-400 p-2 w-full font-bold rounded-md"
                    />
                  </div>
                </div>
                <div className="flex w-full gap-5">
                  <div className="flex flex-col space-y-1 p-3 w-full">
                    <label htmlFor="">Country</label>
                    <input
                    value={location.country}
                      type="text"
                      name="Country"
                      placeholder="Enter a Country"
                      className="text-gray-400 p-2 w-full font-bold rounded-md"
                    />
                  </div>
                  <div className="flex flex-col space-y-1 p-3 w-full">
                    <label htmlFor="">Phone No :- </label>
                    <input

                      type="text"
                      name="PhoneP_No"
                      placeholder="Enter a Number"
                      className="text-gray-400 p-2 w-full font-bold rounded-md"
                    />
                  </div>
                </div>
                <button className="bg-red-500 px-3 m-3 text-white py-1 rounded-md mt-3 cursor-pointer ">
                  Submit
                </button>
                <div className="flex items-center justify-center w-full text-gray-700">
                  -----------OR--------------
                </div>
                <div className="flex justify-center m-3">
                  <button className="bg-red-500 text-white px-3 py-2 rounded-md" onClick={getLocation}>
                    Delect Location
                  </button>
                </div>
              </div>
              <div className="bg-gray-100 rounded-md mt-4 m-2 space-y-2 p-4 shadow-2xl h-max ">
                <h1 className="text-gray-500 font-bold text-xl p-3">Bill Details</h1>
                <div className="flex justify-between items-center px-8">
                  <h1 className="flex gap-2 items-center text-gray-700 font-bold text-1xl"><span><LuNotebookText /></span>Item total</h1>
                  <p className="font-black">${totalPrice}</p>
                </div>
                <div className="flex justify-between items-center px-8">
                  <h1 className="flex gap-2 items-center text-gray-700 font-bold text-1xl"><span><MdOutlineDeliveryDining /></span>Delivery Charage</h1>
                  <p><span className="text-gray-500 font-bold line-through">${Delivery}</span>  <span className="text-red-500 font-bold">FREE</span></p>
                </div>
                  <div className="flex justify-between items-center px-8">
                  <h1 className="flex gap-2 items-center text-gray-700 font-bold text-1xl"><span><GiShoppingBag /></span>Handling Charage</h1>
                  <p><span className="text-red-400 font-bold ">${Handling}</span></p>
                </div>
                <hr className="text-gray-400 mt-2 " />
                <div className="flex justify-between items-center px-6">
                  <h1 className="font-bold text-1xl text-gray-700 px-7">Grand Total</h1>
                  <p className="text-black font-bold text-lg">${totalPrice + 0 + Handling }</p>
                </div>
                <div>
                  <h1 className="font-bold text-gray-700 px-3 mb-3 mt-7 text-1xl ">Apply Promo Code</h1>
                  <div className="flex gap-3 px-4">
                    <input type="text"  placeholder="Enter Code" className="text-1xl  px-4 font-bold rounded-md w-full "/>
                    <button className="bg-red-500 text-white rounded-md border-gray-200 px-7 cursor-pointer py-2 ">Applet</button>
                  </div>
                </div>
                <button className="bg-red-500 my-2  text-white px-3 py-2 rounded-md w-full cursor-pointer" >Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>

        <div className="flex flex-col gap-3 justify-center items-center h-[400px] font-bold text-4xl ">
          <h1 className="text-red-500 text-shadow-2xs ">Oh on! Your cart is empty</h1>
          <Lottie animationData={Loading} className="w-[320px] " />
          <button onClick={()=>navigate('/products')} className="text-sm font-bold text-white bg-red-500 px-3 py-2  rounded-2xl shadow-2xs cursor-pointer">Continue Shopping</button>
          </div>
          </>
      )}
    </div>
  );
}

export default Card;
