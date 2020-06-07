import React, { Component } from 'react'

class CoinFlipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'tails', imgUrl: 'http://www.pcgscoinfacts.com/UserImages/71009269r.jpg'},
      { side: 'heads', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg'}
    ]
  }
  constructor(props) {
    super(props)
    this.state = {
      curCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    }
  }

  choice = arr => {
    let random = Math.floor(Math.random() * arr.length)
    return arr[random]
  }

  flipCoin = () => {
    const flipped = this.choice(this.props.coins)
    this.setState(st => {
      return {
        curCoin: flipped,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (flipped.side === 'heads' ? 1 : 0),
        nTails: st.nTails + (flipped.side === 'tails' ? 1 : 0)
      }
    })
  }

  handleClick = () => {
    this.flipCoin()
  }

  render() {
    return (
      <div className="coin-flipper">
        <h2>Flip the coin</h2>
        <div className='coin'>
          {
            this.state.nFlips > 0
            ? <img src={this.state.curCoin.imgUrl} width='150px' alt={this.state.curCoin.side} />
            : null
          }
        </div>
        <button onClick={ this.handleClick }>Flip coin!</button>
        <p>Out of { this.state.nFlips } flips, there has been { this.state.nHeads } heads and { this.state.nTails } tails!</p>
      </div>
    )
  }
}

export default CoinFlipper
