import React from 'react'
import MainService from '../sections/MainService.jsx'
import "./Service.css"
const Service = () => {
  return (
    <section className='service bg-neutral-100 md:align w-full flex items-center justify-center flex-col gap-4'>
      <MainService />
    </section>
  )
}

export default Service