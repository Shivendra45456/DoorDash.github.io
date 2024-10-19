import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client"; // Removed '.js' extension
import HeaderComponent from "./Header.js";
import BodyComponent from "./Body.js";
import FooterComponent from "./Footer.js"; // Corrected import path
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Error.js";
import About from "./About.js";
import RestaurantList from "./Config.js";
import Contact from "./Contact.js";
import Cart from "./Cart.js";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login.js";

const AppLayout = () => {
  const [displayRestaurantList, setDisplayRestaurantList] = useState(RestaurantList);

  const handleSearch = (filteredRestaurants) => {
    setDisplayRestaurantList(filteredRestaurants);
  };

  return (
    <>
      <HeaderComponent handleSearch={handleSearch} />
      <Outlet context={{ displayRestaurantList }} /> {/* Use context to pass props */}
      <FooterComponent />
    </>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />, // Directly render BodyComponent
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Cart",
        element: <Cart />,
        errorElement: <Error />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
    
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

