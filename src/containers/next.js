import { connect } from 'react-redux';
import Next from '../components/next';
import { push } from 'redux-first-routing';
import { resetTour, nextStop, getLocation} from '../actions';

const mapStateToProps = (state) => {
    return {
      tours: state.main.tours,
      selectedTour: state.main.selectedTour,
      stops: state.main.stops,
      stopNumber: state.main.stopNumber
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      nextStop: () => dispatch(nextStop()),
      home: () => dispatch(push('/dashboard')),
      resetTour: () => dispatch(resetTour()),
      getLocation: () => dispatch(getLocation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Next);
