import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Title from './Title';
import Home from './Home';
import Movie from './Movie';
import MovieDetails from './MovieDetails';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movieName: null,
			results: null,
			movieId: null
		};
		this.handleMovieName = this.handleMovieName.bind(this);
		this.getData = this.getData.bind(this);
		this.setPathForDetails = this.setPathForDetails.bind(this);
	}

	componentWillMount() {
		if (localStorage) {
			if (localStorage.getItem('movieName')) {
				let name = localStorage.getItem('movieName');
				this.setState({ movieName: name }, this.getData);
			}
			if (localStorage.getItem('movieId')) {
				let id = localStorage.getItem('movieId');
				this.setState({ movieId: id });
			}
		}
	}

	handleMovieName(name) {
		this.setState({ movieName: name }, this.getData);
	}

	getData() {
		let url = `https://api.themoviedb.org/3/search/movie?api_key=c4caddf3d2f1e3a21633c2611179f2e4&query=${this.state
			.movieName}`;

		fetch(url)
			.then(res => res.json())
			.then(data => this.setState({ results: data.results }));
	}

	setPathForDetails(id) {
		this.setState({ movieId: id });
	}

	render() {
		return (
			<div>
				<Title />

				<Router>
					<Route
						render={({ location, history, match }) => {
							return (
								<Switch key={location.key} location={location}>
									<Route
										exact
										path="/movie/index.html"
										render={props => (
											<Home
												handleMovieName={this.handleMovieName}
												getData={this.getData}
												results={this.state.results}
												setPathForDetails={this.setPathForDetails}
												{...props}
											/>
										)}
									/>
									<Route
										exact
										path="/movie/"
										render={props => (
											<Home
												handleMovieName={this.handleMovieName}
												getData={this.getData}
												results={this.state.results}
												setPathForDetails={this.setPathForDetails}
												{...props}
											/>
										)}
									/>
									<Route
										exact
										path="/movie/movie"
										render={props => (
											<Movie
												handleMovieName={this.handleMovieName}
												movieName={this.state.movieName}
												getData={this.getData}
												results={this.state.results}
												setPathForDetails={this.setPathForDetails}
												{...props}
											/>
										)}
									/>
									<Route
										exact
										path={`/movie/movie/${this.state.movieId}`}
										render={props => (
											<MovieDetails movieId={this.state.movieId} handleMovieName={this.handleMovieName} {...props} />
										)}
									/>
								</Switch>
							);
						}}
					/>
				</Router>
			</div>
		);
	}
}

export default App;
