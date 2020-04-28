import { connect } from 'react-redux';
import Results from '../Components/Results.js';

function mapStateToProps(store) {
	return {
		cityName: store.cityName,
		totalEntries: store.totalEntries,
		restaurants: store.restaurants
	}
}

export default connect(mapStateToProps)(Results);