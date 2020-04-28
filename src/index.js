import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import SearchReducer from "./Store/Reducer/SearchReducer.js";
import App from './Components/App.js';
import * as serviceWorker from './serviceWorker';

const store = createStore(SearchReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
