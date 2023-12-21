import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating';

export default function RatingStar() {
  const [rating, setRating] = useState(0) // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate)
    // Some logic
  }

  return (
    <div className='rating-area'>
      <Rating 
        onClick={handleRating}
        ratingValue={rating}
        size={20}
        label
        transition
        fillColor='orange'
        emptyColor='gray'
        className='comment-rating' // Will remove the inline style if applied
      />
      {/* Use rating value */}
      <div className='rating-value'>{rating}</div>
      
    </div>
  )
}