import React, { Component } from 'react'
import { LTC } from '../../services/api-helper'

class LTCCoin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.name,
      symbol: props.symbol,
      price: null,
      lastPrice: null,
    }
    this.pollPrice = this.pollPrice.bind(this)
  }

  componentDidMount() {
    this.pollPrice()
    setInterval(this.pollPrice, 10000)
  }

  async pollPrice() {
    const data = await LTC();
    this.setState((prevState) => ({
      price: data.USD,
      lastPrice: prevState.price !== data.USD
        ? prevState.price
        : prevState.lastPrice
    }));

  }

  priceChnage(lastPrice, price) {
    const diff = lastPrice - price
    const change = diff / lastPrice
    return (change * 100).toFixed(3)
  }

  render() {
    const { name, price, lastPrice } = this.state
    const gainloss = lastPrice > price
      ? 'loss'
      : 'gain'
    return (
      <div className='alignment'>
        <div className='AllCard'>
          <div className={`card ${gainloss}`}>
            <div className='name'>
              {name}
              <span>({this.state.symbol})</span>
            </div>
            <div className={`percantage ${gainloss}`}>
              {this.priceChnage(lastPrice, price)} %
        </div>


            <div className='logo'>

            </div>
            <div className={`price ${gainloss}`}>
              ${price}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LTCCoin;