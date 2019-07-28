import React, { Component } from 'react';

class BtnAdd extends Component {

  render() {
    return (
      <div className='section'>
      	<form onSubmit={this.handleSubmit}>
          <button className='btnAdd'>add new item</button>
        </form>
      </div>
    );
  }
}

export default BtnAdd;