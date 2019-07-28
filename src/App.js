import React, { Component } from 'react';
import Title from './Title';
import Introduction from './Introduction';
import BtnAdd from './BtnAdd';
import RecipeList from './RecipeList';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
    	<div>
    		<Title />
    		<Introduction />
    		<BtnAdd />
	    	<RecipeList />
	    	<Footer />
    	</div>
    );
  }
}

export default App;
