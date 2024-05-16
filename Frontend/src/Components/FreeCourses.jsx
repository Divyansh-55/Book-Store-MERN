import React, { useState } from 'react'
import Record from "../../public/data.json";
import Slider from "react-slick";

import Card from './Card';


function FreeCourses() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = Record.filter((obj) => obj.price === 0.00);
  console.log(data);

  return (
    <>
      <div className='max-w-screen-2xl container md:px-20 my-20 px-10 h-[100]'>
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeCourses;
