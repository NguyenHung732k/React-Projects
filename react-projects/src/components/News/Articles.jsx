import React from 'react'

import './ArticlesStyles.css'

const Articles = ({ desc, title, imageURL, newsURL, sourceName }) => {
  return (
    <div className="article-container card my-3">
      <img src={imageURL} className="card-img-top" alt="..." />
      <div className="article card-body">
        <h5 className="article card-title">{title}</h5>
        <p className="article w-100 fs-6 text-body-secondary text-end"> - {sourceName} </p>
        <p className="article card-text">{desc}</p>
        <a href={newsURL}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary btn-sm">
          Read More...
        </a>
      </div>
    </div>
  )
}

export default Articles