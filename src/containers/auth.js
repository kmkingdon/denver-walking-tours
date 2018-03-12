import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import Auth from '../components/auth';

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      login: () => dispatch(push('/dashboard')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
