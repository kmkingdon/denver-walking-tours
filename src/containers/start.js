import { connect } from 'react-redux';
import Start from '../components/start';
import { getLocation , getStops , nextStop} from '../actions';

const mapStateToProps = (state) => {
    return {
      currentLatitude: state.main.currentLatitude,
      currentLongitude: state.main.currentLongitude,
      tours: state.main.tours,
      selectedTour: state.main.selectedTour,
      stops: state.main.stops,
      stopNumber: state.main.stopNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getLocation: () => dispatch(getLocation()),
      getStops: () => dispatch(getStops()),
      nextStop: () => dispatch(nextStop()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
