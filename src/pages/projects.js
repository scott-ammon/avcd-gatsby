import React from 'react'
import Link from 'gatsby-link'
import yacht from '../img/happy-days.jpg'
import styles from '../styles/projects.module.css'

const ProjectsPage = () => (
  <div className={styles.container}>
    <h1>Select Projects</h1>
    <p>
      Many of our projects cannot be shown, out of respect for our clients’ privacy. We welcome 
      you to contact us with specific inquiries about the wide range of yachts, private residences, 
      and other locations in which we have worked for over 20 years.
    </p>
    <div className={styles.projectsGrid}>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Adler</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Big Fish</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Cakewalk 62m</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Cakewalk 85m</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>Glendinning</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/happy-days' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Happy Days</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Illusion</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Kisses</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>LWR Testimony</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Miss Lisa</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Marama</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Meduse</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Mr. Terrible</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Phoenix</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Polar Bear</div>
        </Link>
      </div>
      <div className={styles.projectCard}>
        <img src={yacht}></img>
        <Link to='/' className={styles.overlay}>
          <div className={styles.projectName}>M/Y Slojo</div>
        </Link>
      </div>
    </div>
  </div>
)

export default ProjectsPage
