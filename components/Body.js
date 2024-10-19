// Body.js

import RestaurantList from "./Config";
import RestaurantCard from "./RestaurantCard";
import SearchRestaurant from "./Search"; // Updated component name
// import { useOutletContext } from "react";
import { useOutletContext } from "react-router-dom"; // Corrected import
 // Added import

const BodyComponent = () => {
  const { displayRestaurantList } = useOutletContext(); // Get the context

  return (
    <>
      <div className="restaurant-list">
        {displayRestaurantList?.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </>
  );
};

export default BodyComponent;
