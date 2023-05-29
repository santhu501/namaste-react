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

  export default Header;