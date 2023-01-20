import React from 'react'
import imgTransfrom from '../assets/img/desktop/image-transform.jpg'

function SectionOne() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
        <div className="left flex justify-center items-center p-[5rem]">
            <div>
                <h3 className='text-5xl'>Transform your brand</h3>
                <p className='text-gray-500 my-[2rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam culpa quae commodi. Officiis nihil vero non nemo eaque numquam facilis tempore dolor vel. Ducimus, fugit?</p>
                <a href="#" className='border-b-4 border-b-yellow-500'>Learn More</a>
            </div>
        </div>
        <div className="right">
            <img className='w-full' src={imgTransfrom} alt="transfrom your brand" />
        </div>
    </div>
  )
}

export default SectionOne