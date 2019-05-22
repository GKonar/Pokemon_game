import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
const POKE_HD_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
	addZero(num) {
		if (num < 10) {
			return '00' + num;
		} else if (num >= 10 && num < 100) {
			return '0' + num;
		} else {
			return '' + num;
		}
	}

	render() {
		let imgSrc = `${POKE_HD_API}/${this.addZero(this.props.id)}.png`;
		return (
			<div className="Pokecard">
				<h2>{this.props.name}</h2>
				<img className="Pokecard-img" src={imgSrc} alt={this.props.name} />
				<div>Type: {this.props.type}</div>
				<div>EXP: {this.props.exp}</div>
			</div>
		);
	}
}

export default Pokecard;
