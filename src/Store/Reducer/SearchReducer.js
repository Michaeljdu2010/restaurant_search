import { initialState } from '../Model/SearchModel.js';

const RestaurantParserHelper = (restaurantData) => {
	// based off of SearchModel.js' RestaurantModel
	return {
		name: restaurantData.name ? restaurantData.name : null,
		address: restaurantData.address ? restaurantData.address : null,
		price: restaurantData.price ? restaurantData.price : null,
		area: restaurantData.area ? restaurantData.area : null,
		img: restaurantData.image_url ? restaurantData.image_url : null,// string
	};
}

const SearchReducer = (state = initialState, action) => {
	switch (action.type) {
	    case 'ADD_CITY_RESULTS':
	    	const cityData = action.data;
	    	const newState = Object.assign({}, {
	    		cityName: (action.cityName) ? action.cityName : null,
	    		totalEntries: cityData.total_entries ? cityData.total_entries : 0,
	    		restaurants: cityData.restaurants && cityData.restaurants.length
					? cityData.restaurants.map((restaurant) => RestaurantParserHelper(restaurant))
					: []
			});
			return newState;
	    default:
			return state
	}
}

export default SearchReducer;