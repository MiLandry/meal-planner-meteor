import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppRouter from './AppRouter'
// import App from '/imports/ui/App'
import '../imports/startup/accounts-config.js';
// import '../lib/routes';

Meteor.startup(() => {
  render(<AppRouter />, document.getElementById('react-target'));
});
