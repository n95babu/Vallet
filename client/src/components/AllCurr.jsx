import React from 'react';
import { withRouter } from 'react-router';

function AllCurr(props) {
  return (
    <div className="page coin-container">
      {props.currency.map(coins => (
        <div
          key={coins.id}
          className="coin-card"
          onClick={() => {
            props.history.push(`/users/${UserId}/currencies`);
            window.scrollTo(0, 0);
          }}>
          <h3>
            <p>{coin.name}</p>
            <p>{coin.amount}</p>
          </h3>
        </div>
      ))}
      <div
        className="coin-card"
        onClick={() => {
          props.history.push('/new/coin');
          window.scrollTo(0, 0);
        }}>
        <h3>Add New Coin</h3>
      </div>
    </div>
  )
}
export default withRouter(AllCurr)