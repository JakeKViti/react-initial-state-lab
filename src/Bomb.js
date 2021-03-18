// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {
  constructor(n) {
    super()
    this.state = {
      secondsLeft: n.initialCount
    }
  }

    render() {
      let notication = this.state.secondsLeft === 0 ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`;

      return (
        <h1>
          {notication}
        </h1>
      )
    }
  }
  


  
