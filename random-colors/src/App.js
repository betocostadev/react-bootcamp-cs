import React from 'react'
import './App.css'
import ColorContainer from './components/ColorContainer'

function App() {
  return (
    <div className="App">
      <h1>Random Colors</h1>
      <ColorContainer boxes={20}/>
    </div>
  )
}

export default App
