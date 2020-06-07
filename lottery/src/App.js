import React from 'react'
import './App.css'

import Lottery from './components/Lottery'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Lottery</h2>
      </header>
      <Lottery title='Mega' />
      <Lottery title='Quina' maxNum={50} maxBalls={5} />
    </div>
  )
}

export default App
