/**
 * Winston logger for express api
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
'use strict';
const path = require('path');

const winston = require('winston');
const config = {
	levels:{
		silly:0,
		verbose:1,
		info:2,
		data:3,
		warn:4,
		debug:5,
		error:6
	},
	colors:{
		silly:'magenta',
		verbose:'cyan',
		info:'green',
		data:'grey',
		warn:'yellow',
		debug:'blue',
		error:'red'
	}
};

let logger = new (winston.Logger)({
	transports:[
		new (winston.transports.Console)({
			colorize:true
		})
	],
	colorize:true,
	levels:config.levels,
	colors:config.colors
});

module.exports = logger;