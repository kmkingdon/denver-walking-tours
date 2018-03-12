import { connect } from 'react-redux';
import Find from '../components/find';
import { getLocation } from '../actions';

const mapStateToProps = (state) => {
    return {
      currentLatitude: state.main.currentLatitude,
      currentLongitude: state.main.currentLongitude
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getLocation: () => dispatch(getLocation()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find);
