import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import RR from './RR'
// import App from '/imports/ui/App'
import '../imports/startup/accounts-config.js';
// import '../lib/routes';

Meteor.startup(() => {
  render(<RR />, document.getElementById('react-target'));
});
