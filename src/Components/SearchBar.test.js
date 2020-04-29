import React from 'react';
import { connect } from 'react-redux'
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';

describe('<Results />', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<SearchBar />);
		expect(wrapper.find('.search-bar').exists()).toBeTruthy();
	});

	// state change unit test
	it('input value should change as state changes', () => {
		const wrapper = shallow(<SearchBar />);

		wrapper.setState({ searchInputValue: 'Toronto' });
		expect(wrapper.find('.search-bar__search').props().value).toEqual('Toronto');

		wrapper.setState({ searchInputValue: 'Montreal' });
		expect(wrapper.find('.search-bar__search').props().value).toEqual('Montreal');
	});

	// .search-bar__search-btn handleClick() unit test
	it('search buttons click handler should fire correctly', () => {
		const sampleProps = {
			searchService: jest.fn()
		};

		const wrapper = shallow(<SearchBar {...sampleProps} />);
		wrapper.setState({ searchInputValue: 'Las Vegas' });
		const ButtonRef = wrapper.find('.search-bar__search-btn');
		ButtonRef.simulate('click');
		expect(sampleProps.searchService).toHaveBeenCalled();
		expect(sampleProps.searchService).toHaveBeenCalledWith('Las Vegas');
	});
});
