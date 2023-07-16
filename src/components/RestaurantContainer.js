  const RestaurantContainer = (props) => {
    const { resName, cuisine, rating, logo, deliveryTime } = props; // object destructuring.
    return (
      <div className="m-6 p-4 w-[250px] h-[320px] rounded-lg bg-orange-200 hover:bg-orange-400">
        <img className="rounded-lg" alt={resName} src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + logo}></img>
        <h3 className="font-bold py-2 text-base"> {resName}</h3>
        <h4> {cuisine}</h4>
        <h4> {rating} stars </h4>
        <h4> {deliveryTime} Minutes </h4>
      </div>
    );
  };

  // Higher order component - A function that takes component as input and returns functional component as output.

  export const withPromotedLabel = (RestaurantContainer) => {
    return (props) => {
      return (
        <div>
          <label>Promoted</label>
          <RestaurantContainer {...props}/>
        </div>
      );
    }
  }

  export default RestaurantContainer;