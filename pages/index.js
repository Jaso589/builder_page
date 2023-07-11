import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const about_services = [
  {
    icon:'/svg/engranaje.svg',
    title:'Fabricación de Equipamentos',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec arcu eleifend, tempus diam quis, venenatis augue.'
  },
  {
    icon:'svg/foco.svg',
    title:'Electricidad e Instrumentación',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec arcu eleifend, tempus diam quis, venenatis augue.'
  },
  {
    icon:'svg/montaje.svg',
    title:'Montaje y Mantenimiento Industrial',
    description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec arcu eleifend, tempus diam quis, venenatis augue.'
  }
]

const projects_home = [
  {
    img:'/projects/project1.png',
    title:'Delta Ducon - Aleación de aluminio Liasa',
    description:'Obra: Montaje Electromecánico del Sistema de Eliminación de Polvo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec arcu eleifend, tempus diam qui, venenatis augue.'
  },
  {
    img:'/projects/project2.png',
    title:'Caramuru Alimentos y Cianport Logística',
    description:'Obra: Montaje y Reacondicionamiento en Transportadores y Cargadores de Barcos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec arcu eleifend, tempus diam qui.'
  },
]

export default function Home() {
  return (
    <Layout>
      <section className={styles.home_banner}>
        <div className={styles.banner}>
          <div className={styles.img_banner}>
              <Image
                src={'/img/home.jpg'}
                fill
              />
          </div>
            <div className={styles.slogan_banner}>
              <h1><span>grande o pequeño</span>: su proyecto ejecutado con <span>cuidado y seguridad</span></h1>
            </div>
        </div>
      </section>
      <section className={styles.home_about}>
        <div className='container'>
          <div className={styles.about_content}>
            <div className={styles.about_text}>
              <h2>Sobre nosotros</h2>
              <p>Átrio opera a nivel nacional, especializándose en:</p>
              <div className={styles.about_services}>
              <hr className='line_div md'/>
                {
                  about_services.map(({icon, title, description}) => (
                    <div className={styles.service} key={title}>
                      <div className={styles.icon}>
                        <Image
                        src={icon}
                        fill/>
                        
                      </div>
                      <div className={styles.service_text}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>  
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={styles.img_service}>
              <Image
                src={'/img/builder.png'}
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.home_project}>
          <div className={styles.project_content}>
            <h2>Proyectos</h2>
            <div className={styles.projects}>
              {
                projects_home.map(({img, title, description}) => (
                  <div className={styles.project} key={title}>
                    <div className={styles.img_project}>
                      <Image
                        src={img}
                        fill
                      />
                    </div>  
                    <div className={styles.text_data}>
                      <h3>{title}</h3>
                      <hr className='line_div '/>
                      <p>{description}</p>
                    </div>
                  </div>
                ))
              }
            </div>
            <button className='btn_after_white text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'>Ver más</button>
          </div>
      </section>
      <section className={styles.home_empresa}>
        <div className='container'>
          <div className={styles.empresa_content}>
            <div className={styles.empresa_text}>
              <h2>La Empresa</h2>
              <p>Átrio Montagens viene desarrollándose desde su formación, invirtiendo en tecnología y soluciones para atender las necesidades del mercado en expansión. Contamos con un equipo especializado en ofrecer soluciones en una amplia gama de segmentos.</p>
            </div>
            <div className={styles.empresa_img}>
              <Image
                src={'/img/foot_home.jpg'}
                fill
              />
            </div>
            <button className='btn_after_black text-black bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 mr-2 mb-2'>Ver más</button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
