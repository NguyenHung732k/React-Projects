import React, { useEffect, useState } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

import ImageNotFound from '../../img-not-available.jpg'

import Articles from './Articles'

import './NewsStyles.css'

const News = ({ category }) => {

  const [articles, setArticles] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [page, setPage] = useState(1)


  useEffect(() => {
    const fetchNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`

      const data = await fetch(url)
      const result = await data.json()
      setArticles(result.articles)
      setTotalResults(result.totalResults)
    }
    fetchNews()
  }, [category, page])

  let fetchData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&page=${page + 1}&apiKey=ecfaf9eaaa8d40a5b5d769210f5ee616`;
    setPage(page + 1)
    const data = await fetch(url)
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
  }

  return (
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchData}
      hasMore={articles.length < totalResults}
      loader={<h4 className="text-center"> Loading... </h4>}
      endMessage={<p style={{ textAlign: "center" }}> <b>Yay! You have seen it all</b> </p>}
    >

      <div className="container my-3">
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <Articles
                desc={element.description}
                title={element.title}
                imageURL={element.urlToImage ? element.urlToImage : ImageNotFound}
                newsURL={element.url}
                sourceName={element.source.name}
              />
            </div>
          ))}
        </div>
      </div>
    </InfiniteScroll>
  )
}

export default News