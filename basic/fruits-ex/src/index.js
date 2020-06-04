import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import foods from './foods'
import { choice, remove } from './helpers'

let fruit = choice(foods)
let remaining = remove (foods, fruit)
console.log(`I'd like one ${fruit}, please`)

const App = () => {
  return (
    <div>
    <header>
      <h1>Fruits App</h1>
    </header>
    <p>I'd like one {fruit}, please.</p>
    <p>Here it is: {fruit}</p>
    <p>Now there is left: <span className="foods">{remaining.join(', ')}.</span></p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
