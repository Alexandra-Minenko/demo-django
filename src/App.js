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
    		<Route path='/landingPage' component={LandingPage} />
    		<Route path='/pageAddNewRecipe' component={PageAddNewRecipe} />
	    	<Footer />
    	</BrowserRouter>
    );
  }
}

export default App;
