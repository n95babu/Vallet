import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';
import logo from '../assets/vallet.png'


export class Navbar extends Component {
  constructor(props) {
    super(props);
  };

  logOut = (props) => {
    localStorage.clear();
    this.props.history.push('/home')
  }



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
      </div>
    )
  }
}

export default Navbar;
