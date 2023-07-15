import { HEADER_LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from 'react-router-dom';
import useOnlineStatus from "./useOnlineStatus";

const Header = () => {
  const [ btnName, setBtnName ] = useState("Login");
  const onlineStatus = useOnlineStatus();
    return (
      <div className="flex justify-between bg-orange-200">
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
            <li className="px-3">Cart</li>
              <button className="Login"
              onClick={() => {
                btnName === "Login" ? setBtnName("Logout"): setBtnName("Login");
              }}>
                {btnName}
              </button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;