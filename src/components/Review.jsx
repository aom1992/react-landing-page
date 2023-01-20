import React from 'react'
import imgEmily from '../assets/img/image-emily.jpg'
import imgThomas from '../assets/img/image-thomas.jpg'
import imgJinnie from '../assets/img/image-jennie.jpg'

const usersData = [
    {
        img: imgEmily,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur dolor error officia corporis velit quisquam assumenda commodi odit distinctio.',
        name: 'Emily R.',
        position: 'Marketing Directer'
    },
    {
      img: imgThomas,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur dolor error officia corporis velit quisquam assumenda commodi odit distinctio.',
        name: 'Thomas S.',
        position: 'Chief Operating Officer'
    },
    {
      img: imgJinnie,
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur dolor error officia corporis velit quisquam assumenda commodi odit distinctio.',
        name: 'Jinnie F.',
        position: 'Business Owner'
    }
]

function Review() {
  return (
    <div className='text-center py-[10rem] px-[5rem]'>
        <h3 className='uppercase text-3xl'>Client Testimonials</h3>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-[5rem]'>
            {usersData.map((data, key) => (
              <div key={data.name} className='py-[5rem]'>
                <img src={data.img} className="inline-block rounded-full" alt={data.name} />
                <p className='py-[5rem]'>{data.content}</p>
                <h4 className='font-bold'>{data.name}</h4>
                <p className='text-slate-400'>{data.position}</p>
              </div>
            ))}
        </div>
    </div>
  )
}

export default Review