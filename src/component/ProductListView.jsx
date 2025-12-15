import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CardContext";

function ProductListView({ product }) {
  const navigate = useNavigate();
  const {addToCard}=useCart()

  function showDate() {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    // console.log(`${day}-${month}-${year}`);
  }

  function showNext4thDay() {
    const d = new Date();
    d.setDate(d.getDate() + 4);

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    console.log(`${day}-${month}-${year}`);
  }

  useEffect(() => {
    showDate();
    showNext4thDay();
  });

  return (
    <div className="space-y-4 mt-2 rounded-md ">
      <div className="bg-gray-200 flex gap-7 items-center p-4 rounded-md ">
        <img
          src={product.image}
          alt={product.title}
          className="h-60 w-50 rounded-md cursor-pointer "
          onClick={() => navigate(`/products/${product._id}`)}
        />
        <div className="space-y-2">
          <h1 className="font-bold text-xl line-clamp-3 hover:text-red-500 w-full">
            {product.title}
          </h1>
          <p className="font-medium">{product.description}</p>
          <p className="font-semibold flex items-center text-lg ">
            <span className="text-3xl">{product.price}</span>
            <span className="text-sm">({product.discountedPrice}% off)</span>
          </p>
          {/* <p className="text-sm font-bold">
            FREE Delivery Fri,{new Date().toDateString()} <br />
            Delivery  {new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toDateString()}
          </p> */}
          <p className="text-sm ">
            FREE Delivery Fri,{" "}
            <span className="font-semibold"> {new Date().toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
            })} </span>
            <br />
            Or fasetest Delivery   {" "}
           <span className="font-semibold"> Tomorrow , {new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toLocaleDateString(
              "en-IN",
              {
                weekday: "short",
                day: "numeric",
                month: "short",
              }
            )}
            </span>
          </p>

          <button onClick={()=>addToCard(product)} className="bg-red-500 text-white  px-4 mt-3 py-2 rounded-md font-medium cursor-pointer">
            Add to Card
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductListView;
