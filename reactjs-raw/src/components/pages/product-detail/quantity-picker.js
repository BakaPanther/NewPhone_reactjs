import React, { useState } from 'react';

function QuantityPicker() {
  const [quantity, setQuantity] = useState(0);

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    // Thêm điều kiện số lượng
    setQuantity(quantity + 1);
  };

  return (
    <div className='input-quantity col-2'>
      <button onClick={decreaseQuantity}>-</button>
      <span >{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
}

export default QuantityPicker;