import React, { Component } from 'react';

import Search from './Search';
import Details from './Details';

class MovieDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			details: null,
			cast: null
		}
	}
	componentWillMount() {
		let id = this.props.movieId;

		if (localStorage) {
			localStorage.setItem('movieId', id);
		}

		let detailsUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=c4caddf3d2f1e3a21633c2611179f2e4&language=en-US`;
		let castUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c4caddf3d2f1e3a21633c2611179f2e4`

		fetch(detailsUrl)
			.then(res => res.json())
			.then(data => this.setState({details: data}));

		fetch(castUrl)
			.then(res => res.json())
			.then(data => this.setState({cast: data.cast}));
	}

	componentDidMount() {
		window.scrollTo(0,0)
	}
	render() {
		return (
			<div>
				<Search history={this.props.history} handleMovieName={this.props.handleMovieName} />
				{ this.state.details && this.state.cast && <Details details={this.state.details} cast={this.state.cast} /> }
			</div>
		)
	};
};

export default MovieDetails;
