import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = (state) => {
    return {
      url: state.router.pathname
    }
}


export default connect(mapStateToProps)(App);
