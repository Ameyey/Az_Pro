import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { MapPin } from "lucide-react";
import React from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../Context/CardContext";

function Nabar({ location , getLocation , opernDropdown ,setOpernDropdown}) {
  // console.log(location)
  const {cardItem} = useCart()
  const toggleDropdown = () => {
    setOpernDropdown(!opernDropdown);
  };

  return (
    <div className="bg-white py-2 shadow-2xl ">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* logo  */}
        <div className="flex gap-7 items-center ">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">A</span>z
            </h1>
          </Link>
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center text-[16px]">
            <MapPin className="text-black-500" />
            <span className="font-semibold ">
              {location ? (
                <div className="-space-y-1">
                  <p>{location.state}</p>
                  <p> {location.city}</p>
                </div>
              ) : (
                "Add Address"
              )}
            </span>
            <FaCaretDown onClick={() => toggleDropdown()} />
          </div>
          {opernDropdown ? (
            <div className="w-[240px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md">
              <h1 className="font-black mb-3 text-1xl flex justify-between ">
                Change Location
                <span onClick={toggleDropdown}>
                  <CgClose />
                </span>
              </h1>
              <button onClick={getLocation} className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400 ">Detect my Location</button>
            </div>
          ) : null}
        </div>
        {/* menu section  */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-4 items-center text-[12`px]">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Products</li>
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>About</li>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "border-b-2 transition-all border-red-500"
                    : "text-black"
                } cursor-pointer`
              }
            >
              <li>Contact</li>{" "}
            </NavLink>
          </ul>
          <Link to={"/Card"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              {cardItem.length}
            </span>
          </Link>
          <div>
            <SignedOut>
              <SignInButton className="bg-red-500 text-white py-[7px] px-[16px] rounded-md cursor-pointer" />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nabar;
