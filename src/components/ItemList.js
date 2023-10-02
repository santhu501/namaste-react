const ItemList = ({items}) =>{
    return (
        <div>
            {
                items.map((item) => (
                    <div key={item?.card?.info?.id} className="p-2 m-2 border-gray-200 border-b-2 text-left">                        
                        <div className="p-2">
                        <span>{item?.card?.info?.name}</span>
                        <span> - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                        <div className="w-3/12 p-4">
                           <div className="absolute">
                            <button className="p-2 mx-6 rounded-lg bg-black text-white shadow-lg">
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