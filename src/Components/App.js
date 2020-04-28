import React from 'react';
import SearchHeader from '../Components/SearchHeader.js';
import ResultsContainer from '../Containers/ResultsContainer.js';
import './App.scss';

const App = (cityName) => {
	return (
		<div className="app">
			<div className="app__header">
				<SearchHeader />
			</div>
			<div className="app__body">
				<ResultsContainer />
			</div>
		</div> 
	)
}

export default App;