import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import {useParams} from 'react-router-dom';
import { RESTAURANT_MENU_URL } from '../utils/constants';
import useRestaurantMenu from './useRestaurantMenu';

const RestaurantMenu = () => {

    const {resId} = useParams();  
    const resInfo = useRestaurantMenu(resId);
      
    if( resInfo === null )
    {
        return <Shimmer/>
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <h2>MENU</h2>
             <ul>
                {itemCards.map(item => 
                    <li key={item?.card?.info?.id}>
                        {item?.card?.info?.name} - {"Rs."}
                        {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
                    </li>
                    )}                
             </ul>

        </div>
    );
}

export default RestaurantMenu;