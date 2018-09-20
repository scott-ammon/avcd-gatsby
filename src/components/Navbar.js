import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.css'
import logo from '../img/avcd-logo.png'

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      about: styles.navLink,
      projects: styles.navLink,
      testimonials: styles.navLink,
      contact: styles.navLink
    }
    this.selectMenu = this.selectMenu.bind(this)
  }

  selectMenu = e => {
    if(e.target.name == 'home') {
      for(let link in this.state) {
        this.setState({
          [link]: styles.navLink
        })
      }
    } else {
      for (let link in this.state) {
        if(link == e.target.name) {
          this.setState({
            [link]: [styles.navLink, styles.active].join(' ')
          })
        } else {
          this.setState({
            [link]: styles.navLink
          })
        }
      }
    }
  }

  render() {
    return (
      <div className={styles.header}>
        <h3>
          <Link name="home" onClick={this.selectMenu} to="/" className={styles.title}><img className={styles.logo} src={logo}></img></Link>
        </h3>
        <div className={styles.headerRight}>
          <Link name="about" onClick={this.selectMenu} to="/about" className={this.state.about}>About</Link>
          <Link name="projects" to="/projects" onClick={this.selectMenu} className={this.state.projects}>Projects</Link>
          <Link name="testimonials" to="/testimonials" onClick={this.selectMenu} className={this.state.testimonials}>Testimonials</Link>
          <Link name="contact" to="/contact" onClick={this.selectMenu} className={this.state.contact}>Contact</Link>
        </div>
      </div>
      )
  }
}

export default Navbar
