import { connect } from 'react-redux';
import Find from '../components/find';
import { getLocation, getTours, selectTour } from '../actions';

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
      getTours: () => dispatch(getTours()),
      selectTour: (id) => dispatch(selectTour(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find);
