import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.css'
import logoWhite from '../img/avcd-logo1.png'
import logoBlack from '../img/avcd-logo2.png'
import classNames from 'classnames'
var newWindow = null;

class Navbar extends Component {
  constructor(props) {
    super(props)
    var newWindow = null;
    let pageName = ''; //newWindow.location.href.split('/');
    let linkStyle;
    let iconStyle;
    let navStyle;

    if(pageName === '') {
      navStyle = styles.headerOne;
      iconStyle = logoWhite;
      linkStyle = styles.navWhite;
    } else {
      navStyle = styles.headerTwo;
      iconStyle = logoBlack;
      linkStyle = styles.navBlack; 
    }
    this.state = {
      nav: navStyle,
      icon: iconStyle,
      link: linkStyle
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll = (e) => {

    let pageName = newWindow.location.href.split('/');

    if(pageName[pageName.length - 1] === '') {
      if(newWindow.pageYOffset > 0) {
        this.setState({
          nav: styles.headerTwo,
          icon: logoBlack,
          link: styles.navBlack
        }) 
      } else if (newWindow.pageYOffset === 0) {
        this.setState({
          nav: styles.headerOne,
          icon: logoWhite,
          link: styles.navWhite
        })
      }
    }
  }

  handleClick = (e) => {
    this.setState({
      nav: styles.headerTwo,
      icon: logoBlack,
      link: styles.navBlack
    }) 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    newWindow = window;
  }

  render() {
    return (
      <div className={classNames(this.state.nav, styles.nav)}>
        <Link to="/"><img className={styles.logo} src={this.state.icon}></img></Link> 
        <div className={styles.headerRight}>
          <Link to="/about" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>About</Link>
          <Link to="/projects" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>Projects</Link>
          <Link to="/testimonials" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>Testimonials</Link>
          <Link to="/contact" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>Contact</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
