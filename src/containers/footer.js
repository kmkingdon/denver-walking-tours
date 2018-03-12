import { connect } from 'react-redux';
import Footer from '../components/footer';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
