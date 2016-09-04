/**
 * Actions module
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
import dispatcher from '../dispatcher';
import { RecipeConstants } from '../RecipeConstants';


/**
 * @method removeRecipe
 * Dispatches remove recipe action for the dispather.
 * @param {Number} id - id to be removed
 */
export function removeRecipe (id) {
	dispatcher.dispatch({
		type : RecipeConstants.REMOVE_RECIPE,
		id : id
	});
}

/**
 * @method addRecipe
 * Dispatches add recipe action for the dispather.
 * @param {Object} recipe - new recipe object
 */
export function addRecipe (recipe) {
	dispatcher.dispatch({
		type : RecipeConstants.ADD_RECIPE,
		recipe : recipe
	});
}