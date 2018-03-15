import React, { Component } from 'react';
import Auth from '../containers/auth';
import Dashboard from '../containers/dashboard';
import Find from '../containers/find';
import Start from '../containers/start';
import About from '../containers/about';

class App extends Component {

  get activeComponent() {
    switch (this.props.url) {
      case "/":
        return <Auth/>;
      case "/dashboard":
        return <Dashboard/>;
      case "/find":
        return <Find/>;
      case "/start":
        return <Start/>;
      case "/about":
        return <About/>;
      default:
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
