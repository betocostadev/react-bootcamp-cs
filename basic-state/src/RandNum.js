import React, { Component } from 'react'

class RandNum extends Component {
  constructor (props) {
    super(props)
    this.state = { num: 0 }
    // You can call the function here, in the constructor -> This is not recommended
    // this.makeTimer()
  }

  makeTimer() {
    setInterval(() => {
      this.randomizer()
    }, 1000)
  }

  randomizer() {
    let newNum = Math.floor(Math.random() * this.props.maxNum)
    this.setState({ num: newNum })
  }

  // Using the lifecycle method ComponentDidMount
  componentDidMount() {
    this.makeTimer()
  }

  render() {
    return (
      <div>
      <p>Number is: {this.state.num}</p>
      </div>
    )
  }
}

export default RandNum
