import { HEADER_LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  const [ btnName, setBtnName ] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            alt="Only for Practise"
            src={HEADER_LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
              <li>Home</li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
              <Link to="/contact">Contact Us</Link>  
              </li>
              <li>Cart</li>
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