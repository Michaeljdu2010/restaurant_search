import React from 'react';
import Filter from './Filter.js';
import Restaurant from './Restaurant.js';
import './Results.scss';

const Results = ({ cityName, totalEntries, restaurants }) => {
	return (
		<div className="results">
			<div className="results__results-tally">
				{(cityName && totalEntries) && 
					<p>
						<span>{totalEntries}</span> Results in {cityName}
					</p>
				}
				{(cityName && !totalEntries) && 
					<p> No results found for {cityName} </p>
				}
			</div>
			<div className="results__filter">
				{(cityName && totalEntries) && <Filter />}
			</div>
			<div className="results__results-list">
				{(restaurants) &&
					restaurants.map((restaurant) =>
						<Restaurant key={restaurant.name} restaurant={restaurant} />
				)}
			</div>
		</div>
	);
}

export default Results;