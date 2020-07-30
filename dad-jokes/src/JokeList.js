import React, { Component } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import Joke from './Joke'
import './JokeList.css'

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10
  }

  constructor(props) {
    super(props)
    this.state = { jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]') }
    this.handleClick = this.handleClick.bind(this)
  }

  async componentDidMount() {
    if(this.state.jokes.length === 0) this.getJokes()
  }

  async getJokes() {
    let jokes = []
    while(jokes.length < this.props.numJokesToGet) {
      let resp = await axios.get('https://icanhazdadjoke.com/', { headers: { Accept: "application/json" }})
      jokes.push({ id: uuidv4(), text: resp.data.joke, votes: 0 })
    }
    this.setState(st => ({
      jokes: [...st.jokes, ...jokes]
    }),
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    )
  }

  handleVote(id, delta) {
    this.setState(st => ({
      jokes: st.jokes.map(j =>
        j.id === id ? { ...j, votes: j.votes + delta } : j
        )
    }),
      () => window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes))
    )
  }

  handleClick() {
    this.getJokes()
  }

  render() {
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title"><span>Dad</span> Jokes</h1>
          <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" alt="Smiling emoji" />
          <button className="JokeList-getmore" onClick={this.handleClick}>New Jokes</button>
        </div>
        <div className="JokeList-jokes">
          {
            this.state.jokes.map(jk => (
              <Joke
                key={jk.id}
                votes={jk.votes}
                text={jk.text}
                upvote={() => this.handleVote(jk.id, 1)}
                downvote={() => this.handleVote(jk.id, -1)}
                 />
            ))
          }
        </div>
      </div>
    )
  }
}

export default JokeList
