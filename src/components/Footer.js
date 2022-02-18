import React from 'react'
import Link from 'gatsby-link'
import styles from "../styles/footer.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <p className={styles.tagline}>A/V Concepts & Design | Where Elegance Embraces Technology</p>
    <div className={styles.footerFlex}>
      <div>
        <Link className={styles.footerLink} to="/">Home</Link>
        <Link className={styles.footerLink} to="/about">About</Link>
        <Link className={styles.footerLink} to="/projects">Projects</Link>
        <Link className={styles.footerLink} to="/contact">Contact</Link>
      </div>
      <div className={styles.contact}>
        <p className={styles.number}>Audio Video Concepts & Design</p>
        <p className={styles.number}>4701 SW Admiral Way #104</p>
        <p className={styles.number}>Seattle, WA  98116</p>
        <p className={styles.number}>Phone:	+1 (425) 881-5621</p>
      </div>
    </div>
    <p className = {styles.copyright}>&copy; 2022 SOA | Built with React</p>
  </div>
)

export default Footer
