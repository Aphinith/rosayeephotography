import React, { Component } from 'react'
import { render } from 'react-dom'
// import { Router, Route } from 'react-router'

class Main extends Component {
  constructor (props) {
    super (props);
  }

  render() {

    return (
      <div>
        This will be the main home page!!!!!
      </div>
    )
  }
}

render(<Main/>, document.getElementById('app'))
