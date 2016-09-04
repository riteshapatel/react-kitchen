/**
 * Top navigation component
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
import React from 'react';
import { IndexLink, Link } from 'react-router'

export default class Nav extends React.Component {
	render () {
		return (
			<div class="header clearfix">
				<nav>
		          <ul class="nav nav-pills pull-right">
		            <li role="presentation">
		            	<IndexLink to="/">Home</IndexLink>
		            </li>
		            <li role="presentation">
		            	<Link to="about">About</Link>
		            </li>
		            <li role="presentation">
		            	<Link to="contact">Contact Chef</Link>
		            </li>		            		            
		          </ul>
		        </nav>
		    </div>
		);
	}
}