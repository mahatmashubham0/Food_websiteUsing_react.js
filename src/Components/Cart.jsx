import React from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { clearItem, removeItem } from "../utils/cartSlice";
let image_url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";

const Cart = () => {
  const cartItems = useSelector(store => store.cart.item);
  console.log(cartItems);

  const dispatch = useDispatch()
  const removeHandle = () => {
    console.log("Remove")
     dispatch(removeItem())
  }

  return (
    <div className="mt-24">
      <button
      onClick={()=>{dispatch(clearItem())}}
      className="cursor-pointer mx-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:foc"
      >Clear cart</button>


      <div className="flex flex-wrap flex-row justify-center items-center gap-4">
        {cartItems.length === 0 ? <>

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Add to the Meal and Book Now</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise Food acquisitions of 2024 so far, in reverse chronological order.</p>
    <a href="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Return to Home
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>

        
        
        
    </> : 
        
        
        
        
        
        
        
        
        
        
        
        
        cartItems.map((item) => (
          <div class="max-w-[500px]">
            <div className="w-[350px] m-[20px] bg-white cursor-pointer border hover:scale-100 rounded-md scale-95 shadow-lg p-[10px]">
            <a href="#">
              <img
                class="rounded-t-lg w-full h-[214px] bg-white cursor-pointer border hover:scale-100 rounded-md scale-95 shadow-lg p-[10px]"
                src={`${image_url}/${item.imageId}`}
                alt=""
                // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZylLZLdEOnpA7xCFv_tEqFvcThCY70wK7Q&s"
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                 {item.name}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 text-ellipsis whitespace-nowrap">
                {item.description}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={()=>alert("Booked successfully")}
              >
                Order now
                <svg
                  class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
              <a 
               className="cursor-pointer mx-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               onClick={()=>removeHandle()}
              >Remove from cart</a>
            </div>
            </div>
          </div>



        ))}
      </div>
    </div>
  );
};

export default Cart;
