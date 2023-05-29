
import RestaurantContainer from "./RestaurantContainer";

  const resList = [
    {
      id: 1,
      resName: "Biryani Palace",
      cuisine: "Indian, Chinese"
    },
    {
      id: 2,
      resName: "Biryani Pot",
      cuisine: "Indian, Chinese, Thai"
    },
    {
        id: 3,
        resName: "Aahar Biryani",
        cuisine: "Indian, Japanese"
    },
    {
        id: 4,
        resName: "Signature Biryani",
        cuisine: "Indian, Thai"
    },
    {
        id: 5,
        resName: "Your Authentic Biryani",
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