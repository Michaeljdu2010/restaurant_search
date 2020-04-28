import { addCityResults } from '../Action/SearchActions.js';
import axios from 'axios';

export const SearchService = (cityName) => {
	return (dispatch) => {
		axios.get(`https://opentable.herokuapp.com/api/restaurants?city=${cityName}`)
    		.then((response) => {
				dispatch(addCityResults({
					cityName,
					data: response.data
				}));
    		})
    		.catch((error) => {
    			// error handler
    		})
    }
};

export default SearchService;