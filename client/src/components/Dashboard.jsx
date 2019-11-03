import React, { Component } from 'react';
import { userCurrencies } from '../services/api-helper'

import { Link, withRouter } from 'react-router-dom';
// import { button } from 'react-bootstrap';
import CryptoCard from './crypto/index'
import XRPCoin from './crypto/xrp'
import EthCoin from './crypto/Eth'
import BCHCoin from './crypto/Bch'
import LTCCoin from './crypto/Lite'
// import { summarizers } from 'istanbul-lib-report';
// import MKCap from './MKCap'

// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';



const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
}));

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
      <div className="page DashBoard">
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
          <div className="sec-coin">
            <LTCCoin
              name="Litecoin"
              symbol="LTC"
            />
            <XRPCoin
              name="Ripple"
              symbol="XRP"
            />
            <BCHCoin
              name="Bitcoin Cash"
              symbol="BCH"
            />
          </div>
        </div>
        {
          user.currencies.map(currency => (
            <div className="currency" key={currency.id}>
              <p>{currency.coin}</p>
              <p>{currency.amount}</p>
              <Fab
                variant="contained"
                color="secondary"
                className={useStyles.button}
                startIcon={<DeleteIcon />}
                onClick={() => {
                  this.props.deleteCoin(currency.id);
                  this.props.history.push('/dashboard')
                }}
              >
                <DeleteIcon fontSize="large" />

              </Fab>
            </div>
          ))
        }
        <div className="DashBoard-Links">
          <Link to="/new/coin"><Fab color="primary" aria-label="add" className={useStyles.fab}>
            <AddIcon />
          </Fab></Link>
          &nbsp; &nbsp; &nbsp;
          <Link to='/new/user'><Fab color="secondary" aria-label="edit" className={useStyles.fab}>
            <EditIcon />
          </Fab></Link>
        </div>
      </div>
    )
  }
};

export default withRouter(Dashboard);
