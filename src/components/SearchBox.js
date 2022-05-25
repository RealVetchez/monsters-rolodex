import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
	render() {
		return (
			<input
				className={`search-box ${this.props.className}`}
				type="search"
				placeholder="search monsters"
				onChange={this.props.onChangeHandler}
			/>
		);
	}
}

export default SearchBox;
