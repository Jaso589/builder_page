import React from 'react'
import Styles from '@/styles/Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <div className='container'>
          <div className={Styles.footer_container}>
            <div className={Styles.footer_brand}>
              <div className={Styles.footer_logo}>
                <Image
                  src={'/logo.png'}
                  fill
                />
              </div>
              <div className={Styles.footer_socials}>
              <a href=''>
                <FontAwesomeIcon style={{height:'35px'}} icon={faFacebook}/>
              </a>
              <a href=''>
                <FontAwesomeIcon style={{height:'35px'}} icon={faYoutube}/>
              </a>
              <a href=''>
                <FontAwesomeIcon style={{height:'35px'}} icon={faLinkedin}/>
              </a>
            </div>
            </div>
            <div className={Styles.links_footer}>
              <div className={Styles.link_list}>
                <ul>
                  <li>Home</li>
                  <li>Empresa</li>
                  <li>Servicios</li>
                  <li>Clientes</li>
                  <li>Trabajemos</li>
                  <li>Contacto</li>
                </ul>
              </div>
            </div>
            <div className={Styles.links_footer}>
              <div className={Styles.link_list}>
                <ul>
                  <li>R. José Censoní, 350, Distrito Industrial Miguel Abdelnur. São Carlos - SP.</li>
                  <li>contato@atriomontagens.com.br</li>
                  <li>(16) 3368-6069</li>
                </ul>
                <ul>
                  <li>Comercial - Sr. Adevanil Borges
                  </li>
                  <li>borges@atriomontagens.com.br</li>
                  <li>(16) 99640-8009</li>
                </ul>
              </div>
            </div>
           
        </div>
        </div>
        <div className={Styles.copy_right}>
          <p><Link href={'https://www.creativevisual21.com/'}>Creative Visual</Link> © 2023 todos los derechos reservados </p>
        </div>
      </footer>
    </>
  )
}
