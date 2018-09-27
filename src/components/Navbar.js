import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.css'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'

var newWindow = null;

class Navbar extends Component {
  constructor(props) {
    super(props)
    let pageName = this.props.history.location.pathname
    let linkStyle;
    let navStyle;
 
    if(pageName === '/') {
      navStyle = styles.headerOne;
      linkStyle = styles.navWhite;
    } else {
      navStyle = styles.headerTwo;
      linkStyle = styles.navBlack; 
    }
    this.state = {
      nav: navStyle,
      link: linkStyle
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll = (e) => {

    let pageName = this.props.history.location.pathname

    if(pageName === '/') {
      if(newWindow.pageYOffset > 0) {
        this.setState({
          nav: styles.headerTwo,
          link: styles.navBlack
        }) 
      } else if (newWindow.pageYOffset === 0) {
        this.setState({
          nav: styles.headerOne,
          link: styles.navWhite
        })
      }
    }
  }

  handleClick = (e) => {
    this.setState({
      nav: styles.headerTwo,
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
        <Link exact to="/" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>Home</Link>
        <Link to="/about" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>About</Link>
        <Link to="/projects" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>Projects</Link>
        <Link to="/contact" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.active}>Contact</Link>
      </div>
    )
  }
}

export default withRouter(Navbar)
