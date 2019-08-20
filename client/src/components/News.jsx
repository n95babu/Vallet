import React from 'react';


export default (props) => (
  <div>
    <h1>News</h1>
    <div className='newsItem' >
      {props.news.map(news => (
        <div key={news.id}>
          <h3 className="newsTitle">{news.title}</h3>
        </div>
      ))}
    </div>
  </div >
)

