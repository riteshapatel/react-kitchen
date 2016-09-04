/**
 * Recipe component.
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
import React from 'react';
import * as RecipeActions from '../actions/RecipeActions';

export default class Recipe extends React.Component {
	/**
	 * @constructor
	 */
	constructor (props) {
		super();
	}

	/**
	 * @method removeRecipe
	 * Removes recipe from the grid
	 */
	removeRecipe () {
		RecipeActions.removeRecipe(this.props.id);
	}

	/**
	 * @method render
	 * Renders Recipe component
	 */
	render () {
		const { type, name, id } = this.props;
		return (
				<tr>
					<td>{name}</td>
					<td>{type}</td>
					<td><button class='btn btn-danger' onClick={this.removeRecipe.bind(this)}>Remove</button></td>
				</tr>
		);
	}
}