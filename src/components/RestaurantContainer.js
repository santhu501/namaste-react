const styleInline = {
    backgroundColor: "orange"
  };
  
  // We can write directly like below for style.
  // <div className="restaurantCard" style={{ backgroundColor: "orange"}}>
  
  const RestaurantContainer = (props) => {
    const { resName, cuisine, rating } = props; // object destructuring.
    return (
      <div className="restaurantCard" style={styleInline}>
        <img className="resLogo" alt="Biryani express" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpvnHubl7w0TtmNL1yf7l7CsoOpuz_ahJIZBC-nLHjytRIWRdfSIdONvH0i79uJ32o1o&usqp=CAU"></img>
        <h3> {resName}</h3>
        <h4> {cuisine}</h4>
        <h4> {rating} stars </h4>
        <h4> 30 minutes </h4>
      </div>
    );
  };

  export default RestaurantContainer;