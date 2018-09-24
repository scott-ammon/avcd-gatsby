import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.css'
import logo from '../img/avcd-logo2.png'
import classNames from 'classnames'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav: styles.headerOne
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll = (e) => {
    if(window.pageYOffset > 0) {
      this.setState({
        nav: styles.headerTwo
      }) 
    } else if (window.pageYOffset === 0) {
      this.setState({
        nav: styles.headerOne
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className={classNames(this.state.nav, styles.nav)}>
        <Link to="/"><img className={styles.logo} src={logo}></img></Link> 
        <div className={styles.headerRight}>
          <Link to="/about" className={styles.navLink} activeClassName={styles.active}>ABOUT</Link>
          <Link to="/projects" className={styles.navLink} activeClassName={styles.active}>PROJECTS</Link>
          <Link to="/testimonials" className={styles.navLink} activeClassName={styles.active}>TESTIMONIALS</Link>
          <Link to="/contact" className={styles.navLink} activeClassName={styles.active}>CONTACT</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
