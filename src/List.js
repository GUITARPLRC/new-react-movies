import React, { Component } from 'react';
import ListMovies from './ListMovies';
import './List.css';

class List extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: null,
			totalListLength: 20
		}
		this.moveLeft = this.moveLeft.bind(this);
		this.moveRight = this.moveRight.bind(this);
		this.checkListLength = this.checkListLength.bind(this);
	}

	componentWillMount() {
		let url;
		if (this.props.type) {
			url = `https://api.themoviedb.org/3/movie/${this.props.type}?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&page=1`;
		} else if (this.props.id) {
			url = `https://api.themoviedb.org/3/discover/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${this.props.id}`;
		} else {
			return null
		}

		fetch(url)
			.then(data => data.json())
			.then(res => this.setState({ list: res.results }))
			.then(this.checkListLength);

	}

	moveLeft() {
		let list = document.querySelector(`#${this.props.name}`);
		let position = list.getBoundingClientRect();
		var val = position.left + 500;
		if (position.left === 0) {
			return
		} else {
			list.style.left = val +'px';
		}
	}
	moveRight() {
		let width = -((this.state.totalListLength * 500) - 1500);
		let list = document.querySelector(`#${this.props.name}`);
		let position = list.getBoundingClientRect();
		var val = position.left - 500;
		if (position.left <= width) {
			return
		} else {
			list.style.left = val +'px';
		}
	}

	checkListLength() {
		let num = 20;
		this.state.list.forEach((each) =>{
			if (each.backdrop_path == null) {
				num--;
			}
		})
		this.setState({totalListLength: num})
	}

	render() {
		return (
			<div className="movieCategory">
				<h3>{this.props.name}</h3>
				{ this.state.list && <ListMovies id={this.props.name} list={this.state.list} history={this.props.history} setPathForDetails={this.props.setPathForDetails} /> }
				<div className='carouselButtons'>
					<button onClick={this.moveLeft}>&#x3c;</button>
					<button onClick={this.moveRight}>&#x3e;</button>
				</div>
			</div>
		)
	}
}

export default List
