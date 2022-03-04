import React, { Component } from 'react'
import Chips from './components/Chips/Chips'
import Sardines from './components/Sardines/Sardines'
import Soda from './components/Soda/Soda'
import Navbar from './components/Navbar/Navbar'
import VendingMachine from './components/VendingMachine/VendingMachine'
import { Route, Switch } from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/sardines" render={() => <Sardines />} />
          <Route exact path="/chips" render={() => <Chips />} />
        </Switch>
      </div>
    )
  }
}

export default App
