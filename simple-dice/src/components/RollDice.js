import React, { Component } from 'react'

import Dice from './Dice'

import './RollDice.css'

class RollDice extends Component {
  static defaultProps = {
    faces: ['one', 'two', 'three', 'four', 'five', 'six']
  }

  constructor(props) {
    super(props)
    this.state = {
      dice1: 'one',
      dice2: 'two',
      dice3: 'three',
      dice4: 'four',
      isRolling: false
    }
  }

  roll = () => {
    console.log('Rolling')
    const newDice1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]
    const newDice2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]
    const newDice3 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]
    const newDice4 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)]

    this.setState({ isRolling: true })

    setTimeout(() => {
      this.setState({ dice1: newDice1, dice2: newDice2, dice3: newDice3, dice4: newDice4, isRolling: false})
    }, 650)
  }

  render() {
    return (
      <div className="RollDice">
        <h2>Dice roller</h2>
        <div className="RollDice-container">
          <Dice face={this.state.dice1} rolling={this.state.isRolling} />
          <Dice face={this.state.dice2} rolling={this.state.isRolling} />
          <Dice face={this.state.dice3} rolling={this.state.isRolling} />
          <Dice face={this.state.dice4} rolling={this.state.isRolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll dice!'}
        </button>
      </div>
    )
  }
}

export default RollDice
