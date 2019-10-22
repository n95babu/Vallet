import React from 'react';
// import CryptoCard from './crypto/index';
// import XRPCoin from './crypto/xrp';
// import EthCoin from './crypto/Eth';
// import BCHCoin from './crypto/Bch';
// import LTCCoin from './crypto/Lite';


const LandingPg = (props) => {
  return (
    <div className="page landingpg">
      {/* <h1>Live Crypto</h1> */}
      <div>
        <h1 className="Total_cap">TotalMarketCap: ${Math.round(props.totalMarketCap)}</h1>
      </div>
      <h1>A connected Wallet for a conected World.</h1>
    </div>
  )
}

export default LandingPg;