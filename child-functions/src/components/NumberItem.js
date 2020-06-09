import React, { Component } from 'react'

class NumberItem extends Component {
  // Use the constructor to avoid creating new functions at every re-render
  constructor(props) {
    super(props)

    this.handleRemove = this.handleRemove.bind(this)
  }

  // Create a function to handle the method passed as a props
  handleRemove (evt) {
    this.props.remove(this.props.value)
  }

  render() {
    return (
      <li>
        { this.props.value }
        <button onClick={this.handleRemove}>X</button>
      </li>
    )
  }
}

export default NumberItem
