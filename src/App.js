import React, { Component } from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import PageAddNewRecipeContainer from './PageAddNewRecipe/PageAddNewRecipeContainer';
import PageShowNewRecipeContainer from './PageShowNewRecipe/PageShowNewRecipeContainer';
import PageEditRecipeContainer from './PageEditRecipe/PageEditRecipeContainer';
import Footer from './Footer/Footer';
import {Route} from 'react-router-dom';

class App extends Component {
	render() {
    return (
    	<React.Fragment>
   			<Header />
	    	<Route exact path='/' render={ () => <LandingPage /> } />
	    	<Route path='/pageAddNewRecipe' render={ () => <PageAddNewRecipeContainer />} />
        
        <Route path='/pageShowNewRecipe' render={ () => <PageShowNewRecipeContainer />} 
        />
        <Route path='/pageEditRecipe' render={ () => <PageEditRecipeContainer />} 
        />
			  <Footer />
    	</React.Fragment>
  	);
  }
}

export default App;
