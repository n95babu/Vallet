import React from 'react';
import { withRouter } from 'react-router-dom';

function EditCoin(props) {
  return (
    <div>
      <h3>Edit Coin</h3>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="photo"
          value={props.CoinForm.coin}
          onChange={props.handleFormChange} />
        <p>Coin</p>

        <input
          type="text"
          name="name"
          value={props.CoinForm.amount}
          onChange={props.handleFormChange} />
        <button>Edit</button>
      </form>
    </div>
  )
}

export default withRouter(EditCoin);