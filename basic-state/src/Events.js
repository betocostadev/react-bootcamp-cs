import React,  { Component } from 'react'

class Events extends Component {
  constructor(props) {
    super(props)
    this.state = { message: false }
    // this.outerSetMessage = this.outerSetMessage.bind(this)
  }

  outerSetMessage() {
    this.state.message === false
      ? this.setState({ message: true})
      : this.setState({ message: false})
  }

  setArrow = () => {
    this.state.message === false
      ? this.setState({ message: true})
      : this.setState({ message: false})
  }

  render() {

    let setMessage = () => {
      console.log('Called')
      console.log(this.state.message)

      this.state.message === false
        ? this.setState({ message: true})
        : this.setState({ message: false})
        // this.setState({ message: true })
    }

    return (
      <div>
      <p>The first button calls the function declared inside the <code>render</code>, so there is no need to call <code>.bind(this)</code>.</p>
      <button onClick={setMessage}>Click me!</button>
      <p>But for the button below, we need to call it like: <code>onClick={'this.outerSetMessage.bind(this)'}</code> because it's calling the function <code>outerSetMessage</code> that was declared outside the <code>render()</code> scope.</p>
      <p>The usual way of fixing this 'problem' is to <code>bind</code> the function inside the constructor like: <code>this.setMessage = this.setMessage.bind(this)</code>. This way the scope will understand who is message.</p>
      <button onClick={this.outerSetMessage.bind(this)}>Click me!</button>
      <p>
        There are other two ways to solve this problem for functions declared before the <code>render()</code> function.
        Calling with an arrow function in the click handler:
        <code>onClick={'() => this.outerSetMessage()'}</code>
      </p>
      <button onClick={() => this.outerSetMessage()}>() => outerSetMessage</button>
      <p>Or you can declare the function before the render using the arrow syntax like: <code>anotherSet = () => setState</code></p>
      <button onClick={this.setArrow}>Set arrow func</button>

        {
          this.state.message
          ? <p>Button was clicked</p>
          : null
        }
      </div>
    )
  }
}

export default Events
