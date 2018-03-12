import { connect } from 'react-redux';
import Find from '../components/find';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Find);
