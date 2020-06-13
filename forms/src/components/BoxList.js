import React, { Component } from 'react'

import Box from './Box'
import BoxForm from './BoxForm'

class BoxList extends Component {
  constructor(props) {
    super(props)

    this.state = { boxes: [ ] }
    this.createBox = this.createBox.bind(this)
  }

  removeBox (id) {
    console.log('removing')
    this.setState({
      boxes: this.state.boxes.filter(box => box.id !== id)
    })
  }

  createBox (newBox) {
    // const id =
    this.setState({
      boxes: [...this.state.boxes, newBox]
    })
  }

  render() {
    // Besides the key prop we are also passing the id as an identifier, to be able to remove the box from the other component
    const boxes = this.state.boxes.map(b => (
      <Box key={b.key} id={b.key} height={b.height} width={b.width} color={b.color} removeBox={() => this.removeBox(b.id)} />
    ))
    return (
      <div>
        <h2>Color box maker</h2>
        <BoxForm createBox={this.createBox} />
        { boxes }
      </div>
    )
  }
}

export default BoxList
