import React, { Component } from 'react';
import Title from './Title/Title';
import Introduction from './Introduction/Introduction';
import BtnAddNewItem from './BtnAddNewItem/BtnAddNewItem';
import RecipeListContainer from './RecipeList/RecipeListContainer';

class LandingPage extends Component {
  render() {
    return (
    	<React.Fragment>
    		<Title />
    		<Introduction />
    		<BtnAddNewItem />
	    	<RecipeListContainer/>
    	</React.Fragment>
    );
  }
}

export default LandingPage;