import React from 'react';

export default (props) => (
  <>
    <div className='page newsItem' >
      {props.news.map(news => (
        <div key={news.id}>
          <div class="card" id='news_card'>
            <div class="card-body">
              <h5 class="card-title">{news.title}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>

  </>
)

