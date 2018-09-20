import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/projects.module.css'
import yacht from '../img/happy-days.jpg'
import adler from '../img/adler/1.jpg'
import bigfish from '../img/big-fish/1.jpg'
import cakewalk62 from '../img/cakewalk62/1.jpg'
import cakewalk85 from '../img/cakewalk85/1.jpg'
import misslisa from '../img/miss-lisa/1.jpg'
import glendinning from '../img/glendinning/1.jpg'
import happydays from '../img/happy-days/1.jpg'
import illusion from '../img/illusion/1.jpg'
import kisses from '../img/kisses/1.jpg'
import marama from '../img/marama/1.jpg'
import meduse from '../img/meduse/1.jpg'
import mrterrible from '../img/mr-terrible/1.jpg'
import phoenix from '../img/phoenix/1.jpg'
import polarbear from '../img/polar-bear/1.jpg'
import slojo from '../img/slojo/1.jpg'

const ProjectsPage = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Select Projects</h1>
    <p>
      Many of our projects cannot be shown, out of respect for our clients’ privacy. We welcome 
      you to contact us with specific inquiries about the wide range of yachts, private residences, 
      and other locations in which we have worked for over 20 years.
    </p>
    <div className={styles.projectsGrid}>
      <div className={styles.projectCard}>
        <img src={bigfish}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Big Fish</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={cakewalk62}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Cakewalk 62m</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={cakewalk85}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Cakewalk 85m</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={adler}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Adler</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={glendinning}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>Glendinning Residence</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={happydays}></img>
        <Link to='/happy-days' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Happy Days</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={illusion}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Illusion</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={kisses}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Kisses</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={misslisa}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Miss Lisa</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={marama}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Marama</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={meduse}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Meduse</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={mrterrible}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Mr. Terrible</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={phoenix}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Phoenix</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={polarbear}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Polar Bear</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={slojo}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Slojo</div>
        </Link>
      </div>
    </div>
  </div>
)

export default ProjectsPage
