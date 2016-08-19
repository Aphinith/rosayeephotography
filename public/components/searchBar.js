import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {

  constructor (props) {
    super(props);

    this.state = { term: 'Enter Artist Name Here'};
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange (term) {
    this.setState({term});
  }

  onSend (name, ID) {
    console.log('onSend was called!');
    console.log('this is name:', name);
    console.log('this is ID:', ID);
  }

  onSubmit (e) {
    e.preventDefault();
    var artist = this.state.term;
    var finalArtist = artist.replace(' ', '+')
    console.log('this is searched:', finalArtist);
    var that = this;
    axios.get('https://api.spotify.com/v1/search?q=' + finalArtist + '&type=artist')
      .then(function(response) {
        var id = response.data.artists.items[0].id;
        var name = response.data.artists.items[0].name;
        that.onSend(name, id);
      })

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
