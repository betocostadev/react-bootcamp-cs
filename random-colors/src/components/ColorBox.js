import React, { Component } from 'react'

class ColorBox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      colors: { r: 0, g: 0, b: 0, a: 1}
    }
  }

  generateColor = () => {
    // console.log(Math.floor(Math.random() * 255 + 1))
    return Math.floor(Math.random() * 255 + 1)
  }

  generateAlpha = () => {
    return Math.random().toFixed(1)
  }

  setColor = () => {
    const red = this.generateColor()
    const green = this.generateColor()
    const blue = this.generateColor()
    const alpha = this.generateAlpha()

    this.setState(st => {
      return {
        colors: {
          ...st,
          r: red,
          g: green,
          b: blue,
          a: alpha
        }
      }
    })
  }

  handleClick = () => {
    this.setColor()
  }

  componentDidMount () {
    this.setColor()
  }

  render() {
    return (
      <div>
        <div
          onClick={this.handleClick}
          style={{ cursor: 'pointer', width: '150px', height: '150px', padding: '10px',
            backgroundColor: `rgba(${this.state.colors.r}, ${this.state.colors.g}, ${this.state.colors.b}, ${this.state.colors.a})`}}>
            <span>rgba({this.state.colors.r}, {this.state.colors.g}, {this.state.colors.b}, {this.state.colors.a}) </span>
        </div>
      </div>
    )
  }
}

export default ColorBox
