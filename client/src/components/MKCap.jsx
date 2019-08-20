import React from 'react'


export default (props) => (
  <div className='Cap' >
    {props.totalMarketCap.map(cap => (
      <div key={cap.id}>
        <h3 className="Cap">{cap.totalMarketCap}</h3>
      </div>
    ))}
  </div>
)


