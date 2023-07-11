import React from 'react'
import styles from '@/styles/HeroContact.module.css'
import Image from 'next/image'

const HeroContact = () => {
  return (
    <div className={styles.hero_container}>
      <div className='container'>
        <div className={styles.hero}>
          <div className={styles.text}>
            <h2>
            Temos a solução ideal para sua indústria!
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec arcu eleifend.</p>
            <button className='btn_after_white text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'>Ver más</button>
          </div>
          <div className={styles.hero_img}>
            <Image
              src={'/img/builder_contact.png'}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContact