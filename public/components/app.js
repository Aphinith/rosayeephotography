import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './home'
import About from './about'
import Portfolio from './portfolio'
import FAQ from './faq'
import Contact from './contact'
import './app.css'

class App extends Component {
  render() {
    return (
        <div>
          <h2>Welcome to Rosa Yee Photography</h2>
          <ul className="nav-bar-links">
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/portfolio'}>Portfolio</Link></li>
            <li><Link to={'/faq'}>FAQ</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
          </ul>
          <hr />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/faq' component={FAQ} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
    );
  }
}

export default App;