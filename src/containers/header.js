import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import { resetTour} from '../actions';
import Header from '../components/header';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      home: () => dispatch(push('/dashboard')),
      resetTour: () => dispatch(resetTour())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
