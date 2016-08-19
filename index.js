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
                   image: null 
      };
    this.artistSearch = this.artistSearch.bind(this);
  }

  artistSearch(name, id, image) {
    this.setState({name, id, image})
    console.log('this.state:', this.state);
  }

  render() {

    return (
      <div>
        <div>
          <SearchBar artistID={this.artistSearch}/>
        </div>
        <div>
          <ArtistProfile profileInfo={this.state}/>
        </div>
        <div> 
          <ArtistTracks />
        </div>
      </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))
