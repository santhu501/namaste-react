import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"

const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    addItemAction = (item) => {
        //Dispatch an action.
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div key={item?.card?.info?.id} className="p-2 m-4 border-gray-300 border-b-2 text-left">                        
                        <div className="p-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>                        
                        </div>                        
                        <p className="text-xs">{item?.card?.info?.description}</p>
                        <div className="w-3/12 p-5">
                           <div className="absolute">
                            <button className="p-1 mx-3 rounded-lg bg-black text-white shadow-lg"
                            onClick = {() => addItemAction(item)}>
                                Add +
                            </button>
                           </div>
                        </div>                        
                    </div>  
                ))                    
           }
        </div>
    );
}

export default ItemList;