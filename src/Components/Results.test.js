import React from 'react';
import { connect } from 'react-redux'
import { shallow } from 'enzyme';
import Results from './Results';

describe('<Results />', () => {
	const sampleProp = {
		cityName: 'Toronto',
		totalEntries: 2,
		restaurants: [
			{
				img: 'http://imgUrl',
				name: 'sample Name',
				address: 'sample Address',
				price: 5,
				area: 'sample Area'
			},
			{
				img: 'http://imgUrl',
				name: 'sample Name',
				address: 'sample Address',
				price: 2,
				area: 'sample Area'
			}
		]
	}

	it('should render without crashing', () => {
		const wrapper = shallow(<Results {...sampleProp}/>);
		expect(wrapper.find('.results').exists()).toBeTruthy();
	});

	it('should conditionally render .results__results-tally__tally-caption', () => {
		const wrapper = shallow(<Results {...sampleProp}/>);
		expect(wrapper.find('.results__results-tally__tally-caption').exists()).toBeTruthy();
		wrapper.setProps({
			totalEntries: 0
		});
		expect(wrapper.find('.results__results-tally__tally-caption').exists()).toBeFalsy();
	});

	// I would also test .results__results-tally__no-results-caption and <Filter> conditionally
	// render just like above, but for sake of time I am omitting those for now

	it('<Restaurant /> component is called and correcty outputted through a .map iteratio', () => {
		const wrapper = shallow(<Results {...sampleProp}/>);
		expect(wrapper.find('Restaurant').length).toBe(sampleProp.restaurants.length);
	});
});
