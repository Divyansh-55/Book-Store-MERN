import React from 'react'

function Card({...data}) {
  // console.log(data);
  return (
    <>
    {/* Self devloped Card Component */}
    {/* <div>
    <h3 className='w-60 md:w-80 h-96 bg-slate-100	rounded-lg hover:h-100 cursor-pointer' >
                <img src={image} className='w-full h-48 rounded-lg border-solid ' />
                <div className=' ml-5 mr-24 mb-3 bg-red-400 text-center rounded-lg font-bold w-24 '>{data.category}</div>
                <div className='flex justify-between px-4'>
                <p className='text-lg font-bold'>{data.title}</p>
                  <p className='pr-3'>${data.price}</p>
                </div>
                <div className='flex flex-col md:flex-row  justify-between pl-4 pt-4 pr-4'>
                  <p className='w-1/2'>{data.description}</p>
                  <button className="btn btn-primary mt-3 w-1/4">Read</button>
                </div>

              </h3>
    </div> */}



<div className="card w-64 md:w-80 bg-base-100 shadow-xl align-center hover:shadow-2xl">
  <figure><img src={data.url} alt={data.title} /></figure>
  <div className="card-body">
    <h2 className="card-title ">
      {data.title}
      <div className="badge badge-secondary justify-self-end h-8">{data.category}</div>
    </h2>
    <p>{data.description}</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline hover:bg-red-400">$ {data.price}</div> 
      <div className="badge badge-outline hover:bg-red-400">{data.rating} ⭐</div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card
