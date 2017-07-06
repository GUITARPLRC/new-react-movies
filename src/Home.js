import React from 'react';

import Search from './Search';
import List from './List';

function Home(props) {
	return (
		<div>
			<Search history={props.history} handleMovieName={props.handleMovieName} />
			<List type='now_playing' name="NowPlaying" results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='80' name='Crime' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='10752' name='War' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='9648' name='Mystery' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='878' name='Sci-Fi' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='10751' name='Family' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='27' name='Horror' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='18' name='Drama' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='35' name='Comedy' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='28' name='Action' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
			<List id='10749' name='Romance' results={props.results} history={props.history} setPathForDetails={props.setPathForDetails} />
		</div>
	)
}

export default Home
