import { connect } from 'react-redux';
import TourInfo from '../components/tourinfo';
import { push } from 'redux-first-routing';

const mapStateToProps = (state) => {

    return {
      tours: state.main.tours,
      selectedTour: state.main.selectedTour
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      start: () => dispatch(push('/start'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TourInfo);
