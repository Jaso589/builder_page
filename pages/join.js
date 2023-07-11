import Banner_page from '@/components/Banner_page'
import Layout from '@/components/Layout'
import React from 'react'
import styles from '@/styles/Join.module.css'
import HeroContact from '@/components/HeroContact'

const join = () => {
  return (
    <Layout>
      <Banner_page
        img={'/img/builders.jpg'}
        title_page={'Trabaje con nostros'}
      />
      <section className={styles.join_container}>
        <div className='container'>
          <div className={styles.join}>
            <h2>Únete a nuestro equipo</h2>
            <p>Complete sus datos a continuación para ingresar a nuestro Banco de Talento</p>
            <form className={styles.form}>
              <label >
                <input type='text' name='name' placeholder='Nombre completo'/>
              </label>
              <label>
                <input type='text' name='date' placeholder='Fecha de nacimiento'/>
              </label>
              <label>
                <input type='text' name='city' placeholder='Ciudad'/>
              </label>
              <label>
                <input type='text' name='direction' placeholder='Dirección'/>
              </label>
              <label>
                <input type='text' name='phone' placeholder='Telefono'/>
              </label>
              <label>
                <input type='text' name='mail' placeholder='E-mail'/>
              </label>
              <label>
                <input type='text' name='state' placeholder='Estado'/>

              </label>
              <label>
                <input type='text' name='interesting' placeholder='Area de interés'/>
              </label>
              <label>
                <textarea placeholder='Comparte con nosotros sobre
                  tus experiencias profesionales'></textarea>
              </label>
              <label className={styles.btn_submit}>
                <button>Enviar CV</button>
                <button className='btn_after_black text-black bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2'>Enviar</button>
              </label>
              
            </form>
          </div>
        </div>
      </section>
      <HeroContact/>
    </Layout>
  )
}

export default join