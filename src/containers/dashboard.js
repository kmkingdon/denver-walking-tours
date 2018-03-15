import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import { getLocation, savePermission} from '../actions';
import Dashboard from '../components/dashboard';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      getLocation: () => dispatch(getLocation()),
      savePermission: (boolean) => dispatch(savePermission(boolean)),
      find: () => dispatch(push('/find')),
      about: () => dispatch(push('/about'))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
