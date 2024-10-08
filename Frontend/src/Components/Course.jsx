import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import Card from './Card';
let Record; 
import axios from "axios"
function Course() {
  const navigate = useNavigate();
  const [books,setbooks]=useState([]);

  useEffect(()=>{
    const getBook=async()=>{
      try {
        const res=await axios.get("http://localhost:8000/book/premium")
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
    const data = books.slice(0,15);
  return (
    <>
      <div className='max-w-screen-2xl container md:px-20 px-7 dark:bg-slate-800 '>
        <div className='flex flex-col justify-center text-center py-10 dark:text-white'>
          <h1 className='text-4xl font-semibold'> We're delighted to have you <span className='text-red-400'>Here! :) </span></h1>
          <p className='my-10 font-semibold' >Explore our diverse course section, where you'll find curated books for every subject and discipline. Whether you're studying science, humanities, or technology, we have the essential reading materials to support your academic journey. Dive into expertly selected titles tailored to your coursework needs.</p>
          <button className="btn btn-secondary w-20 self-center text-lg tracking-wide "
            onClick={() => navigate("/")}>Back</button>
        </div>

        <div>
          <h1 className='text-2xl font-semibold underline underline-offset-8 decoration-4 dark:text-white decoration-sky-500 tracking-wide py-10 '> Popular Books </h1>
          <div className="slider-container py-10">
            <Slider {...settings}>
              {data.map((course, index) => (
              <Card key={index} {...course} />
            ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default Course
