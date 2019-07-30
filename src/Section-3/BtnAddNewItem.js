import React, { Component } from 'react';
import './BtnAddNewItem.css';

class BtnAddNewItem extends Component {

  render() {
    return (
      	<form className='section' onSubmit={this.handleSubmit}>
          <button className='btnAddNewItem'>add new item</button>
        </form>
    );
  }
}

export default BtnAddNewItem;