/************************
Menu 
-------------------------
A simple menu, comprising
a series of links
*************************/

import React, { Component } from 'react';

import styles from './menuList.scss';

import UiBasicsLink from 'components/elements/uiBasicsLink/uiBasicsLink';

export default class MenuList extends Component {

  render() {

  	// Set menu placement
  	var menuPlacement = this.props.menuPlacement;
  	// Get menu items in menu
  	var menuItems = this.props.menuItems.map((menuItem, index) => {
      return <li key={index}> 
      					<UiBasicsLink {...this.props}>
      						{menuItem}
      					</UiBasicsLink>
      			 </li>
    });

    return (
			<ul className={"ui-menu" + ' ' + "ui-menu--" + menuPlacement}>
        {menuItems}
      </ul>
    );
  }

};