import React, { Component } from 'react';

import './Details.css';

class Details extends Component {
	render() {

		let genres = this.props.details.genres;
		let cast = this.props.cast;
		let castMarkup = null;

		let count = 0;
		let castList = [];
		while(count < 5) {
			if (cast[count].profile_path !== null) {
				let imgsrc = `http://image.tmdb.org/t/p/w154` + cast[count].profile_path
				castList.push(
					<li key={count}>
						<div className='eachCast'>
							<img src={imgsrc} alt={cast.name} />
							<h4>{cast[count].name}</h4>
							<h6>{cast[count].character}</h6>
						</div>
					</li>
				)
			}
			count++;
		}

		if (castList.length > 0) {
			castMarkup =
				<div id='cast'>
					<h3>Top Billed Cast</h3>
					<ul id='castList'>
					{castList}
					</ul>
				</div>;
			}

		let mainBackgroundStyle = {
			background: `url(http://image.tmdb.org/t/p/w1280/${this.props.details.backdrop_path}) no-repeat center center`,
			backgroundSize: 'cover',
			color: '#fff'
		}
	 return (
 		<div>
 			<div id='main' style={mainBackgroundStyle}>
 					<div id='info'>
 						<img src={'http://image.tmdb.org/t/p/w342' + this.props.details.poster_path} alt={`${this.props.details.title} poster`} />
 						<div id='details'>
 							<h2>{this.props.details.title} <span id='year'>({this.props.details.release_date.slice(0,4)})</span></h2>
 							<ul id='genreList'>
 								{
 									genres.map((each) => {
 										return <li className='eachGenre' key={each.name}>{each.name}</li>
 									})
 								}
 							</ul>
 							<p>{this.props.details.overview}</p>
 						</div>
 					</div>
 			</div>
			{ castMarkup }
 		</div>
 	)
 }
};

export default Details;
