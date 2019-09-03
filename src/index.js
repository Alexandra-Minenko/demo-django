import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';

let renderEntireTree = (state) => {
	ReactDOM.render(<BrowserRouter>
						<App recipes={store.getState().recipes} 
							 dispatch={store.dispatch.bind(store)}
							 newImg={store.getState().newImg}
							 newTitle={store.getState().newTitle}
							 newDescription={store.getState().newDescription}/>
					</BrowserRouter>, 
				document.getElementById('root'));
}

renderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	renderEntireTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
