import React from 'react'
import image from "../assets/books.jpg"
export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 py-10 px-10 flex h-[100] flex-col-reverse md:flex-row dark:bg-slate-800 dark:text-white">
        {/* Left part */}
        <div className="left md:flex-1 justify-between flex-col">
          
          <h1 className='font-bold text-4xl py-10 '>
            Hello, welcome here to learn something <span className='text-pink-500'>new everyday !!!</span>
          </h1>
          
          <p className="font-semibold">
          Book Haven is your ultimate online destination for book lovers. Explore a vast collection of titles across genres, from bestsellers to rare finds, all at unbeatable prices. Enjoy a seamless shopping experience with fast delivery, secure payments, and personalized recommendations tailored just for you.          </p>
                    
        </div>
        {/* Right Part */}
        <div className="right md:flex-1">
          <img src={image} className='justify-self-center h-50 md:h-auto'></img>
        </div>
      </div>
    </>
  )
}
