import React from 'react';
import SearchBarContainer from '../Containers/SearchBarContainer.js';
import "./SearchHeader.scss";

class SearchHeader extends React.Component {
	render() {
		return (
			<div className="search-header">
				<div className="search-header__logo">
					<h1 className="search-header__logo__caption"> Restaurant <br/> Search </h1>
				</div>
				<h2 className="search-header__sub-caption"> Find a restaurant in your city </h2> 
				<SearchBarContainer />
			</div>
		)
	}
}

export default SearchHeader;
