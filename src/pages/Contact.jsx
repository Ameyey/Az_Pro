import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full bg-gray-50 px-6 py-16">

      {/* Top Title */}
      <h1 className="text-center text-5xl font-extrabold text-gray-900 mb-10">
        <span className="text-red-500 ">A</span>z Website – <span className="text-red-500">Welcome !!</span>
      </h1>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200 
                      grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Left Side - Contact Info */}
        <div className="bg-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8 text-lg">
            Powering Your World with the Best in Shooping.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact Info</h2>

          <p className="text-gray-700 mb-3">
            <strong>Address:</strong><br />
            123 Electronics St, Style City, NY 10001
          </p>

          <p className="text-gray-700 mb-3">
            <strong>Email:</strong> support@Az.com
          </p>

          <p className="text-gray-700">
            <strong>Phone:</strong> (123) 456-7890
          </p>
        </div>

        {/* Right Side - Form */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>

          <form className="space-y-5">

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Email</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">Your Message</label>
              <textarea
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 shadow-sm"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-red-500 text-white w-full py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-red-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;
