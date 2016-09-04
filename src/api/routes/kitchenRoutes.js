/**
 * Kitchen Routes implementation
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
"use strict";

const _ = require('lodash');
let logger = require('../logger');

// sample data (it's a JSON object. DB / Local - your call)
let data = {
	"Recipes": [{
		"id": 1,
		"type": "Indian",
		"name": "Paneer Tikka Masala"
	}, {
		"id": 2,
		"type": "Italian",
		"name": "Minestorne Soup"
	}, {
		"id": 3,
		"type": "Thai",
		"name": "Tom Yum Soup"
	}]
};

/**
 * @method listRecipes
 * Lists recipes
 * @param {HttpRequest} req - request object
 * @param {HttpResponse} res - response object
 */
const listRecipes = (req, res) => {
	logger.log('info', 'Listing recipes')
	res.send({ status : 'success', data : data });
}

/**
 * @method addRecipe
 * Adds a new recipe
 * @param {HttpRequest} req - request object
 * @param {HttpResponse} res - response object
 */
const addRecipe = (req, res) => {
	let recipe = {
		id : req.body.id,
		name : req.body.name,
		type : req.body.type
	};
	data.Recipes.push(recipe);
	logger.log('info', 'New recipe added');
	res.send({ status : 'success', data : data });
}

/**
 * @method removeRecipe
 * Removes a recipe
 * @param {HttpRequest} req - request object
 * @param {HttpResponse} res - response object
 */
const removeRecipe = (req, res) => {
	let id = req.body.id;
	_.remove(data.Recipes, {
		id : id
	});
	logger.log('info', 'Recipe removed');
	res.send ({ status : 'success', data : data });
}

// export module
module.exports = {
	listRecipes : listRecipes,
	addRecipe : addRecipe,
	removeRecipe : removeRecipe
}