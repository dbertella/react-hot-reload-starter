import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

// import { isLoaded as isAuthLoaded, load as loadAuth } from 'redux/modules/auth';


export default () => {

  const requireLogin = false;

  return (
    <Router>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home} />
  			<Route path="/about" component={About} />
  			<Route path="*" component={Home} />
  		</Route>
    </Router>
  );
};
