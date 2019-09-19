import {createStore} from 'redux';
import newRecipeReducer from './newRecipeReducer';


let store = createStore(newRecipeReducer);
window.store = store;
export default store;