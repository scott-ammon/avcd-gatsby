import React from 'react'
import styles from '../styles/projects.module.css'
import bigfish from '../img/big-fish/1.jpg'
import cakewalk62 from '../img/cakewalk62/1.jpg'
import cakewalk85 from '../img/cakewalk85/1.jpg'
import misslisa from '../img/miss-lisa/1.jpg'
import glendinning from '../img/glendinning/1.jpg'
import happydays from '../img/happy-days.jpg'
import illusion from '../img/illusion/1.jpg'
import kisses from '../img/kisses/1.jpg'
import marama from '../img/marama/1.jpg'
import meduse from '../img/meduse/1.jpg'
import mrterrible from '../img/mr-terrible/1.jpg'
import phoenix from '../img/phoenix/1.jpg'
import polarbear from '../img/polar-bear/1.jpg'
import slojo from '../img/slojo/1.jpg'
import condo from '../img/condo.jpg'
import yacht from '../img/yacht-no-name.jpg'
import tv from '../img/tv.jpg'
import meaculpa2 from '../img/meaculpa2.jpg'
import rack1 from '../img/rack1.jpg'
import rack2 from '../img/rack2.jpg'
import rack3 from '../img/rack3.jpg'
import onika from '../img/onika.jpg'
import savannahTv from '../img/savannah-tv.jpg'
import videoWall from '../img/video-wall.jpg'
import videoWall2 from '../img/video-wall2.jpg'
import muchoMas from '../img/mucho-mas.jpg'
import muchoMasInterior from '../img/mucho-mas-interior.jpg'

const ProjectsPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Project Gallery</h1>
    <p>
      Many of our projects cannot be shown out of respect for our clients’ privacy. We welcome 
      you to contact us with specific inquiries about the wide range of yachts, private residences, 
      and other locations in which we have worked.
    </p>
    <div className={styles.projectsGrid}>
      <div className={styles.projectCard}>
        <img src={muchoMas}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={muchoMasInterior}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={videoWall}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={onika}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={condo}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={meaculpa2}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={rack1}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={bigfish}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={tv}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={happydays}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={savannahTv}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={cakewalk85}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={videoWall2}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={cakewalk62}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={glendinning}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={slojo}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={rack2}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={mrterrible}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={rack3}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={phoenix}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={polarbear}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={kisses}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={misslisa}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={marama}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={meduse}></img>
      </div>
      <div className={styles.projectCard}>
        <img src={illusion}></img>
      </div>
    </div>
  </div>
)

export default ProjectsPage
