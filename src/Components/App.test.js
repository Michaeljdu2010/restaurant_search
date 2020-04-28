import React from 'react';
import { render } from 'enzyme';
import App from './App';

describe('<App />', () => {
	it('should render without crashing', () => {
		const wrapperSuccess = render(<App />);
		expect(wrapperSuccess.find('.app').length().toBe(1);
	});
});
