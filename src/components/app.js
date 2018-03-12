import React, { Component } from 'react';
import Auth from '../containers/auth';
import Dashboard from '../containers/dashboard';
import Find from '../containers/find';
import Start from '../containers/start';
import Add from '../containers/add';
import GPS from '../containers/gps';

class App extends Component {

  get activeComponent() {
    switch (this.props.url) {
      case "/":
        return <Auth/>;
        break;
      case "/dashboard":
        return <Dashboard/>;
        break;
      case "/find":
        return <Find/>;
        break;
      case "/start":
        return <Start/>;
        break;
      case "/add":
        return <Add/>;
        break;
      case "/gps":
        return <GPS/>;
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div>
        {this.activeComponent}
      </div>
    )
  }
}

export default App;
