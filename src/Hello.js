import React, { Component } from 'react';
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className='f1 tc'>
        <h1>{this.props.greeting}</h1>
        <p>Welcome to React bitches</p>
      </div>
    )
  }
}


export default Hello;


//! the above is the same as using a function
//  const Hello = (props) => {
//    return (
//      <div className='f1 tc'>
//       <h1>{this.props.greeting}</h1>
//       <p>Welcome to React bitches</p>
//     </div>
//    );
//  }
