import React from 'react'
import Nav from './Nav'
import { FaLongArrowAltDown } from 'react-icons/fa'

function Header() {
  return (
    <div className='h-[40rem] bg-gradient-to-r from-sky-500 to-indigo-500 bg-header bg-cover bg-center border text-center'>
        <Nav/>
          <h1 className='text-7xl text-white uppercase'>We are creative</h1>
          <div className='flex justify-center mt-[50px]'>
            <FaLongArrowAltDown className='text-white text-8xl'/>
          </div>       
    </div>
  )
}

export default Header