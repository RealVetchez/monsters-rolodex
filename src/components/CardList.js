import React, { Component } from 'react';
import Card from './Card';
import './CardList.css';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div className="card-list">
				{monsters.map((monster) => {
					return <Card monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;
