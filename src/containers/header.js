import { connect } from 'react-redux';
import { push } from 'redux-first-routing';
import Header from '../components/header';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      home: () => dispatch(push('/dashboard')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
