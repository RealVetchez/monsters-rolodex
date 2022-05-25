import { Component } from 'react';

import './App.css';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchString: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) =>
				this.setState(() => {
					return { monsters: users };
				})
			);
	}

	onSearchChange = (event) => {
		const searchString = event.target.value.toLowerCase();
		this.setState(() => {
			return { searchString };
		});
	};

	render() {
		const { monsters, searchString } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchString);
		});

		return (
			<div className="App">
				<h1 className="app-title">Monster Rolodex</h1>
				<SearchBox onChangeHandler={onSearchChange} className={'searchBox'} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
