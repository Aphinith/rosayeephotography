import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './searchBar.js';

class App extends Component {

  render() {

    return (

      <div>This is another test!</div>
      <div>
        <SearchBar /> 
      </div>

      )
  }

}

ReactDOM.render(<App />, document.getElementById('.app'));