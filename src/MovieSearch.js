import React, { Component } from 'react';

import './MovieSearch.css';

class MovieSearch extends Component {
	handleClick(id) {
		if(localStorage) {
			localStorage.setItem('movieId', id);
		}
		this.props.setPathForDetails(id)
		this.props.history.push(`/movie/${id}`);
	}

	render() {
		let results = this.props.results.map((each, key) => {

			const year = each.release_date.slice(0,4);
			const month = each.release_date.slice(5,7);
			const day = each.release_date.slice(8,10);
			const date = `${month}-${day}-${year}`;

			let overview;
			if (each.overview === '') {
				overview = 'Sorry, no description available';
			} else if (each.overview.split(' ').length < 30) {
				overview = each.overview;
			} else {
				overview = each.overview.split(' ').splice(0,30).join(' ') + '...';
			}

			if (each.poster_path !== null) {
				return (
					<div className='eachMovieSearch' key={key} onClick={() => this.handleClick(each.id)}>
						<img src={`http://image.tmdb.org/t/p/w185${each.poster_path}`} alt={each.title} />
						<div className='movieDescription'>
							<h3>{each.title}</h3>
							<p>{date}</p>
							<p>{overview}</p>
						</div>
					</div>
				)
			} else {
				return null
			}
		})

		return (
			<div className='movieSearch'>
				{results}
			</div>
		)
	}


}

export default MovieSearch
