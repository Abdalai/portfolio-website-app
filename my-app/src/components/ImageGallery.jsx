"use client"

import { useState, useCallback } from "react"
import "./ImageGallery.css"

const ImageGallery = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const goToImage = useCallback((index) => {
    setCurrentIndex(index)
  }, [])

  if (!images || images.length === 0) {
    return (
      <div className="image-gallery">
        <div className="gallery-error">
          <p>No images available</p>
        </div>
      </div>
    )
  }

  return (
    <div className="image-gallery">
      <div className="gallery-header">
        <h3>{title}</h3>
        <div className="gallery-controls">
          <button onClick={goToPrevious} className="gallery-btn" disabled={images.length <= 1}>
            ← Previous
          </button>

          <div className="image-counter">
            <span>{currentIndex + 1} of {images.length}</span>
          </div>

          <button onClick={goToNext} className="gallery-btn" disabled={images.length <= 1}>
            Next →
          </button>
        </div>
      </div>

      <div className="gallery-main">
        <div className="main-image-container">
          <img
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`${title} - Image ${currentIndex + 1}`}
            className="main-image"
          />

          {images.length > 1 && (
            <>
              <button className="nav-arrow nav-arrow-left" onClick={goToPrevious} aria-label="Previous image">
                ←
              </button>
              <button className="nav-arrow nav-arrow-right" onClick={goToNext} aria-label="Next image">
                →
              </button>
            </>
          )}
        </div>
      </div>

      {images.length > 1 && (
        <div className="gallery-thumbnails">
          <div className="thumbnails-container">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`thumbnail ${index === currentIndex ? "thumbnail-active" : ""}`}
              >
                <img src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} />
                <div className="thumbnail-overlay">
                  <span>{index + 1}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default ImageGallery
