import React from 'react'
import Link from 'gatsby-link'
import yacht from '../img/happy-days.jpg'
import styles from '../styles/projects.module.css'

const ProjectsPage = () => (
  <div>
    <h1>Select Projects</h1>
    <p>
      Many of our projects cannot be shown, out of respect for our clients’ privacy. We welcome 
      you to contact us with specific inquiries about the wide range of yachts, private residences, 
      and other locations in which we have worked for over 20 years.
    </p>
    <div className={styles.projectsGrid}>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Adler</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Big Fish</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Adler</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Cakewalk 62m</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Cakewalk 85m</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>Glendinning</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Happy Days</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Illusion</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Kisses</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>LWR Testimony</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Miss Lisa</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Marama</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Meduse</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Mr. Terrible</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Phoenix</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Polar Bear</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
      <div className={styles.projectCard}>
        <span className={styles.projectName}>M/Y Slojo</span>
        <span className={styles.overlay}></span>
        <img src={yacht}></img>
      </div>
    </div>
  </div>
)

export default ProjectsPage
