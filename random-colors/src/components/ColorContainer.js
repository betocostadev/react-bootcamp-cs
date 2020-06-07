import React, { Component } from 'react'
import ColorBox from './ColorBox'

class ColorContainer extends Component {
  static defaultProps = {
    boxes: 12
  }
  // const allBoxes = Array.from(this.props.boxes)
  render() {
    const allBoxes = Array.from({ length: this.props.boxes }).map(() => (
      <ColorBox />
    ))

    return (
      <div className="color-container">
       { allBoxes }
      </div>
    )
  }
}

export default ColorContainer
