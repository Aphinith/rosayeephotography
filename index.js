import React, { Component } from 'react'
import { render } from 'react-dom'
import NavigationBar from './public/components/navBar.js'
// import { Router, Route } from 'react-router'

class Main extends Component {
  constructor (props) {
    super (props);
  }

  render() {

    return (
      <div className="nav-bar-container">
        <NavigationBar />
      </div>
    )
  }
}

render(<Main/>, document.getElementById('app'))
