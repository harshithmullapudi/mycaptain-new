import React, { Component } from 'react';
import HeaderComponent from './components/header';
import HomeComponent from './components/home';
import WorkshopMainComponent from './components/workshopPage/workshopMain';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import history from './history';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <HeaderComponent />
          <Route path="/" exact component={HomeComponent} />
          <Route path="/workshop/:name" component={WorkshopMainComponent} />
        </div>
      </Router>
    );
  }
}

export default App;