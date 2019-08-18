import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './state';
import {addNewRecipe, updateNewRecipe} from './state';

export let renderEntireTree = (state) => {
	ReactDOM.render(<App recipes={state.recipes} 
						 addNewRecipe={addNewRecipe}
						 newImg={state.newImg}
						 newTitle={state.newTitle}
						 newDescription={state.newDescription} 
						 updateNewRecipe={updateNewRecipe}/>, 
				document.getElementById('root'));
}

renderEntireTree(state);

subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
