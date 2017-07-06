import React from 'react';

import Search from './Search';
import MovieSearch from './MovieSearch';

function Movie(props) {
	return (
		<div>
			<Search history={props.history} handleMovieName={props.handleMovieName} getData={props.getData} />
			{props.results && <MovieSearch results={props.results} setPathForDetails={props.setPathForDetails} history={props.history} />}
		</div>
	)
}

export default Movie;
