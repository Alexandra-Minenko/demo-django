import React, { Component } from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import PageAddNewRecipe from './PageAddNewRecipe/PageAddNewRecipe';
import Footer from './Footer/Footer';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
    	<BrowserRouter>
   			<Header />
	    	<Route exact path='/' render={ () => 
	    			<LandingPage recipes={this.props.recipes} /> } />
	    	<Route path='/pageAddNewRecipe' 
	    		render={ () => <PageAddNewRecipe
	    			recipes={this.props.recipes} 
	    			addNewRecipe={this.props.addNewRecipe}
	    			newImg={this.props.newImg}
	    			newTitle={this.props.newTitle}
	    			newDescription={this.props.newDescription}
	    			updateNewRecipe={this.props.updateNewRecipe}
	    			/> } />
			<Footer />	
    	</BrowserRouter>
    );
  }
}

export default App;
