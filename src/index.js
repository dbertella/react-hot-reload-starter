import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';

import {
  App,
  Home,
  About,
} from './containers';

ReactDOM.render(
	<Router>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
			<Route path="*" component={Home} />
		</Route>
  </Router>
, document.getElementById('root'));
