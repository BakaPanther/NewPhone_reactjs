import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function SingleSlider(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  //  console.log(props.data);
  //  console.log(props.data.data);
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {props.data && props.data.data && props.data.data.map((item, key) => (
          <Carousel.Item key={key}>
            <img
              src={`http://localhost:8000/${item.duong_dan}`}
              alt={`Slide ${key + 1}`}
            />
            <Carousel.Caption>
              <h3>{item.ten}</h3>
              <p>{item.mo_ta && item.mo_ta.length > 50 ? `${item.mo_ta.substring(0, 50)}...` : item.mo_ta}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  )
}
export default SingleSlider;