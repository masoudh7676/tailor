import React from 'react'

export default function Main() {
  return (
    <>
      <div className='img__container  position-relative text-white'>
        <img src="/images/h1_hero.jpg" className='img-fluid object-fit-cover' alt="" />
        <div className='img__text position-absolute'>
          <div className='img__main--text mt-5'>
            <h2 className='fw-bold'>
              Discover true
              <br />
              personalization.
            </h2>
            <p className='position-relative'>Made to Measure Dress Shirts</p>
          </div>
        </div>
      </div>
    </>
  )
}
