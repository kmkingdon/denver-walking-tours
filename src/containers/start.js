import { connect } from 'react-redux';
import Start from '../components/start';
import { getLocation } from '../actions';

const mapStateToProps = (state) => {
    return {
      currentLatitude: state.main.currentLatitude,
      currentLongitude: state.main.currentLongitude,
      tours: state.main.tours,
      selectedTour: state.main.selectedTour
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getLocation: () => dispatch(getLocation()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
