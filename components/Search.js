import RestaurantList from "./Config";

const SearchRestaurent = (props) => {
  return (
    <input
      type="text"
      alt="search"
      className="Search-Bar" 
      onChange={(event) => {
        let tempArr = RestaurantList.filter((resto) =>
          resto.name.toLowerCase().includes(event.target.value.toLowerCase())
        );
        props.handleSearch(tempArr); // Call the handleSearch prop
      }}
    />
  );
};
export default SearchRestaurent;
