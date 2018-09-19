import React from 'react'
import styles from '../styles/projectShow.module.css'
import img1 from '../img/happy-days/1.jpg'
import img2 from '../img/happy-days/2.jpg'
import img3 from '../img/happy-days/3.jpg'
import img4 from '../img/happy-days/4.jpg'
import img5 from '../img/happy-days/5.jpg'
import img6 from '../img/happy-days/6.jpg'
import img7 from '../img/happy-days/7.jpg'
import img8 from '../img/happy-days/8.jpg'
import img9 from '../img/happy-days/9.jpg'
import img10 from '../img/happy-days/10.jpg'
import img11 from '../img/happy-days/11.jpg'

const ProjectShow = () => (
  <div>
    <h1>Happy Days</h1>
    <p>
      Whole boat audio video entertainment system with integration to the AVCD-supplied lighting control system.
    </p>
    <p>
      "AV Concepts and Design is a top notch company. During the build of the 50 meter / 164 foot motor yacht 
      Happy Days at Delta Marine in the Pacific Northwest of the United States, I had the pleasure to work with 
      AVCD as the captain on the build. During the the construction, AVCD were on time, under budget, supplied 
      the latest in entertainment and lighting electronics, custom installed everything in a professional and 
      neat manner, provided us with thorough (and user friendly) documentation, and explained how everything 
      worked to not only me and the chief engineer, but the entire crew. 
      <br></br><br></br>
      After Happy Days was delivered, we traveled close to 25,000 miles in a single year and had zero problems 
      with AVCD's equipment.  Although we were problem free, an open line of communication and after sales 
      support were there had we needed it.
      <br></br><br></br>
      Once we arrived in Europe we asked AVCD install some of the latest equipment that had arrived on the market 
      since the initial installation. They came when they said they would, worked quickly and efficiently, 
      and performed another flawless installation. In addition, another plus was that the original installers were 
      the ones that arrived to do the work. They knew every inch of the boat already which was a big plus.
      <br></br><br></br>
      Everyone that has used the entertainment and lighting equipment on Happy Days has been super pleased. 
      I can recommend them 100 percent and wouldn't hesitate to use them again. AVCD has certainly made our 
      days on Happy Days, 'happier'."
      <br></br><br></br>
      Joe Jorlett<br></br>
      Captain<br></br>
      M/Y Happy Days<br></br>
    </p>
    <div className={styles.projectsGrid}>
      <div className={styles.imageCard}>
        <img src={img1}></img>
      </div>
      <div className={styles.imageCard}>
        <img src={img2}></img>
      </div>
      <div className={styles.imageCard}>
        <img src={img3}></img>
      </div>
      <div className={styles.imageCard}>
        <img src={img4}></img>
      </div>
      <div className={styles.imageCard}>
        <img src={img5}></img>
      </div>
      <div className={styles.imageCard}>
        <img src={img6}></img>
      </div>
      <div className={styles.imageCard}>
        <img src={img7}></img>
      </div>
    </div>
  </div>
)

export default ProjectShow
