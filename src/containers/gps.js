import { connect } from 'react-redux';
import GPS from '../components/gps';

const mapStateToProps = (state) => {
    return {
        coords: state.main.coords,
        isGeolocationAvailable: state.main.isGeolocationAvailable,
        isGeolocationEnabled: state.main.isGeolocationEnabled,
        positionError: state.main.positionError,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GPS);
