import React, { Component } from 'react';
import BtnBack from './BtnBack/BtnBack';
import './PageShowNewRecipe.css';

class PageShowNewRecipe extends Component {

  render() {

    return (
        <section className='pageShowNewRecipe'>
			<h3>{this.props.newTitle}</h3>
			<p>{this.props.newDescription}</p>
			<BtnBack />
        </section>
    );
  }
}

export default PageShowNewRecipe;