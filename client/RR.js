import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
// import AppContainer from '../../ui/containers/AppContainer.js';
// import ListPageContainer from '../../ui/containers/ListPageContainer.js';
// import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.js';
// import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
// import NotFoundPage from '../../ui/pages/NotFoundPage.js';

const TestComponent = () => (<h1>test</h1>)

const browserHistory = createBrowserHistory();

const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      {/* <Route exact path="/" component={AppContainer}/> */}
      {/* <Route exact path="/lists/:id" component={ListPageContainer}/> */}
      <Route exact path="/test" component={TestComponent} />
      {/* <Route exact path="/join" component={AuthPageJoin}/> */}
      {/* <Route component={NotFoundPage}/> */}
    </Switch>
  </Router>
);
export default renderRoutes