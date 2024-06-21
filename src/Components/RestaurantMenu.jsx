import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantData from "../Hooks/useRestaurantData";
import { MenuShimmer } from "./Simmer";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
let image_url =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  console.log(id);

  const [restaurant, menuItems] = useRestaurantData(id);

  const dispatch = useDispatch()
  const handleClick = (item) => {
    console.log(item)
    dispatch(addItem(item));
  }

  console.log("==>", restaurant);
  console.log("==>", menuItems);

  return !restaurant ? <MenuShimmer /> : (
    <div className="mt-24 min-h-[80vh]  mx-auto w-11/12 max-w-screen-lg ">
      <div className="h-[240px] justify-center items-center text-white bg-black  flex overflow-y-hidden border">
        <img
          src={`${image_url}/${restaurant?.cloudinaryImageId}`}
          className="md:w-[30%] w-[50%] h-[170px] md:h-[214px] m-4 object-cover border rounded-xl box-border overflow-x-hidden"
          alt="food-image"
          srcset=""
        />
        <div className="flex flex-col gap-4 justify-center w-[70%] m-[20px]">
          <h1 className="text-xl font-bold">{restaurant?.name}</h1>
          <h4 className="text-xl font-bold">
            {restaurant?.cuisines.join(", ")}
          </h4>
          <div className="flex font-semibold md:space-x-10 space-x-4 gap-2 text-gray-500 my-1 text-xl items-center">
            <h3>{restaurant?.areaName}</h3>
            <h3 className="bg-[#ff5c0d] p-1 md:px-4 px-2 text-sm hidden md:block rounded-lg mr-2 text-white">
              ⋆ {restaurant?.avgRatingString}
            </h3>
            <h3 className="md:text-lg text-[15px] font-semibold text-gray-500">
              ${restaurant?.costForTwo}
            </h3>
          </div>
          <button className="block md:hidden gap-4 w-full">
            {/* <span className="rounded-2xl  bg-[#ff5c0d]">star {restaurant?.avgRatingString}</span> */}
            <span className="rounded-full bg-[#ff5c0d] px-10 mr-72">👍</span>
          </button>
        </div>
      </div>

      <div className="resmenu mx-auto ">
        <div className="">
          <div className="recommendetion">
            <h3 className="text-xl font-bold">Recommended</h3>
            <p className="font-semibold text-gray-500 text-lg">
              {menuItems.length}
            </p>
          </div>
          <div className="res-menu flex  flex-col flex-wrap">
            {menuItems.map((item) => {
              return (
                <div className="menu-container">
                  <div className="w-[100%]  gap-4 m-[20px] flex flex-col md:flex-row cursor-pointer border rounded-md scale-95 shadow-2xl p-[10px]">
                    <img
                      src={`${image_url}/${item?.imageId}`}
                      className="w-[100%] h-[214px] md:w-[350px] object-cover rounded-lg box-border overflow-x-hidden"
                      alt="food-image"
                      srcset=""
                    />
                    <div className="text-lg">
                    <h1 className="font-semibold">
                      {item?.name}
                    </h1>
                    <div className="flex justify-between font-semibold gap-2 text-gray-500 my-2 text-sm items-center">
                      <h4>${item?.defaultPrice}</h4>
                    </div>
                    <h4 className="text-sm font-semibold text-gray-500 my-2">
                      {item?.description}
                    </h4>
                    <h2 className=" text-gray-500 text-sm">
                     * {item?.ratings?.aggregatedRating.rating}
                    </h2>
                    <h3 className="bg-[#ff5c0d] p-1 my-2 object-contain rounded-lg mr-2 text-white"
                     onClick={()=>handleClick(item)}
                    >
                      Add to Cart
                      </h3>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
