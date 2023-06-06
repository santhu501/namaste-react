# namaste react series

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *          - Img
 *          - Name of restaurant, Star rating, Cuisine, Delivery time etc.
 * Footer
 *  - CopyRight
 *  - Links
 *  - Address
 *  - Contact
 */


 Two types of export/import.

 - default export/import

 export default Component;
 import Component from "path";

- named export/import

export const component;
import {component} from "path";


 - A react hook is a just a normal JS function given by react library.
 - A state update will re-render the component.


 - React uses reconciliation algorithm( ReactFiber ) for DOM manipulation. This ReactFiber is introduced in React 16. 
 React creates a virtual DOM( JS object ) which is a representation of a actual DOM tree. when there is a change of state, React compares old virtual DOM with new virtual DOM and updates the real DOM and re-renders the components.

 virtual DOM is not a new concept, it was there from a long time. Its a javascript object representation of real DOM. React made use of this concept and updates DOM efficiently.

 https://github.com/acdlite/react-fiber-architecture


 const[ listOfRest, setListOfRest ] = useState(resList);
 useState returns an array. all we are doing in the above line is array destructuring.

 something like below:

 const arr = useState(resList);

 const listOfRest = arr[0];
 const setListOfRest = new updated array list that we are trying to set.

 - React hooks are just normal Javascript functions.

 useEffect: 
 useEffect( () => {}, [] );
 - useEffect takes a callback function and a dependency array.
 - dependency array is optional. if dependency array is not given, useEffect is called for every render of component. 
 - If empty array is given for dependency array, useEffect is called only once after initial render of component.
 
