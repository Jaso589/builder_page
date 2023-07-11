import Banner_page from '@/components/Banner_page'
import Layout from '@/components/Layout'
import React from 'react'
import styles from '@/styles/Customers.module.css'
import Image from 'next/image'
import HeroContact from '@/components/HeroContact'

const clientes = [
  {
    img:'https://source.unsplash.com/random/400x400?product1'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  },
  {
    img:'https://source.unsplash.com/random/400x400?product2'
  }
]

const customers = () => {
  return (
    <Layout>
        <Banner_page img={'/img/builders.jpg'} title_page={'Clientes'}/>
        <section className={styles.customers_container}>
          <div className='container'>
            <div className={styles.customers}>
              {
                clientes.map(({img})=>(
                  <div className={styles.customer_card} key={`${img} + image`}>
                    <div className={styles.card_img}>
                      <Image
                        src={img}
                        fill
                      />
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
        <HeroContact/>
    </Layout>
  )
}

export default customers