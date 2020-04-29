import React from 'react';
import { connect } from 'react-redux'
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
	it('should render without crashing', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('.app').exists()).toBeTruthy();
	});

	it('should load and render child components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find('SearchHeader').exists()).toBeTruthy();
		expect(wrapper.find('Connect(Results)').exists()).toBeTruthy();
	})
});
