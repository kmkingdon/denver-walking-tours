import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import { getLocation } from '../actions';
import Dashboard from '../components/dashboard';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getLocation: () => dispatch(getLocation()),
      find: () => dispatch(push('/find')),
      add: () => dispatch(push('/add'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
