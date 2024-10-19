import { IMG_CDN_URL } from "./Config.js";
const RestaurantCard = (props) => {
  if (!props.restaurant) {
    return <div>Error: Restaurant data not available</div>;
  }

  return (
    <div className="card">
      <img src={IMG_CDN_URL + props.restaurant.cloudinaryImageId} alt="img" />
      <h2>{props.restaurant.name}</h2>
      <h3>{props.restaurant.locality}</h3>
      <h4>{props.restaurant.areaName}</h4>
      <h4>{props.restaurant.costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
