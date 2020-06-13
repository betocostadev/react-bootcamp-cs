import React from 'react'
import './App.css'

import BoxList from './components/BoxList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Using forms in React</h2>
        <h3>Box Maker</h3>
      </header>
      <div>
        <BoxList />
      </div>
    </div>
  )
}

export default App
