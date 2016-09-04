/**
 * Home component. Lists recipes, allows user to add and remove recipes
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
import React from 'react'
import Recipe from '../components/Recipe';
import KitchenStore from '../stores/KitchenStore';
import * as RecipeActions from '../actions/RecipeActions';

export default class Home extends React.Component {
	/**
	 * @constructor
	 */
	constructor () {
		super();
		this.onChange = this.onChange.bind(this);
		this.state = {"Recipes" : KitchenStore.getAll()}
	}
	/**
	 * Add a store onChange listener once the component mounts.
	 */
	componentDidMount () {
		KitchenStore.addChangeListener(this.onChange);
	}

	/**
	 * Clear store onChange listener when component unmounts.
	 */
	componentWillUnmount () {
		KitchenStore.removeChangeListener(this.onChange);
	}

	/**
	 * @listener onChange
	 * Listens for the store change and refreshes state with changed data.
	 */
	onChange () {
		this.setState({"Recipes": KitchenStore.getAll()});
	}

	/**
	 * @method createRecipe
	 * Fires an "addRecipe" action. This action will be picked up by the dispatcher.
	 */
	createRecipe () {
		RecipeActions.addRecipe({"name" : "Palak Paneer", "type" : "Indian", "id" : Date.now()});
	}

	/**
	 * @method render
	 * Renders component
	 */
	render () {
		const { Recipes } = this.state;
		
		const RecipeComponents = Recipes.map((recipe) => {
			return <Recipe key={recipe.id} {...recipe} />
		});

		return (
			<div>
				<h4>Recipes</h4>
				<table class="table table-striped">
					<thead>
						<tr>
							<th>Recipe Name</th>
							<th>Type</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{RecipeComponents}
					</tbody>	
				</table>
				<button class="btn btn-success" onClick={this.createRecipe.bind(this)}>Add Recipe</button>
			</div>
		);
	}
}