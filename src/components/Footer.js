import React from 'react'
import Link from 'gatsby-link'
import styles from "../styles/footer.module.css";

const Footer = () => (
  <div className={styles.footer}>
    <p className={styles.tagline}>A/V Concepts & Design | Where Elegance Embraces Technology</p>
    <div className={styles.footerFlex}>
      <div>
        <Link className={styles.footerLink} to="/about">About</Link>
        <Link className={styles.footerLink} to="/projects">Projects</Link>
        <Link className={styles.footerLink} to="/testimonials">Testimonials</Link>
        <Link className={styles.footerLink} to="/contact">Contact</Link>
      </div>
      <div className={styles.contact}>
        <p className={styles.number}>AV Concepts & Design</p>
        <p className={styles.number}>15336 NE 96th Place, #C-3</p>
        <p className={styles.number}>Redmond, WA 98052 USA</p>
        <p className={styles.number}>Phone:	+1 (425) 881-5621</p>
        <p className={styles.number}>Fax:	+1 (425) 883-3952</p>
      </div>
    </div>
    <p className = {styles.copyright}>&copy; 2018 SOA | <Link className={styles.privacy} to="/privacy">Privacy</Link></p> 
  </div>
)

export default Footer
