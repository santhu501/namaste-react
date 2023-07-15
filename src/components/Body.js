
import RestaurantContainer from "./RestaurantContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from 'react-router-dom';
import useOnlineStatus from "./useOnlineStatus"


// When we keep components in a loop, each component should have a unique key. 
// Without a unique key, react cannot uniquely differentiate a component. If we add few more restaurants, react will re-render all components again which is a performance issue.
// React does not recommented us to use loop index as the key like 0, 1, 2 etc. resList.map( (restaurant, index) => () ). if the order of restaurants can change, it will be an issue. A unique key is always a best approach.


const Body = () => {
    
    let [resList, setResList] = useState([]);
    let [filteredResList, setFilteredResList] = useState([]);
    const [searchText, setSearchText] = useState("");

    console.log(searchText);
    
    // a set variable next to the react state variable is required to modify the resList. name can be anything for setter but convention is to use set with same variable name.
    // when a state variable changes, react will re-render the component.

   // useEffect hook takes two arguments. First one is a callback function, second one is a dependency array.
   // useEffect is called after a component is rendered.
   useEffect( () => {
    fetchData();
   }, [] ); 

   // fetch is a function provided by JS engine of browsers but not directly by javascript.
   const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();    

    
    const newResList = json?.data?.cards[2]?.data?.data?.cards;   // optional chaining    
    setResList(newResList);
    setFilteredResList(newResList);
    console.log(newResList);
   }

   const onlineStatus = useOnlineStatus();

   if(onlineStatus === false){
    return( <h1>Your internet seems to be disconnected, please check back again later.</h1> );
   }

   // Condtional rendering.
    return resList.length === 0 ? <Shimmer /> : (
      <div className="body">      
        <div className="filter flex">
          <div className="search m-4 p-4">
            <input type="text" className="border border-solid border-black" value={searchText}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}>
            </input> 
            <button className="px-4 py-1 bg-orange-500 m-4 rounded-lg"
              onClick={() => {
                const searchOutputOfRestaurants = resList.filter((res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredResList( searchOutputOfRestaurants );
              }}
            >Search</button>
          </div>
          <div className="search m-4 p-4 flex items-center">
          <button className="px-4 py-1 bg-orange-500 m-4 rounded-lg"
            onClick={() => {
                resList = resList.filter( res => res.data.avgRating > 4 );
                setResList( resList );
                }}>
            Top Rated Restaurants
          </button>
          </div>          
        </div>
        <div className="flex flex-wrap">
          {filteredResList.map((restaurant) => (            
            <Link to={"/restaurants/" + restaurant.data.id} key={restaurant.data.uuid}>
            <RestaurantContainer              
              resName={restaurant.data.name}
              cuisine={restaurant.data.cusines}
              rating={restaurant.data.avgRating}
              logo={restaurant.data.cloudinaryImageId}
              deliveryTime={restaurant.data.deliveryTime}
            />
            </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;