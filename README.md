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