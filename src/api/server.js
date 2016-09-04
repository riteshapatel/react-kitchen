/**
 * Express server
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
var express = require('express'),
	kitchenExpress = express(),
	kitchen = require('./kitchen'),
	server;

// server port
var serverPort = 3000;

// body parser
var bodyParser = require('body-parser')

kitchenExpress.use(bodyParser.json());
kitchenExpress.use(bodyParser.urlencoded({
	extended: true
}));


server = require('http').Server(kitchenExpress);

/**
 * @method configureServer
 * Configure server with the routers and start server
 */
function configureServer (onData, onErr) {
	kitchenExpress.use('/kitchen', kitchen);
	
	server.listen (serverPort, function () {
		console.log('Express listening on port ', serverPort);
	});
}

configureServer();