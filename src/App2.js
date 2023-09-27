import React, {lazy, Suspense, useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import UserContext from './utils/UserContext';
//import Grocery from './components/Grocery';

const Grocery = lazy(() => import("/src/components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        const data = {
            name: "santhosh"
        };
        setUserName(data.name);
    },[]);

    return (
        // UserContext.Provider will give access to usecontext for the components inside it and we can also update the value of a usecontext.
        <UserContext.Provider value={{loggedInUser: userName}}>
        <div className="app">
        <Header/>
        <Outlet/>
        </div>
        </UserContext.Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path:"/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);