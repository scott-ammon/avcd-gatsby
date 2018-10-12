import React from 'react'
import styles from '../styles/about.module.css'

const AboutPage = (props) => (
  <div className={styles.container}>
    <h1 className={styles.title}>About AVCD</h1>
    <h5 className={styles.description}>
      AV Concepts and Design, Inc. is a team of professional audio/video engineers and systems 
      integrators offering customized technology solutions for the discriminating client.
    </h5>
    <p>
      AV Concepts and Design, Inc. has been successfully placing state of the art entertainment 
      systems in yacht projects since 1992, while building outstanding and ongoing relationships 
      with national and international shipbuilders on both new builds and refits. We are equally 
      experienced placing audio/video, data/networking, lighting, and security systems into private 
      residences, be it new construction or remodels.
      <br></br>
      <br></br>
      With nearly 30 years of experience in the industry, owner and founder Steven Segall has assembled 
      a team of highly skilled professionals including engineers, AutoCAD professionals, lighting designers, 
      programmers, and technical installers, all dedicated to customer service and pride in craftsmanship. 
      Our team is continually testing and researching applications to bring our clients the latest and most 
      sophisticated technologies, backed by open communication, and readily accessible world-wide support 365 days/year. 
      We are confident that our experience and customer service will always set us apart from our competitors.
    </p>
  </div>
)

export default AboutPage
