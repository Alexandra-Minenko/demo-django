import React, { Component } from 'react';
import Header from './Header/Header';
import Title from './Section-1/Title';
import Introduction from './Section-2/Introduction';
import BtnAddNewItem from './Section-3/BtnAddNewItem';
import RecipeList from './Section-3/RecipeList';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
    	<React.Fragment>
    		<Header />
    		<Title />
    		<Introduction />
    		<BtnAddNewItem />
	    	<RecipeList />
	    	<Footer />
    	</React.Fragment>
    );
  }
}

export default App;
