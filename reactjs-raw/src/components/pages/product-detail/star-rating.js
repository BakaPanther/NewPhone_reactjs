import React from 'react';

const StarRating = ({ rating }) => {
  const renderStars = () => {
    const stars = [];
    // const roundedRating = Math.round(rating); // Làm tròn giá trị rating

    for (let i = 1; i <= 5; i++) {
      // Mỗi ngôi sao sẽ có màu vàng nếu i <= rating
      const starColor = i <= rating ? 'gold' : 'black';

      stars.push(
        <span
          key={i}
          style={{ color: starColor, fontSize: '28px', marginRight: '5px' }}
        >
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div>
      <h3>Đánh giá</h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>{renderStars()} {rating}</div>
    </div>
  );
};

export default StarRating;
