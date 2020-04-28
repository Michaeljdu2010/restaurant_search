import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchBar from '../Components/SearchBar.js';
import SearchService from '../Store/Service/SearchService.js';

const mapDispatchToProps = (dispatch) => ({
	searchService: bindActionCreators(SearchService, dispatch)
})

export default connect(null, mapDispatchToProps)(SearchBar);