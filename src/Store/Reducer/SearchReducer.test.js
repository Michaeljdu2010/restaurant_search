import { createStore } from 'redux';
import SearchReducer from './SearchReducer.js';
import { initialState } from '../Model/SearchModel.js';

describe('SearchReducer', () => {
    it('Reducer exists', () => {
        expect(typeof SearchReducer).toBe('function');
    });

    it('initial state value is as expected', () => {
        const store = createStore(SearchReducer);
        expect(store.getState()).toEqual(initialState);
    });
});