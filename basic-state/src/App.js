import React, { Component } from 'react'

import RandNum from './RandNum'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Basic state</h1>
      <p>If you need to use <code>state</code> inside <code>super</code>, you need to call <code>super(props)</code>.</p>
      <RandNum maxNum={60} />
      </div>
    )
  }
}

export default App
