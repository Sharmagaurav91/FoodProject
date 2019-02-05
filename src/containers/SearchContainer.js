import { connect } from 'react-redux';

import SearchComponent from '../components/SearchComponent';
import { handleRestaurantClick } from "../actions/SearchAction"

const mapStateToProps = (state) => {
    return {
        'location': state.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRestaurantClick: (restaurant) => dispatch(handleRestaurantClick(restaurant))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchComponent);