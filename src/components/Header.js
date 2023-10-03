import { HEADER_LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from "./useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [ btnName, setBtnName ] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  // Subscribing to the redux store using a selector.
  // selector is used to read the contents from the redux store.
  const cartItems = useSelector((store) => store.cart.items);
 

  // we can use device specific colors ( media queries based on tablet or mobile or laptop) using sm(devices greater than small) lg( devices greater than larger).
    return (
      <div className="flex justify-between bg-green-200 sm:bg-pink-200 lg:bg-orange-200">
        <div className="logo-container">
          <img
            className="w-56"
            alt="Only for Practise"
            src={HEADER_LOGO_URL}
          />
        </div>
        <div className="flex justify-between items-center">
          <ul className="flex p-4 m-4">
            <li className="px-3">
              Online Status: {onlineStatus ? "🟢" : "🟥"}
            </li>
            <li className="px-3">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3">
              <Link to="/about">About Us</Link>
            </li>
            <li className="px-3">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="px-3">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="px-3 font-bold">
            <Link to="/cart">Cart - {cartItems.length} Items</Link>
             </li>              
            <button className="Login"
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
              }}>
                {btnName}
              </button>
              <li className="px-3 font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;