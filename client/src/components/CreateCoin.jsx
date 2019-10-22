import React from 'react'
import { withRouter } from 'react-router-dom';


const CreateCoin = (props) => {
  return (
    <div className="page create-form" >
      <form onSubmit={props.onSubmit}>
        <label htmlFor="coin"> Coin: </label>
        <input
          type="text"
          name="coin"
          id="coin"
          onChange={props.onChange}
        />

        <label htmlFor="amount"> Amount: </label>
        <input
          type="number"
          name="amount"
          id="coin"
          onChange={props.onChange}
        />



        <button> Submit </button>

      </form>
    </div>

  )
}

export default withRouter(CreateCoin);
