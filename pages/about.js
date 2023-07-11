import Banner_page from '@/components/Banner_page'
import Layout from '@/components/Layout'
import Image from 'next/image'
import styles from '@/styles/About.module.css'
import React from 'react'
import Aside_page from '@/components/Aside_page'

const about = () => {
  return (
    <Layout>
      <Banner_page
        img={'/img/builders.jpg'}
        title_page={'La empresa'}
      />
      <div className={styles.about_page}>
        <div className='container'>
          <div className={styles.about_content}>
            <div className={styles.text1}>
              <p>
              A Átrio Montagens vem se desenvolvendo desde a sua formação, investindo em tecnologia e soluções para atender as necessidades do mercado em expansão.
              Nossa missão, visão e valores estão alinhadas com a ética e reponsabilidade, prezando sempre a qualidade dos serviços oferecidos, buscamos ao máximo nos enquadrarmos nos princípios de inovação e eficácia, com a união de talentos, nos orgulhamos de ser uma empresa com o conhecimento do passado e a visão empreendedora do futuro.
              </p>
              <div className={styles.about_img1}>
                <Image
                src={'/img/about.jpg'}
                fill
                />
              </div>
            </div>
            <p>Com sede na cidade de São Carlos, no Interior de São Paulo. contamos com uma equipe especializada em oferecer soluções em uma ampla gama de segmentos.</p>
            <div className={styles.about_img2}>
              <Image
                src={'/img/about_2.jpg'}
                fill
              />
            </div>
            <div className={styles.text3}>
              <p>
              Nosso parque fabril conta com a área total de xxm². sendo composta por xxm² de área coberta dividido em dois galpões de 15x xx com pé direito de 9m. 
              </p>
              <p>
              Contamos com uma diversa gama de equipamentos e maquinário como: Plasma com mesa de 3x6m, Plasma manual, Cuilhotima de 3m, Dobbradeira de 3m, Calandras de l/4x2 e 3/4x2.
              </p>
              <p>
              Além de diversas máquinas de solda entre TIG, Mig e eletrodo e furadeiras. Também contamos com Jato de Cranalha numa area total de 10x10m & cabine de pintura de 10x25m.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Aside_page>
        <div className={styles.banner_foot}>
          <div className={styles.data_banner}>
              <div>
                <p>700 <span>m²</span></p>
                <span>Área total</span>
              </div>
              <div>
                <p>700 <span>m²</span></p>
                <span>Área total</span>
              </div>

              <div>
                <p>700 <span>m²</span></p>
                <span>Área total</span>
              </div>
              <div>
                <p>700 <span>m²</span></p>
                <span>Área total</span>
              </div>
          </div>
          <div className={styles.img_banner}>
            <Image
              src={'/img/builder_female.png'}
              fill
            />
          </div>
        </div>
      </Aside_page>
      
    </Layout>
  )
}

export default about