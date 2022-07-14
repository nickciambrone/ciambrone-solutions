import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'/images'+images[0]}
          alt="First slide"
        />
    
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'/images'+images[1]}
          alt="Second slide"
        />

 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={'/images'+images[2]}
          alt="Third slide"
        />


      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel