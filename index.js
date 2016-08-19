import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBar from './public/components/searchBar.js'
import ArtistProfile from './public/components/artistProfile.js'
import ArtistTracks from './public/components/artistTracks.js'

class HelloWorld extends Component {
  constructor (props) {
    super (props);

    this.state = { id: null};
    this.artistSearch = this.artistSearch.bind(this);
  }

  artistSearch(name, id) {
    this.setState({id})
    console.log('this.state.id:', this.state.id);
  }

  render() {

    return (
      <div>
        <div>
          <SearchBar artistID={this.artistSearch}/>
        </div>
        <div>
          <ArtistProfile />
        </div>
        <div> 
          <ArtistTracks />
        </div>
      </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))
