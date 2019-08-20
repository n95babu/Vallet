import React, { Component } from 'react';
import { userCurrencies } from '../services/api-helper'

import { Link, withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import CryptoCard from './crypto/index'
import XRPCoin from './crypto/xrp'
import EthCoin from './crypto/Eth'
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
        <div className='AllCard'>
          <CryptoCard
            name="Bitcoin"
            symbol="BTC"
          />
          <EthCoin
            name="Ethereum"
            symbol="ETH"
          />
          <CryptoCard
            name="Litecoin"
            symbol="Lite"
          />
          <XRPCoin
            name="Ripple"
            symbol="XRP"
          />
          <CryptoCard
            name="Bitcoin Cash"
            symbol="BCH"
          />
        </div>
        {
          user.currencies.map(currency => (
            <div className="currency" key={currency.id}>
              <p>{currency.coin}</p>
              <p>{currency.amount}</p>
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
