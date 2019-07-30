import React, { Component } from 'react';
import leaf from '../Images/leaf.png';
import './Introduction.css';

class Introduction extends Component {
  render() {
    return (
    	<section className='wrap'>
    		<section className='introduction'>
	    		<img src={leaf} alt='leaf'/>
	    		<h2>daily healthy food</h2>
	    		<p>Your food choices each day affect your health — how you feel today, tomorrow, and in the future. Good nutrition is an important part of leading a healthy lifestyle. Combined with physical activity, your diet can help you to reach and maintain a healthy weight, reduce your risk of chronic diseases, and promote your overall health.</p>
    		</section>
    	</section>
    );
  }
}

export default Introduction;