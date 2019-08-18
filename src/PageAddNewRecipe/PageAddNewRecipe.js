import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import FormForAddRecipe from './FormForAddRecipe/FormForAddRecipe';
import PageShowNewRecipe from '../PageShowNewRecipe/PageShowNewRecipe';
import leaf2 from '../Images/leaf2.png';
import './PageAddNewRecipe.css';

class PageAddNewRecipe extends Component {
  render() {
    return (
    	<BrowserRouter>
	        <div className='addNewRecipe'>
	          <img src={leaf2} alt='leaf2'/>
	          <Route path='/pageAddNewRecipe' 
	          	render={ () =>
	          		<FormForAddRecipe addNewRecipe={this.props.addNewRecipe} 
						          	  newImg={this.props.newImg}
						          	  newTitle={this.props.newTitle}
						          	  newDescription={this.props.newDescription}
						          	  updateNewRecipe={this.props.updateNewRecipe} 
	          		/>
	          	}
	          />
	          <Route path='/pageShowNewRecipe' 
	          	render={ () => 
	          		<PageShowNewRecipe newTitle={this.props.newTitle}
	          						   newDescription={this.props.newDescription}/>
	          	} 
	          />
	          <div className='block'>
				<img src={this.props.newImg} />
	          </div>
	        </div>
        </BrowserRouter>
    );
  }
}

export default PageAddNewRecipe;