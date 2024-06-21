import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import { Link } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="mt-24">
      {/* <Outlet /> */}
      {/* <Profile />  */}
      {/* we can add component using both way on this url localhost//1234/about/profile */}

      <div className="flex items-center w-full">
        <div className="max-w-screen-lg w-11/12 mx-auto">
          {show ? (
            <>
              <Link to={"/about"} className="text-xl">
                <button
                  className="about-profile-button text-center bg-yellow-400 text-4xl my-4 py-1 px-2 rounded-lg"
                  onClick={() => setShow((prev) => !prev)}
                >
                  Hide My Profile
                </button>
              </Link>
              <Profile name={"mahatmashubham0"}/>
            </>
          ) : (
            <>
              <Link to={"profile"}>
                <button
                  className="about-profile-button text-center bg-yellow-400  text-4xl my-4 py-1 px-2 rounded-lg"
                  onClick={() => setShow(true)}
                >
                  Show My Profile
                </button>
              </Link>
            </>
          )}

          <div className="about-container w-full flex flex-col md:flex-row ">
            <div className="about-right md:w-[50%] w-[80%] mx-auto
             rounded-2xl bg-red-200">
              <img
                src={
                  "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
                }
                alt="Food Image"
                className="w-full h-[450px] rounded-lg object-conver"
              />
            </div>
            <div className="about-left flex flex-col items-center mx-auto">
              <h1 className="text-[60px]">
                Welcome to <br /> The world of <br />
                <span>Tasty & Fresh Food</span>
              </h1>
              <h4 className="text-[20px]">
                "Better you will feel if you eat a Food<span>Fire</span> healthy
                meal"
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
