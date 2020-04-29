import React from 'react';
import './Filter.scss';

// The Logic for Filter has not been implemented yet, due to time restraints
const Filter = ({ cityName, totalEntries }) => {
	return (
		<div className="filter">
			<label
				className="filter__label"
				htmlFor="filter__input"
			>
				Filter:
			</label>
			<input
				className="filter__input"
				id="filter__input"
				placeholder="Enter Filter word(s) here"
			>
			</input>
		</div>
	);
}

export default Filter;