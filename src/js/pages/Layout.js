/**
 * Layout component
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
import React from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';

export default class Layout extends React.Component {	
	render () {
		return (
			<div class="container">
				<Nav />
				{this.props.children}
			</div>
		);
	}
}