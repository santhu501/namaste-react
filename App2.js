import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of restaurant, Star rating, Cuisine, Delivery time etc.
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Only for Practise"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaA7cCWhRNuAOOzw0YRD2O_xi9CCMOQyKYUfuJbObF7uesA_aaQYq5IjhaN73aeav9WYw&usqp=CAU"
        />
      </div>
      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleInline = {
  backgroundColor: "orange"
};

// We can write directly like below for style.
// <div className="restaurantCard" style={{ backgroundColor: "orange"}}>

const RestaurantContainer = () => {
  return (
    <div className="restaurantCard" style={styleInline}>
      <img className="resLogo" alt="Biryani express" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpvnHubl7w0TtmNL1yf7l7CsoOpuz_ahJIZBC-nLHjytRIWRdfSIdONvH0i79uJ32o1o&usqp=CAU"></img>
      <h3> Your authentic biryani</h3>
      <h4> Indian, Chinese</h4>
      <h4> 4.5 stars </h4>
      <h4> 30 minutes </h4>
    </div>
  );
};


const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantContainer/>
      </div>
    </div>
  );
};

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);