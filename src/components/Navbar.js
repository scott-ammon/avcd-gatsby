import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from '../styles/navbar.module.css'
import classNames from 'classnames'
import { withRouter } from 'react-router-dom'
import MediaQuery from 'react-responsive';
import MobileMenu from '../components/MobileMenu'

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
      link: linkStyle,
      burgerColor: 'white'
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleScroll = this.handleScroll.bind(this)
    this.handleHomeClick = this.handleHomeClick.bind(this)
  }

  handleScroll = (e) => {

    let pageName = this.props.history.location.pathname

    if(pageName === '/') {
      if(newWindow.pageYOffset > 0) {
        this.setState({
          nav: styles.headerTwo,
          link: styles.navBlack,
          burgerColor: 'white'
        }) 
      } else if (newWindow.pageYOffset === 0) {
        this.setState({
          nav: styles.headerOne,
          link: styles.navWhite,
          burgerColor: 'white'
        })
      }
    }
  }

  handleClick = (e) => {
    this.setState({
      nav: styles.headerTwo,
      link: styles.navBlack,
      burgerColor: 'white'
    }) 
  }

  handleHomeClick = e => {
    this.setState({
      nav: styles.headerOne,
      link: styles.navWhite,
    }) 
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    newWindow = window;
  }

  render() {
    let activeStyle = this.state.nav === styles.headerOne ? styles.activeWhite : styles.activeBlack
   
    return (
      <div>
        <MediaQuery query="(max-width: 550px)">
          <MobileMenu homeClick={this.handleHomeClick} burgerClick={this.handleClick} burgerColor={this.state.burgerColor}></MobileMenu>
        </MediaQuery>
        <div className={classNames(this.state.nav, styles.nav)}>
          <Link exact to="/" onClick={this.handleHomeClick} className={classNames(this.state.link, styles.navLink)} activeClassName={activeStyle}>Home</Link>
          <Link to="/about" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.activeBlack}>About</Link>
          <Link to="/projects" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.activeBlack}>Projects</Link>
          <Link to="/contact" onClick={this.handleClick} className={classNames(this.state.link, styles.navLink)} activeClassName={styles.activeBlack}>Contact</Link>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar)
