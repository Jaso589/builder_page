import React, { useState } from 'react'
import { ActiveLink } from './ActiveLink'
import Styles from '@/styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const navLinks = [
    {
        page:'Inicio',
        href:'/'
    },
    {
        page:'Nosotros',
        href:'/about'
    },
    {
        page:'Servicios',
        href:['Fabricación de Equipamentos', 'Electricidad e Instrumentación', 'Montaje y Mantenimiento Industrial']
    },
    {
      page:'Clientes',
      href:'/customers'
    },
    {
      page:'Trabajemos',
      href:'/join'
    },
    {
        page:'Contacto',
        href:'/contact'
    }
]

export const Navbar = () => {
  const [btnMenu, setbtnMenu] = useState(false)

  const handleMenu = () =>{
    setbtnMenu(() => !btnMenu)
  }
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.container}>
          <div className={Styles.brand}>
            <Image
              src={'/logo.png'}
              fill
            />
          </div>
          <nav className={btnMenu ? Styles.navbar_active : Styles.navbar_hide}>
            <div className={Styles.nav}>
              {
                navLinks.map(({href, page})=>(
                  typeof href !== typeof []
                  ? <ActiveLink href={href} text={page} key={page}/>
                  :<li class="dropdown" key={page}>
                      <a href="#">
                        {page}
                        <svg class="icon" width="14" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"/></svg>
                      </a>
                      <ul class="dropdown-nav">
                        <li>{href[0]}</li>
                        <li>{href[1]}</li>
                        <li>{href[2]}</li>
                      </ul>
                    </li>
                ))
              }
            </div>
            <div className={Styles.socials_header}>
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
          </nav>
          
          <button className={Styles.btn_menu} onClick={handleMenu}><FontAwesomeIcon icon={faBars}/></button>
        </div>
        
        
      </header>
    </>
  )
}
