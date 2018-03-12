import { connect } from 'react-redux';
import Add from '../components/add';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
