import React from 'react'

export default (props) => (
  <div>
    {props.news.map(news => (
      <div key={news.id}>
        <h3>{news.title}</h3>
      </div>
    ))}
    <h1>Working on it</h1>
  </div>
)