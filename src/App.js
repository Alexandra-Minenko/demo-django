import React, { Component } from 'react';
import Header from './Header/Header';
import LandingPage from './LandingPage/LandingPage';
import PageAddNewRecipe from './PageAddNewRecipe/PageAddNewRecipe';
import PageShowNewRecipe from './PageShowNewRecipe/PageShowNewRecipe';
import PageEditRecipe from './PageEditRecipe/PageEditRecipe';
import Footer from './Footer/Footer';
import {Route} from 'react-router-dom';

class App extends Component {
	render() {
    return (
    	<React.Fragment>
   			<Header />
	    	<Route exact path='/' render={ () => <LandingPage /> } />
	    	<Route path='/pageAddNewRecipe' render={ () => <PageAddNewRecipe />} />
        
        <Route path='/pageShowNewRecipe' render={ () => <PageShowNewRecipe />} 
        />
        <Route path='/pageEditRecipe' render={ () => <PageEditRecipe />} 
        />
			  <Footer />
    	</React.Fragment>
  	);
  }
}

export default App;
