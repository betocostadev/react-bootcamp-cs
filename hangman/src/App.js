import React, { Component } from "react"
import "./App.css"
import Hangman from "./Hangman"

import { randomWord } from './words'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman answer={randomWord()} />
      </div>
    );
  }
}

export default App;
