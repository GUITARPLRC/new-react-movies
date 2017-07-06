import React, { Component } from 'react';
import './ListMovies.css';

class ListMovies extends Component {
	constructor(props) {
		super(props);

		this.showMovie = this.showMovie.bind(this);
	}

	showMovie(id) {
		this.props.setPathForDetails(id);
		this.props.history.push(`/movie/${id}`)
	}

	render() {
		return (
			<div className="eachMovie" id={this.props.id}>
				{
					this.props.list.map((each, key) => {
						if (each.backdrop_path == null) {
							return null
						} else {
							return (
								<div key={key} id={each.id} onClick={() => this.showMovie(each.id)}>
									<img src={'http://image.tmdb.org/t/p/w500' + each.backdrop_path} alt={each.title} />
									<div className='listDetails'>
										<p>{each.title}</p>
									</div>
								</div>
							)
						}
					})
				}
			</div>
		)
	}
}

export default ListMovies
