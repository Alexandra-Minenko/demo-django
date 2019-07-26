import React, { Component } from 'react';
import BtnAdd from './BtnAdd';
import RecipeList from './RecipeList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    	<div>
    		<BtnAdd />
	    	<RecipeList />
	    	<Footer />
    	</div>
    );
  }
}

export default App;
