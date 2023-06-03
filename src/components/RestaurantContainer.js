const styleInline = {
    backgroundColor: "orange"
  };
  
  // We can write directly like below for style.
  // <div className="restaurantCard" style={{ backgroundColor: "orange"}}>
  
  const RestaurantContainer = (props) => {
    const { resName, cuisine, rating, logo, deliveryTime } = props; // object destructuring.
    return (
      <div className="restaurantCard" style={styleInline}>
        <img className="resLogo" alt={resName} src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + logo}></img>
        <h3> {resName}</h3>
        <h4> {cuisine}</h4>
        <h4> {rating} stars </h4>
        <h4> {deliveryTime} Minutes </h4>
      </div>
    );
  };

  export default RestaurantContainer;