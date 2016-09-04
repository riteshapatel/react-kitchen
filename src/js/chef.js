/**
 * Entry point for the app 
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import About from "./pages/About"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Layout from "./pages/Layout";

const kitchen = document.getElementById('kitchen');
// render DOM
ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Home}></IndexRoute>
			<Route path="about" component={About}></Route>
			<Route path="contact" component={Contact}></Route>
		</Route>
	</Router>, 
kitchen);