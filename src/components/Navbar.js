import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.css'
import logo from '../img/avcd-logo2.png'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: true
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll = (e) => {
    if(window.pageYOffset > 0) {
      this.setState({
        nav: false
      }) 
    } else if (window.pageYOffset === 0) {
      this.setState({
        nav: true
      })
    }
  }

  componentDidMount() {
    // window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    if(this.state.nav) {
      return (
        <div className={styles.header}>
          <Link to="/"><img className={styles.logo} src={logo}></img></Link> 
          <div className={styles.headerRight}>
            <Link to="/about" className={styles.navLink} activeClassName={styles.active}>ABOUT</Link>
            <Link to="/projects" className={styles.navLink} activeClassName={styles.active}>PROJECTS</Link>
            <Link to="/testimonials" className={styles.navLink} activeClassName={styles.active}>TESTIMONIALS</Link>
            <Link to="/contact" className={styles.navLink} activeClassName={styles.active}>CONTACT</Link>
          </div>
        </div>
      )
    } else {
      return null
    }
  }
}

export default Navbar
