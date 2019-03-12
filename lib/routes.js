// console.log('HI');


// FlowRouter.route('/', {
//   name: 'home',
//   action() {
//     console.log('foobarbaz');

//     // BlazeLayout.render('HomeLayout.html')
//   }
// })


import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import AppContainer from '../../ui/containers/AppContainer.js';
import ListPageContainer from '../../ui/containers/ListPageContainer.js';


FlowRouter.route('/lists/:_id', {
  name: 'Lists.show',
  action() {
    mount(AppContainer, {
      main: <ListPageContainer />,
    });
  },
});