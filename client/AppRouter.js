import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from '../imports/ui/App'

const TestComponent = () => (<h1>test</h1>)

const browserHistory = createBrowserHistory();

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App} />
      {/* <Route exact path="/lists/:id" component={ListPageContainer}/> */}
      <Route exact path="/test" component={TestComponent} />
    </Switch>
  </Router>
);
export default renderRoutes