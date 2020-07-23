import React, { Component } from 'react'
import GithubUserInfo from './GithubUserInfo'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <GithubUserInfo username="betocostadev"/>
        <GithubUserInfo username="gearon"/>
        <GithubUserInfo username="colt"/>
      </div>
    )
  }
}

export default App
