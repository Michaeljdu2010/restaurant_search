import React from 'react';
import { connect } from 'react-redux'
import { shallow } from 'enzyme';
import Restaurant from './Restaurant';

describe('<Restaurant />', () => {
	const sampleProp = {
		restaurant: {
			img: 'http://imgUrl',
			name: 'sample Name',
			address: 'sample Address',
			price: 5,
			area: 'sample Area'
		}
	}

	it('should render without crashing', () => {
		const wrapper = shallow(<Restaurant {...sampleProp}/>);
		expect(wrapper.find('.restaurant').exists()).toBeTruthy();
	});

	it('should render out value from props correct', () => {
		const wrapper = shallow(<Restaurant {...sampleProp} />);

		// image renders correctly
		expect(wrapper.find('.restaurant__img').exists()).toBeTruthy();
		expect(wrapper.find('.restaurant__img').props().src).toEqual(sampleProp.restaurant.img);
		expect(wrapper.find('.restaurant__img').props().alt).toEqual(`${sampleProp.restaurant.name} logo`);
		// restaurant name renders correctly
		expect(wrapper.find('.restaurant__info__name').exists()).toBeTruthy();
		expect(wrapper.find('.restaurant__info__name').text()).toEqual(sampleProp.restaurant.name);
		// restaurant address renders correctly
		expect(wrapper.find('.restaurant__info__address').exists()).toBeTruthy();
		expect(wrapper.find('.restaurant__info__address').text()).toEqual(sampleProp.restaurant.address);
		// restaurant price renders correctly
		expect(wrapper.find('.restaurant__info__price').exists()).toBeTruthy();
		expect(wrapper.find('.restaurant__info__price').text()).toEqual(`Price point: ${sampleProp.restaurant.price}`);
		// restaurant area renders correctly
		expect(wrapper.find('.restaurant__info__area').exists()).toBeTruthy();
		expect(wrapper.find('.restaurant__info__area').text()).toEqual(sampleProp.restaurant.area);
	})
});
