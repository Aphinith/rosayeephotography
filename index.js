import React, { Component } from 'react'
import { render } from 'react-dom'
import SearchBar from './public/components/searchBar.js'

class HelloWorld extends Component {
  render() {
    return (
      <div>
        <div>Hello World!</div>
        <div>
          <SearchBar />
        </div>
      </div>
    )
  }
}

render(<HelloWorld/>, document.getElementById('app'))