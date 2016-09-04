/**
 * kitchen router
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
"use strict";

let express = require('express'),
	kitchenRoutes = require('./routes/kitchenRoutes'),
	router = express.Router();

// middleware for the router
router.use((req, res, next) => {
	next();
});

// define routes
router.get('/recipes', kitchenRoutes.listRecipes);
router.post('/recipe', kitchenRoutes.addRecipe);
router.post('/removerecipe', kitchenRoutes.removeRecipe);

module.exports = router;