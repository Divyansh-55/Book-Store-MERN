import React, { useState,useEffect } from 'react'
import Slider from "react-slick";

import Card from './Card';
let Record; 
import axios from "axios"

function FreeCourses() {
  const [books,setbooks]=useState([]);

  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:8000/book/")
        Record=res.data;
        setbooks(Record);
        
        } catch (error) {
          console.log("Error",error);
        }
    };
    getBook();
  },[])
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

  // const data = books.filter((obj) => obj.price === 0.00);

  return (
    <>
      <div className='max-w-screen-2xl container md:px-20 py-20 px-10 h-[100] dark:bg-slate-700 '>
      <h1 className='text-2xl font-semibold underline underline-offset-8 decoration-4 decoration-sky-500 tracking-wide  my-10 dark:text-white'> Free Books </h1>
        <div className="slider-container">
          <Slider {...settings}>
            {books.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeCourses;