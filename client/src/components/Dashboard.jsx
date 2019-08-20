import React, { Component } from 'react';
import { userCurrencies, ApiCap } from '../services/api-helper'

import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CryptoCard from './index'
// import MKCap from './MKCap'

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currency: [],
    }
  }

  getCoin = async () => {
    const coins = await userCurrencies();
    this.setState({
      coins
    })
  }


  render() {
    let user;
    if (this.props.currentUser) {
      user = this.props.currentUser
    } else {
      user = {}
      user.currencies = []
    }

    return (
      <div className="DashBoard">
        <h3 className="currentUser">Welcome, {user.first_name}!</h3>
        <CryptoCard
          name="Bitcoin"
          symbol="BTC"
        />
        {
          user.currencies.map(currency => (
            <div className="currency" key={currency.id}>
              <p>{currency.coin}</p>
              <p>{currency.amount}</p>
              <button>Edit</button>
              <Button variant="danger"
                onClick={() => {
                  this.props.deleteCoin(currency.id);
                  this.props.history.push('/dashboard')
                }} > Delete</Button>
            </div>
          ))
        }
        <div className="DashBoard-Links">
          <Link to="/new/coin">Add Coin</Link>
          &nbsp; &nbsp; &nbsp;
          <Link to='/new/user'>UPDATE PROFILE</Link>
        </div>
      </div>
    )
  }
};

export default withRouter(Dashboard);
