import React, { Component } from 'react'
import './Pokecard.css'

const imagesAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

class Pokecard extends Component {
  render() {
    const props = this.props

    let imageID = props.id
    let padToThree = (num) => (num <= 999 ? `00${num}`.slice(-3) : num)

    return (
      <div className="Pokecard">
        <h3>{props.name}</h3>
        <table>
        <caption>Statistics</caption>
          <thead>
            <tr>
              <th>Type</th>
              <th>Experience</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.type}</td>
              <td>{props.exp}</td>
            </tr>
          </tbody>
        </table>
        <img src={`${imagesAPI}${padToThree(imageID)}.png`} alt={props.name + ' Pokemon'} />
      </div>
    )
  }
}

export default Pokecard
