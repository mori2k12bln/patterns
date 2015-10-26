/*******************************
App
--------------------------------
Top level ‘controller’ component
********************************/

import React, {Component} from 'react';
//import Router from 'react-router';

// Here, we import all of our base styles
import styles from './app.scss';

// Import route definitions from epo > config > routes.jsx
//import routes from './config/routes';

// Temp conponent to render
import Content from 'pages/office_actions/office_actions';

// Rather than rendering a component to screen, tell the router
// which route to pass
/*Router.run(routes, (Root, state) => {
  React.render(<Root {...state} />, document.querySelector("#myApp"));
});*/

React.render(<Content />, document.querySelector("#myApp"));