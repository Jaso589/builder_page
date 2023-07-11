import Banner_page from '@/components/Banner_page'
import Layout from '@/components/Layout'
import React from 'react'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'

const contact = () => {
  return (
    <Layout>
      <Banner_page
        img={'/img/builders.jpg'}
        title_page={'Contacto'}
      />
      <section className={styles.contact_container}>
        <div className='container'>
          
          <div className={styles.contact}>
            <form className={styles.form}>
            <h2>Hable con nosotros</h2>
            <p>¡Pon tu información de contacto a continuación!
              Nuestro equipo se pondrá en contacto contigo lo antes posible.</p>
              <label >
                <input type='text' name='name' placeholder='Nombre completo'/>
              </label>
              <label >
                <input type='text' name='name' placeholder='Nombre completo'/>
              </label>
              <label >
                <input type='text' name='name' placeholder='Nombre completo'/>
              </label>
              <label >
                <input type='text' name='name' placeholder='Nombre completo'/>
              </label>
              <label>
                <textarea placeholder='Comparte con nosotros sobre
                  tus experiencias profesionales'></textarea>
              </label>
              <label className={styles.btn_submit}>
                <button className='text-black bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2'>Enviar</button>
              </label>
            </form>
            <div className={styles.direccion}>
                <div className={styles.date}>
                  <div className={styles.icon}>
                    <Image src={'/svg/plus_icon.svg'} fill/>
                  </div>
                  <p>R. José Censoní, 350, Distrito Industrial Miguel Abdelnur. São Carlos - SP</p>
                </div>
                <div className={styles.date}>
                  <div className={styles.icon}>
                    <Image src={'/svg/plus_icon.svg'} fill/>
                  </div>
                  <p>Contato: (16) 3368-6069 E-mail: contato@atriomontagens.com.br</p>
                </div>
                <div className={styles.date}>
                  <div className={styles.icon}>
                    <Image src={'/svg/plus_icon.svg'} fill/>
                  </div>
                  <p>Contato Comercial - Srº Adevanil Borges E-mail: borges@atriomontagens.com.br Cel: (16) 99640 8009</p>
                </div>
                <div className={styles.map}>

                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default contact