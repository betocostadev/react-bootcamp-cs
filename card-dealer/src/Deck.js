import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './Deck.css'

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'

class Deck extends Component {
  constructor (props) {
    super(props)
    this.state = { deck: null, drawn: [] }

    this.getCard = this.getCard.bind(this)
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`)
    this.setState({ deck: deck.data })
  }

  async getCard() {
    // Make a request using the deck ID and set the state using the new card info
    let deckId = this.state.deck.deck_id

    try {
      let cardUrl = `${API_BASE_URL}/${deckId}/draw/`
      let cardResp = await axios.get(cardUrl)

      if (!cardResp.data.success) {
        throw new Error('No cards remaining!')
      }
      console.log(cardResp.data)

      let card = cardResp.data.cards[0]
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          { id: card.code, image: card.image, name: `${card.value} of ${card.suit}`}
        ]
      }))
    } catch (error) {
      alert(error)
    }

  }

  render() {
    const cards = this.state.drawn.map(c => (
      <Card key={c.id} name={c.name} image={c.image} />
    ))

    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={ this.getCard }>Get card!</button>
        <div className="Deck-cards">
          {cards}
        </div>
      </div>
    )
  }
}

export default Deck
