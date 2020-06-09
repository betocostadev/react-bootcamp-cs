import React from 'react'
import './App.css'
import NumberList from './components/NumberList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Using child components to execute functions in the parent</h1>
      </header>
      <main className="container">
        <div>
          <p>The parent component usually have it's states and functions. We will use the child to change the state of the parent.</p>
          <p>How data flows</p>
          <ul>
            <li>A parent component defines a function</li>
            <li>The function is passed as a prop to a child component</li>
            <li>The child component invokes the prop</li>
            <li>The parent function is called, usually setting the new state</li>
            <li>The parent component is re-rendered along with its children</li>
          </ul>
        </div>
        <NumberList />
      </main>
    </div>
  )
}

export default App
