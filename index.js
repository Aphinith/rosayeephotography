import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBar from './public/components/searchBar.js'

class HelloWorld extends Component {
  constructor (props) {
    super (props);

    this.state = { id: null};
  }

  artistSearch(name, id) {
    console.log('this is the artist name:', name);
    console.log('this is artist id:', id);
  }

  render() {

    return (
      <div>
        <div>
          <SearchBar artistID={this.artistSearch}/>
        </div>
      </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))
