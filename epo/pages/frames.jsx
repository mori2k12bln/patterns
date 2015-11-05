/*******************************
Frame
--------------------------------
Defines scaffolding for our app
********************************/

import React, {Component} from 'react';
import { connect } from 'react-redux';
 
// Sass dependencies
import styles from 'shared/styles/layout/_frames.scss';

// React dependencies
import Navigation from 'components/modules/navigation/navigation';
import Helpers from 'components/modules/helpers/helpers';
import RouteHandler from 'components/containers/RouteHandler'

{/* This is the root-level '/' route. */}
export class App extends Component {
	render() {
		return (
			<RouteHandler className="view">
					{this.props.children}
			</RouteHandler>
		);
	}
}

{/* This is the layout for Management Module pages. */}
export class ManagementModule extends Component {
	render() {
		return (
			<div className="view">
				{/* Trays will go here */}
				<div className="wrapper">
					{/* This will be replaced with whichever routes we pass in */}
					{this.props.children}
				</div>
				<Helpers />
			</div>
		);
	}
}
