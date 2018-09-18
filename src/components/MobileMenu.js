import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import Link from 'gatsby-link'
import styles from '../styles/mobileMenu.module.css'

class MobileMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  render () {
    const styles = {
      bmBurgerButton: {
        position: 'fixed',
        width: '35px',
        height: '25px',
        right: '18px',
        top: '18px'
      },
      bmBurgerBars: {
        background: '#373a47'
      },
      bmCrossButton: {
        height: '24px',
        width: '24px'
      },
      bmCross: {
        background: 'black'
      },
      bmMenu: {
        background: '#373a47',
        height: '100vh',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        backgroundImage: 'none'
      },
      bmMorphShape: {
        fill: '#373a47'
      },
      bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
      },
      bmItem: {
        display: 'block',
        textShadow: 'none',
        backgroundImage: 'none',
        color: 'white'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0)'
      },
      bmMenuWrap: {
        top: '0'
      }
    }

    return (
      <Menu isOpen={this.state.menuOpen} right styles={styles}>
        <Link className={styles.menuItem} to="/">Home</Link>
        <Link className={styles.menuItem} to="/about">About</Link>
        <Link className={styles.menuItem} to="/projects">Projects</Link>
        <Link className={styles.menuItem} to="/testimonials">Testimonials</Link>
        <Link className={styles.menuItem} to="/contact">Contact</Link>
      </Menu>
    );
  }
}

export default MobileMenu