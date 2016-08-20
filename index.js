import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBar from './public/components/searchBar.js'
import ArtistProfile from './public/components/artistProfile.js'
import ArtistTracks from './public/components/artistTracks.js'

class HelloWorld extends Component {
  constructor (props) {
    super (props);

    this.state = { name: null,
                   id: null,
                   image: null,
                   tracks: [] 
      };
    this.artistSearch = this.artistSearch.bind(this);
    this.trackList = this.trackList.bind(this);
  }

  artistSearch(name, id, image) {
    this.setState({name, id, image})
  }

  trackList(tracks) {
    this.setState({tracks})
  }

  render() {

    return (
      <div>
        <div id="instructions">
          Enter an artist name below and sample their top hits!
        </div>
        <div>
          <SearchBar artistInfo={this.artistSearch}
                     trackList={this.trackList}/>
        </div>
        <div id="container">
          <div id="artist-profile">
            <ArtistProfile profileInfo={this.state}/>
          </div>
          <div id="artist-tracks"> 
            <ArtistTracks trackList={this.state.tracks}/>
          </div>
          <div className="clear"></div>
        </div>
      </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))
