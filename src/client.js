import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
// import App from './containers/app/App';
// import Home from './containers/Home/Home';
// import About from './containers/About/About';
import {
  About,
  App,
  Home
} from 'containers';

ReactDOM.render(
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/about" component={About} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
, document.getElementById('root'));
