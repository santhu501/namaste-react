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
 - If something(var) is mentioned inside dependency array, then useEffect is called only when var is updated.


 Link: Use Link component instead of anchor tag to show the pages. A Link will just render that component only but using anchor to go to new page will reload the whole page.

 - React Class Based Components life cycle: First constructor is called, next render method and then componentDidMount( same as useEffect in functional components) method is called.
 - When there is a child class component under parent class component: sequence of things that will be executed: 
 parent constructor, parent render, 
 child constructor, child render, child componentDidMount, 
 parent componentDidMount are called.

- when there are two child components one after the other under one parent class component:
parent constructor, parent render, child 1 constructor, child 1 render, child 2 constructor, child 2 render, DOM updates in a batch,
child 1 component did mount, child 2 component did mount, then finally parent component did mount are called.

- When there are multiple child components, react will optimize render cycle and commit phase( componentDidMount ) by doing them in a batch.

 
