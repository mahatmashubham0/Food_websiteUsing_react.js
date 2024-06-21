import React from "react";

const RestuarantItem = ({data}) => {

   let image_url = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660'

    const {name , areaName , cloudinaryImageId , cuisines , costForTwo , avgRatingString} = data?.info
  return (
    <div className="container">
      <div className="w-[240px] m-[20px] bg-white cursor-pointer border hover:scale-100 rounded-md scale-95 shadow-lg p-[10px]">
        <img src={`${image_url}/${cloudinaryImageId}`} className="w-[100%] h-[214px] object-cover rounded-lg box-border overflow-x-hidden" alt="food-image" srcset="" />
        <h1 className="text-ellipsis font-semibold overflow-hidden whitespace-nowrap">{name}</h1>
        <div className="flex justify-between font-semibold gap-2 text-gray-500 my-1 text-sm items-center">
          <h4>{areaName}</h4>
          <h3 className="bg-[#ff5c0d] p-1 rounded-lg mr-2 text-white">⋆ {avgRatingString}</h3>
        </div>
        <h4 className="text-sm font-semibold text-gray-500">{costForTwo}</h4>
        <h2 className="text-ellipsis overflow-hidden whitespace-nowrap text-gray-500 text-sm">{cuisines.join(', ')}</h2>
      </div>
    </div>
  );
};

export default RestuarantItem;
