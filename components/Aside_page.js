import React from 'react'
import styles from '@/styles/Aside_page.module.css'
const Aside_page = ({children}) => {
  return (
    <div className={styles.banner}>
      <div className='container'>
        {children}
      </div>
    </div>
  )
}

export default Aside_page