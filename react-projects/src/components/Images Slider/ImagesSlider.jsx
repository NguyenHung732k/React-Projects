import React, { useState, useEffect } from 'react'
import './ImagesSlider.css'

const ImagesSlider = () => {

  const [images, setImages] = useState([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const getUrl = 'https://picsum.photos/v2/list'
  const limit = 10
  const page = 1



  const fetchImages = async () => {
    try {
      setLoading(true)

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
      const data = await response.json()

      if (data) {
        setImages(data)
        setLoading(false)
      }

    } catch (error) {
      setErrorMsg(error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchImages()
  }, [])

  if (loading) {
    return <div>Loading data ! Please wait</div>
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }



  return (
    <div className="slider-container">
      <div className="view-container">
        <button className='button-image-slider button-left'
          onClick={() => handlePrevious()}

        ></button>
        <div className="card-image-slider">
          {images && images.length ? images.map((imageItem, index) => (
            <img key={imageItem.id} alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
            : null
          }
        </div>

        <button className='button-image-slider button-right'
          onClick={() => handleNext()}
        ></button>
      </div>

      <div className="indicator">
        <span className="circle-indicators">
          {images && images.length
            ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
            : null}
        </span>
      </div>
    </div>
  )
}

export default ImagesSlider