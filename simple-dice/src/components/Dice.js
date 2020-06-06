import React, { Component } from 'react'

import './Dice.css'

class Dice extends Component {
  render() {
    // const props = this.props
    return <i className={`Dice fas fa-dice-${this.props.face} ${this.props.rolling ? 'rolling' : ''}`}></i>
  }
}

export default Dice
