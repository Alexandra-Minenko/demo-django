import React, { Component } from 'react';

class BtnAdd extends Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submitted')
  }
  submit() {
    console.log('submit');
  }
  render() {
    return (
      <div className='section'>
      	<form onSubmit={this.handleSubmit}>
          <button className='submitBtn' onClick={this.submit.bind(this)}>add new item</button>
        </form>
      </div>
    );
  }
}

export default BtnAdd;