/**
 * Kitchen Store
 * @extends EventEmitter
 * @author Ritesh Patel
 * @email ritesh@line89.com
 * @version 1.0.0
 */
import { EventEmitter } from 'events';
import axios from 'axios';
import dispatcher from '../dispatcher';

class KitchenStore extends EventEmitter {
	/**
	 * @constructor
	 * Constructor used to initialize data and fetch data to the store.
	 */
	constructor () {
		super();
		this.data = [];
		this.fetchAll((data) => {
			this.data = data;
			this.emit('change');
		});
	}

	/**
	 * @method addChangeListener
	 * Change listener for the store. Gets added to the component on mount.
	 * @param {Function} cb - callback function 
	 */
	addChangeListener (cb) {
		this.on('change', cb);
	}

	/**
	 * @method removeChangeListener
	 * Removes change listener. Gets removed when component unmounts
	 * @param {Function} cb - callback function
	 */
	removeChangeListener (cb) {
		this.removeListener ('change', cb);
	}

	/**
	 * @method getAll
	 * Returns all recipes
	 * @return {Object} recipe object
	 */
	getAll () {
		return this.data;
	}

	/**
	 * @method fetchAll
	 * Fetches data to the store. Calls an express api to retrieve data.
	 * @param {Function} cb - callback function to process the data
	 */
	fetchAll (cb) {
		axios.get('/api/kitchen/recipes')
			.then((response) => {
				if (response) {
					let data = response.data.data.Recipes;
					cb(data);
				}
			})
			.catch((error) => {
				console.log('Error loading data ', error);
			});
	}

	/**
	 * @method handleActions
	 * Handle actions. Upon receiving actions from dispatcher take appropriate action.
	 * @param {Object} action - action object
	 */
	handleActions (action) {
		switch (action.type) {
			case 'ADD_RECIPE':
				axios.post('/api/kitchen/recipe', {id : Date.now(), name : action.recipe.name, type : action.recipe.type})
					.then((response) => {
						let status = response.data.status;
						let data = response.data.data.Recipes;
						if (status === 'success') {
							this.data = data;
							this.emit('change');
						} else {
							console.log('error creating a new recipe');
						}
					})
					.catch((error) => {
						console.log('error ', error);
					})
				break;
			case 'REMOVE_RECIPE':
				axios.post('/api/kitchen/removerecipe', {id : action.id})
					.then ((response) => {
						let status = response.data.status;
						let data = response.data.data.Recipes;
						if (status === 'success') {
							this.data = data;
							this.emit('change');
						} else {
							console.log('error removing the recipe');
						}
					})
					.catch ((error) => {
						console.log('error', error);
					})
				break;
		}
	}
}
// create kitchenStore instance
const kitchenStore = new KitchenStore;

// register dispatcher and bind it with handleActions
dispatcher.register(kitchenStore.handleActions.bind(kitchenStore));

//export store instance
export default kitchenStore;