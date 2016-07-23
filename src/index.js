import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './components/App';
import HelloWorld from './components/HelloWorld';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="hello" component={HelloWorld}/>
    </Route>
  </Router>
), document.getElementById('app'))
