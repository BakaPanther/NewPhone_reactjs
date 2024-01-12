import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function RatingStar(props) {
  const [rating, setRating] = useState(props.sosao);

  useEffect(() => {
    if (props.sosao < 1 || props.sosao > 5) {
      return;
    }
    setRating(props.sosao);
  }, [props.sosao]);

  return (
    <div className='rating-area'>
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          style={{ color: index < rating ? '#FFA500' : '#F5F5DC' }}  // Màu sắc của cả icon được thiết lập thành xanh
        />
      ))}
      <div className='rating-value'>{props.sosao}</div>
    </div>
  );
}
