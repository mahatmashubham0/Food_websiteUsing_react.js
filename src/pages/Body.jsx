import React, { useEffect, useState } from "react";
import RestuarantItem from "../Components/RestuarantItem";
import Simmer from "../Components/Simmer";
import { Link } from "react-router-dom";
import {filterRestaurantFromAllRestaurant} from '../utils/helper'
import { SWIGGY_MAIN_API } from "../utils/contants";
import UserOffline from "../Components/UserOffLine";
import useOffline from "../Hooks/useOffline";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [toggle, setToggle] = useState(false);
  const [erroeMessage, setErrorMessage] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [filterRestaurant, setFilterRestaurant] = useState([]);

  console.log("render");
  useEffect(() => {
    console.log("useEffect");
    getAllRestaurantData();
  }, []);

  const getAllRestaurantData = async () => {
    const data = await fetch(
      SWIGGY_MAIN_API
    );
    const json = await data.json();
    console.log(json);
    console.log(json.data.statusMessage);

    function checkJsonData(jsonData) {
      for (let i = 0; i < jsonData?.data?.cards.length; i++) {
        // initialize checkData for Swiggy Restaurant data
        let checkData =
          json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;

        // if checkData is not undefined then return it
        if (checkData !== undefined) {
          return checkData;
        }
      }
    }

    let resData = checkJsonData(json);
    setRestaurant(resData);
    setFilterRestaurant(resData);
    console.log("==>", restaurant);
  };

  const searchData = (searchText, restaurant) => {
    if (searchText !== "") {
      const filterData = filterRestaurantFromAllRestaurant(searchText, restaurant);
      setFilterRestaurant(filterData);
      if (filterData?.length === 0) {
        setErrorMessage(
          `Sorry, we couldn't find any results for "${searchText}"`
        );
      }
    } else {
      setErrorMessage("");
      setFilterRestaurant(restaurant);
    }
  };

  const offline = useOffline()

  if(!offline) {
    return <div><UserOffline /></div>
  }

  return (
    <div className="my-[40px] mt-[80px]">
      <div className="search-input mt-7 w-full flex items-center">
        <h1 className="py-2 md:px-6 px-3  rounded-md border text-center font-bold uppercase md:text-2xl mx-2 md:mx-0 text-sm">
          {toggle === false ? "🥰" : "😜"}
        </h1>

        <div className="input flex items-center my-6 mx-auto w-[60%] md:w-[40%] border shadow-lg">
          <input
            className="w-full outline-none border-none text-center py-2 font-semibold text-ellipsis"
            type="text"
            value={searchText}
            name=""
            placeholder="Search a Restaurant you want.."
            id=""
            onChange={(e) => {
              setSearchText(e.target.value);
              searchData(e.target.value, restaurant);
            }}
          />
          <button
            className="py-2 px-6 md:px-10 rounded-md border bg-[#ff5c0d]"
            onClick={() => {
              // need the filter the data
              const data = filterRestaurantFromAllRestaurant(searchText, restaurant);
              // update the state
              setFilterRestaurant(data); // when we got the filter data rerender the current component and show filter restuarant
            }}
          >
            Search
          </button>
        </div>

        <button
          className="py-[0.7rem] px-2 md:px-6 rounded-md relative right-2 md:right-36 text-[12px] md:text-[16px] mx-2 md:mx-0 border bg-[#ff5c0d]"
          onClick={() => setToggle((prev) => !prev)}
        >
          Change Mood
        </button>
      </div>

      {erroeMessage && (
        <h1 className="font-bold text-center my-8 ">{erroeMessage}</h1>
      )}

      {filterRestaurant.length === 0 ? (
        <Simmer />
      ) : (

        <div className="flex w-full items-center justify-center">
          <div className="flex flex-row flex-wrap w-auto justify-center items-center ">
            {(filterRestaurant).map((item) => {
              // console.log(item)
              return (
                <Link to={'/restaurant/'+item?.info?.id}>
                  <RestuarantItem key={item?.info?.id} data={item} />
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
    );
};

export default Body;
