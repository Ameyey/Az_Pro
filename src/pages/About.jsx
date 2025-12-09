import React from "react";
import Products from "./Products";
import { Link, Navigate ,NavLink }from 'react-router-dom'


const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-6 py-10">
      <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-lg">
        
        {/* Website Name */}
        <h1 className="text-4xl font-bold text-gray-800 mb-2"><span className="text-red-500 font-serif">A</span><span className="font-serif">z</span> Shopping</h1>
        <p className="text-gray-500 mb-6">Your Trusted Online Shopping Partner</p>

        {/* About Az */}
        <h2 className="text-2xl font-semibold text-red-500 mb-3"><strong>About <span className="font-serif">A</span><span className="text-black font-serif">z</span></strong> </h2>
        <p className="text-gray-600 leading-relaxed mb-6 font-semibold">
          Welcome to <strong><span className="text-red-500 font-semibold">A</span>z</strong>, your one-stop online shopping platform. 
          We bring you a smooth, fast, and reliable shopping experience using 
          modern technology and clean UI design. At <span className="text-red-500 font-serif">A</span>z, we focus on 
          convenience, quality, and trust.
        </p>

        {/* Why Choose Az */}
        <h2 className="text-2xl font-semibold text-red-500 mb-3">Why Choose <span className="font-serif">A</span><span className="text-black font-serif">z</span>?</h2>
        <ul className="list-disc ml-6 text-gray-600 space-y-2 mb-6 font-semibold">
          <li>High-quality products at the best prices</li>
          <li>Fast and secure checkout process</li>
          <li>Easy product filtering and search</li>
          <li>Responsive design for all devices</li>
          <li>User-friendly and modern interface</li>
        </ul>

        {/* Our Vision */}
        <h2 className="text-2xl font-semibold text-red-500 mb-3">Our Vision</h2>
        <p className="text-gray-600 leading-relaxed mb-6 font-semibold">
          Our vision at <strong className="text-red-500 font-serif">A<span className="font-semibold text-black">z</span></strong> is to build the most reliable and 
          user-focused online shopping ecosystem. We aim to make online 
          shopping simple, accessible, and enjoyable for everyone.
        </p>

        {/* Button */}
       <Link to={"/products"}><button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition" >               
           Explore Products
        </button>
         </Link>
      </div>
    </div>
  );
};

export default About;
