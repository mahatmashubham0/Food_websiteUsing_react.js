import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import useOffline from "../Hooks/useOffline";
import useLocalStorage from "../Hooks/useLocalStorage";
import useAuth from "../Hooks/useAuth";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
// import store from "../utils/store";

const Header = () => {
  const styleHeaderObj = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor : '#ffc000',
    // #ff8b00
    padding: "0 1rem",
  };

  const {user} = useContext(userContext);

  const cartItems = useSelector(store => store.cart.item)


  // call custom hook useLocalStorage for getting localStorage value of user
  const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

  // call custom hook useAuth for user is loggedin or not
  const [isLogged, setIsLogged] = useAuth();

//   const [isLogged, setIsLogged] = useState(true);

  // https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.24870&lng=77.40660&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING

  return (
    <div
      className="flex items-center mx-auto header border bg-white text-black"
      header
    >
      <div
        className="flex flex-row items-center justify-center max-w-maxContent w-11/12"
        style={styleHeaderObj}
      >
        <div className="navbar-right cursor-pointer flex items-center">
          <Link to={"/"}>
            <img
              alt="logo"
              style={{ width: "80px", borderRadius: "100%" }}
              data-testid = "logo"
              src={
                "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png"
              }
            />
          </Link>
          <p className="text-[10px] md:text-lg">Welcome: {user?.name}</p>
        </div>

        <div className="navbar-center cursor-pointer font-bold md:block hidden">
          <ul>
            <Link to={"/"}>
              <li>Home</li>
            </Link>
            <Link to={"/about"}>
              <li>About us</li>
            </Link>
            <Link to={"/contact"}>
              <li>Contact</li>
            </Link>
            <Link to={"/cart"}>
              <li>Cart: {cartItems.length} Items</li>
            </Link>
          </ul>
        </div>

        <div className="navbar-left cursor-pointer font-bold block ">
          {!isLogged ? " Login" : " Logout"}
          <span className="ml-4" data-testid="online-status">Online Status:</span>
          {useOffline ? " 🔵" : " 🔴"}
        </div>
      </div>
    </div>
  );
};

export default Header;
