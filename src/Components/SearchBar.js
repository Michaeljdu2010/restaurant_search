import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
	constructor() {
		super();

		this.state = { searchInputValue: '' }
		this.handleSearch = this.handleSearch.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ searchInputValue: event.target.value });
	}


	handleSearch() {
		const { searchInputValue } = this.state;
		this.props.searchService(searchInputValue);
		this.setState({ searchInputValue: '' });
	}

	render() {
		return (
			<div className="search-bar">
				<label
					htmlFor="search-bar__search"
					className="search-bar__label"
				>
					City:
				</label>
				<input
					placeholder='Enter City name'
					id="search-bar__search"
					className="search-bar__search"
					value={this.state.searchInputValue}
					onChange={this.handleChange}
				/>
				<button
					className="search-bar__search-btn"
					onClick={this.handleSearch}
				> 
					Search
				</button>
			</div>
		)
	}
}

export default SearchBar;