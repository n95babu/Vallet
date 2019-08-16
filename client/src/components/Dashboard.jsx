import React, { Component } from 'react';
import { userCurrencies } from '../services/api-helper'

import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

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
        {
          user.currencies.map(currency => (
            <div className="currency" key={currency.id}>
              <p>{currency.coin}</p>
              <p>{currency.amount}</p>
              <button>Edit</button>
              <Button variant="danger"
                onClick={() => {
                  this.props.deleteCoin(currency.id);
                  this.push.history.push('/dashboard')
                }} > Delete</Button>
            </div>

          ))
        }
        <Link to="/new/coin">Add Coin</Link>
        <Link to='/new/user'>UPDATE PROFILE</Link>
      </div>
    )
  }
}

export default Dashboard
