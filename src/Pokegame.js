import React, { Component } from 'react';
import './Pokegame.css';
import Pokedex from './Pokedex';

class Pokegame extends Component {
	static defaultProps = {
		pokemon: [
			{ id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
			{ id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
			{ id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
			{ id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
			{ id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
			{ id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
			{ id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
			{ id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
		]
	};
	render() {
		let firstHand = [];
		let secondHand = [...this.props.pokemon];

		while (firstHand.length < secondHand.length) {
			let randomInx = Math.floor(Math.random() * secondHand.length);
			let randPokemon = secondHand.splice(randomInx, 1)[0];
			firstHand.push(randPokemon);
		}

		return (
			<div className="Pokegame">
				<Pokedex pokemon={firstHand} />
				<Pokedex pokemon={secondHand} />
			</div>
		);
	}
}

export default Pokegame;
