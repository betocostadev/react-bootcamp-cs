import React, { Component } from "react"

import { randomWord } from './words'

import "./Hangman.css"
import img0 from "./0.jpg"
import img1 from "./1.jpg"
import img2 from "./2.jpg"
import img3 from "./3.jpg"
import img4 from "./4.jpg"
import img5 from "./5.jpg"
import img6 from "./6.jpg"

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    imagesAlt: ['game start', 'head draw', 'head and body draw', 'head, body, and right-arm', 'head, body, and arms draw', 'head, body, arms and right-leg', 'hangman draw']
  }

  constructor(props) {
    super(props)
    this.state = { nWrong: 0, guessed: new Set(), answer: randomWord(), gameOver: false }
    this.handleGuess = this.handleGuess.bind(this)
    this.restart = this.restart.bind(this)
  }

  restart() {
    this.setState({ nWrong: 0, guessed: new Set(), answer: randomWord(), gameOver: false })
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"))
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }))
    this.handleGameOver()
  }

  handleGameOver() {
    this.setState(st => ({
      gameOver: st.nWrong === this.props.maxWrong ? st.gameOver = true : st.gameOver = false
    }))
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ))
  }

  /** render: render game */
  render() {
    const winner = this.guessedWord().join('') === this.state.answer

    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={this.props.imagesAlt[this.state.nWrong]} />
        {
          this.state.gameOver === true
          ? <div>
              <h3>Game over!</h3>
              <p>The correct word was { this.state.answer }</p>
              <button className="Hangman-restart" onClick={this.restart}>Restart</button>
            </div>

          : <div>
              {
                winner
                ? <div>
                    <p className='Hangman-word'>{this.guessedWord()}</p>
                    <h3>You WIN!!!</h3>
                    <button className="Hangman-restart" onClick={this.restart}>Restart</button>
                  </div>

                : <div>
                  <p>Incorrect guesses: { this.state.nWrong }</p>
                  <p className='Hangman-word'>{this.guessedWord()}</p>
                  <p className='Hangman-btns'>{this.generateButtons()}</p>
                  </div>
              }
            </div>
        }
      </div>
    )
  }
}

export default Hangman
