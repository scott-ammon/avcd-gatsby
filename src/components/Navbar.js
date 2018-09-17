import React from 'react'
import Link from 'gatsby-link'
import styles from "../styles/navbar.module.css";

const Navbar = ({ siteTitle }) => (
  <div className={styles.header}>
    <h3>
      <Link to="/" className={styles.title}>AVCD</Link>
    </h3>
    <div className={styles.headerRight}>
      <Link to="/about" className={styles.navLink}>About</Link>
      <Link to="/projects" className={styles.navLink}>Projects</Link>
      <Link to="/testimonials" className={styles.navLink}>Testimonials</Link>
      <Link to="/contact" className={styles.navLink}>Contact</Link>
    </div>
  </div>
)

export default Navbar
