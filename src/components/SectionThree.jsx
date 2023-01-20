import React from 'react'
import imgGraphicDesign from '../assets/img/desktop/image-graphic-design.jpg'
import imgPhotography from '../assets/img/desktop/image-photography.jpg'


function SectionThree() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 h-[700px]'>
        <div className="left flex justify-center items-end p-[2rem] lg:px-[14rem] lg:pb-[5rem] text-center bg-sec-three-left bg-cover">
            <div>
                <h3 className='text-3xl mb-4'>Graphic Desing</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis odit sequi deleniti quasi repellendus optio a harum corrupti architecto accusamus.
                </p>
            </div>
        </div>
        <div className="right flex justify-center items-end p-[2rem] lg:px-[14rem] lg:pb-[5rem] text-center bg-sec-three-right bg-cover">
            <div>
                <h3 className='text-3xl mb-4'>Photography</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dolores omnis accusantium pariatur itaque molestias incidunt, id alias sed vitae?
                </p>
            </div>
        </div>
    </div>
  )
}

export default SectionThree