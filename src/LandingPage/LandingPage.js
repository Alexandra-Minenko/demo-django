import React, { Component } from 'react';
import Title from './Title/Title';
import Introduction from './Introduction/Introduction';
import BtnAddNewItem from './BtnAddNewItem/BtnAddNewItem';
import RecipeList from './RecipeList/RecipeList';

class LandingPage extends Component {
  render() {
    return (
    	<React.Fragment>
    		<Title />
    		<Introduction />
    		<BtnAddNewItem />
	    	<RecipeList />
    	</React.Fragment>
    );
  }
}

export default LandingPage;