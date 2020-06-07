import React, { Component } from 'react'
import LotteryBall from './LotteryBall'

import './Lottery.css'

class Lottery extends Component {
  static defaultProps = {
    title: 'Mega',
    maxBalls: 6,
    maxNum: 60
  }

  constructor(props) {
    super(props)
    this.state = { balls: Array.from({ length: this.props.maxBalls })}

    this.handleClick = this.handleClick.bind(this)
  }

  generate() {
    console.log('Generating')
    this.setState(curState => ({
      balls: curState.balls.map(b => Math.floor(Math.random() * this.props.maxNum + 1))
    }))
    console.log(this.state)
  }

  handleClick() {
    this.generate()
  }

  render() {
    return (
      <section className="Lottery">
        <h2>{ this.props.title }</h2>
        <div className="Lottery-balls">
          {
            this.state.balls.map(b => <LotteryBall ball={b} />)
          }
        </div>
        <button className="play" onClick={this.handleClick}>Play!</button>
      </section>
    )
  }
}

export default Lottery
