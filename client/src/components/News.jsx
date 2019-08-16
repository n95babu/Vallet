import React from 'react'


export default (props) => (
  <div className='newsItem' >
    {props.news.map(news => (
      <div key={news.id}>
        <h3 className="newsTitle">{news.title}</h3>
      </div>
    ))}
  </div>
)