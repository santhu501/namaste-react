
  const styleInline = {
    backgroundColor: "orange"
  };
  
  // We can write directly like below for style.
  // <div className="restaurantCard" style={{ backgroundColor: "orange"}}>
  
  const RestaurantContainer = (props) => {
    const { resName, cuisine } = props; // object destructuring.
    return (
      <div className="restaurantCard" style={styleInline}>
        <img className="resLogo" alt="Biryani express" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMpvnHubl7w0TtmNL1yf7l7CsoOpuz_ahJIZBC-nLHjytRIWRdfSIdONvH0i79uJ32o1o&usqp=CAU"></img>
        <h3> {resName}</h3>
        <h4> {cuisine}</h4>
        <h4> 4.5 stars </h4>
        <h4> 30 minutes </h4>
      </div>
    );
  };

  const resList = [
    {
      id: 1,
      resName: "Your Authentic Biryani",
      cuisine: "Indian, Chinese"
    },
    {
      id: 2,
      resName: "Your Next Biryani",
      cuisine: "Indian, Chinese, Thai"
    }
  ];

// When we keep components in a loop, each component should have a unique key. 
// Without a unique key, react cannot uniquely differentiate a component. If we add few more restaurants, react will re-render all components again which is a performance issue.
// React does not recommented us to use loop index as the key like 0, 1, 2 etc. resList.map( (restaurant, index) => () ). if the order of restaurants can change, it will be an issue. A unique key is always a best approach.


const Body = () => {
    return (
      <div className="body">
        <div className="search">Search</div>
        <div className="restaurantContainer">             
          {resList.map( ( restaurant ) => ( < RestaurantContainer key={restaurant.id} resName={restaurant.resName} cuisine={restaurant.cuisine} /> )      
          )}
        </div>
      </div>
    );
  };

  export default Body;