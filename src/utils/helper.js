export const filterRestaurantFromAllRestaurant = (searchText, restaurant) => {
    // for fitlering we need the search text and restaurantdata
    const filterData = restaurant.filter((restau) =>
      restau?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  };