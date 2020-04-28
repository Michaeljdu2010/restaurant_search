// Defines our intial search store state, as well as various models for the store's subproperties
// If I had more time, I would leverage Immutable.js to enforce the templates defined here.  
// For now, these are just references.

export const RestaurantModel = {
	name: null,	// string
	address: null, // string
	price: null, //
	area: null, // string
	img: null // string
};

export const initialState = {
	cityName: null, // string
	totalEntries: null, // integer
	restaurants: [] // array
};