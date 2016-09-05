/**
 * Express server
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
 "use strict";

const express = require('express'),
	kitchen = require('./kitchen');
let kitchenExpress = express(),
	server;

// server port
const serverPort = 3000;

// body parser
const bodyParser = require('body-parser')

kitchenExpress.use(bodyParser.json());
kitchenExpress.use(bodyParser.urlencoded({
	extended: true
}));


server = require('http').Server(kitchenExpress);

/**
 * @method configureServer
 * Configure server with the routers and start server
 */
const configureServer = (onData, onErr) => {
	kitchenExpress.use('/kitchen', kitchen);
	
	server.listen (serverPort, () => {
		console.log('Express listening on port ', serverPort);
	});
}

configureServer();