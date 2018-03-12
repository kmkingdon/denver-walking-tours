import { connect } from 'react-redux';
import Start from '../components/start';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Start);
