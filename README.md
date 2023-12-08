# namaste react series


#Parcel
- Dev Build
- Local Server
- HMR -> Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - Supports older browsers
- Diagnostics
- Error Handling
- HTTPS
- Tree Shaking - Remove unused code.
- Different dev and production bundles.

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

About us page with user class component - react life cycle.

------------- MOUNTING ---------------
constructor with default data
render with default data
html with default data
Component did mount
API call.
this.setState -> state variable is updated.

-------------- UPDATE -----------------

render with api data
html with new data.
component did update.

--------- Final -------------------
component will unmount



componentDidMount is called only after initial render.
componentDidUpdate is called from second render to all subsequent renders.

useEffect comes with a return function which will be called when component is unmounted. This is similar to componentWillUnmount in class component method.
useEffect(() =>{
    return()=>{};
 });
 

// There are different names used for bundling an app to make sure it loads only the code needed and not everything. 
Names: Chunking, Code Spliting, Dynamic Bundling, Lazy Loading, on Demand Loading, dynamic import etc.

// HOC - Higher Order Components. A function that takes Component as input and returns functional component as output.

// http://localhost:1234/restaurants/56589  - To see different sections for restaturant like recommended, newly added etc.


# Redux ToolKit 
  - Install @reduxjs/toolkit and react-redux libraries.
  - Build our redux store.
  - Connect our store to our app.
  - Create Slice (cartSlice)
  - dispatch(action) which calls reducer to update the information in redux store for cart slice.
  - Selector subscribes to the changes to cart slice in redux store and updates the cart slice.


Older Vanilla Redux => Does not allow state mutation at all.
we need to do this way to update state:
const newState = [...state];
newState.item.push(action.payload);
return newState.

In redux toolkit, you should directly mutate the state, thats the only way to update state. Redux toolkit behind the scenes use immer js library and does the immutable state thing like vanilla redux. This is done to reduce work on developers.
state.items.push(action.payload);

# Types of testing( developer)
 - Unit Testing - Testing a component or a function in isolation.
 - Integration Testing  - Testing interconnected components.
 - End to End Testing 

# Testing Libraries: 
 React testing library - This library uses Jest.
 npm install -D @testing-library/react
 npm install -D jest

 we are using babel in this project. Jest requires installing some more dependencies for babel. It also requires some config. babel.config.js
  Information available here - https://jestjs.io/docs/getting-started
 npm install --save-dev babel-jest @babel/core @babel/preset-env

 # Setting up testing in our app
 - Installed React testing library
 - installed Jest
 - Installed Babel dependencies
 - Configured Babel
 - Configure parcel config file (.parcelrc) to disable default babel transpilation - https://parceljs.org/languages/javascript/#usage-with-other-tools
 - Jest Configuration.  npx jest --init  . ( npx is to execute)
      - it asks questions like below. 
      - For typescript say no.
      - For test environment - select jsdom(browser-like).
      - for add coverage - say yes. 
      - For provider name - select babel.
      - For automatically clear mock calls - say yes.
      this will now create a jest.config.js file.
