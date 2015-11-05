/*******************************
Routes
--------------------------------
Defines the routes for our app
********************************/

import React from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

// Import 'scaffold' options from components » containers 
import App from 'components/containers/App';
import ManagementModule from 'components/containers/ManagementModule';
import Workspace from 'components/containers/Workspace';

// Import pages
import Home from 'pages/home/home';
import Dashboard from 'pages/dashboard/dashboard';
import Content from 'pages/content/content';
import Analysis from 'pages/analysis/analysis';
import Search from 'pages/search/search';
import Viewer from 'pages/viewer/viewer';
import OfficeActions from 'pages/office_actions/office_actions';

export default (
<Route path="/" component={App}>
  
  {/* Workspace routes */}
  <Route path="workspace" component={Workspace}> {/* set to route '/' to make default */}
    <Route path="home" component={Home} />
    <Route path="dashboard" component={Dashboard} />
    <Route path="content" component={Content} />
    <Route path="analysis" component={Analysis} />
    <Route path="search" component={Search} />
    <Route path="viewer" component={Viewer} />
    <Route path="office-actions" component={OfficeActions} />
    <IndexRoute to="office-actions" component={OfficeActions} />
  </Route>

  {/* Management Module routes */}
  <Route path="management" component={ManagementModule}>
    <Route path="work-manager" component={OfficeActions} />
    <IndexRoute to="work-manager" component={OfficeActions} />
  </Route>

  {/* Default route for root '/' path */}
  <IndexRoute to="workspace" component={Workspace} />

  <Redirect from="/home" to="/workspace/office-actions"/>

</Route>
);