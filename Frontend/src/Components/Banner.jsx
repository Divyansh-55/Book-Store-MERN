import React from 'react'
import image from "../assets/books.jpg"
export default function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container md:px-20 py-10 px-10 flex h-[100] flex-col-reverse md:flex-row">
        {/* Left part */}
        <div className="left md:flex-1 justify-between flex-col">
          
          <h1 className='font-bold text-4xl py-10 '>
            Hello, welcome here to learn something <span className='text-pink-500'>new everyday !!!</span>
          </h1>
          
          <p className="font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas animi ullam ipsum nulla, debitis doloribus qui ad temporibus quas officia illo sint velit beatae facilis suscipit. Repellat molestiae perspiciatis dignissimos!
          </p>
          
          {/* <input type="text" placeholder="Enter your Email to Login" className="input input-bordered input-info w-full max-w-xs" /> */}
          
        </div>
        {/* Right Part */}
        <div className="right md:flex-1">
          <img src={image} className='justify-self-center h-50 md:h-auto'></img>
        </div>
      </div>
    </>
  )
}
