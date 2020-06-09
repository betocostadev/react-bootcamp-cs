import React, { Component } from 'react'
import NumberItem from './NumberItem'

class NumberList extends Component {
  constructor(props) {
    super(props)

    this.state = { nums: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]}
    this.remove = this.remove.bind(this)
  }

  remove(num) {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }))
  }

  randomKeys() {
    let key = Math.floor(Math.random() * 10000)
    return key
  }

  render() {
    let nums = this.state.nums.map(n => <NumberItem value={n} key={this.randomKeys()} remove={this.remove} />)
    return (
      <div>
        <h2>Number list</h2>
        <ul>{ nums }</ul>
      </div>
    )
  }
}

export default NumberList
