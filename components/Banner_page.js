import Image from 'next/image'
import React from 'react'

const Banner_page = ({title_page, img}) => {
  return (
    <section className='home_banner'>
      <div className='banner'>
          <div className='img_banner'>
              <Image
                src={`${img}`}
                fill
              />
          </div>
      <div className='container'>
          <div>
          <div className='slogan_banner'>
              <h1>{title_page}</h1>
            </div>
          </div>
            
        </div>
      </div>
        
      </section>
  )
}

export default Banner_page