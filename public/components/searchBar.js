import React, { Component } from 'react';
import Axios from 'axios';

class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = { term: 'Enter Artist Name Here'};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange (term) {
    this.setState({term});
  }

  onSubmit (e) {
    e.preventDefault();
    var artist = this.state.term;
    var finalArtist = artist.replace(' ', '+')
    console.log('this is searched:', finalArtist);
    
  }

  render() {
    return (
        <div className="search-bar">
          <form onSubmit={this.onSubmit}>
            <input type="text" 
            placeholder="Enter Artist Name Here"
            onChange={event => this.onInputChange(event.target.value)}/>
            <input type="submit" value="search"/>
          </form>
        </div>
      )
  }


  // render () {
  //   return (
  //     <div className="search-bar">
  //       <input 
  //         value = {this.state.term}
  //         onChange={event => this.onInputChange(event.target.value)} />
  //     </div>
  //   );
  // }

  // onInputChange (term) {
  //   this.setState({term});
  //   this.props.onSearchTermChange(term);
  // }

}

export default SearchBar;
