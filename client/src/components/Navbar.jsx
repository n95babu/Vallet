import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

import logo from '../assets/vallet.png'
import Dashboard from './Dashboard'
import LandingPg from './LandingPg'


export class Navbar extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="header">
        <div id="header-logo">
          <Link to="/Home">
            <img className="logo" src={logo} alt="Logo" />
          </Link>
        </div>
        <div id="header-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            {/* &nbsp; &nbsp; &nbsp; */}
            <li><Link to="/dashboard">Dashboard</Link></li>
            {/* &nbsp; &nbsp; &nbsp; */}
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>

        <Route exact path="/dashboard"
          render={() =>
            <Dashboard
              currentUser={this.state.currentUser}
            />}
        />

        <Route exact path="/home"
          render={(props) => (
            <LandingPg />

          )}

        />


      </div>
    )
  }
}

export default Navbar;
