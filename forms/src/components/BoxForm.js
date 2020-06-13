import React, { Component } from 'react'

import { v4 as uuidv4 } from 'uuid'

class BoxForm extends Component {
  constructor(props) {
    super(props)
    this.state = { height: 0, width: 0, color: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(evt) {
    // Using computed properties here. The value in the [matches the name]
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()

    const newBox = {...this.state, key: uuidv4()}
    this.props.createBox(newBox)

    this.setState({
      height: 0, width: 0, color: ''
    })
  }

  render() {
    return (
      <form className="box-form" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input type="number" name="height" id="height" min={50} max={300} step={50}
            value={this.state.height}
            onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="width">Width</label>
          <input type="number" name="width" id="width" min={50} max={300} step={50}
            value={this.state.width}
            onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="color">Color</label>
          <input type="text" name="color" id="color"
          value={this.state.color.toLocaleLowerCase()}
          onChange={this.handleChange} />
        </div>

        <button>Create box</button>
      </form>
    )
  }
}

export default BoxForm
