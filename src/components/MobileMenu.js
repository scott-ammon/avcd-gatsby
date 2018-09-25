import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import Link from 'gatsby-link'

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
        background: 'black',
        height: '10%'
      },
      bmCrossButton: {
        height: '36px',
        width: '36px',
      },
      bmCross: {
        width: '4px',
        height: '20px',
        background: 'white'
      },
      bmMenu: {
        // background: '#373a47',
        height: '100vh',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em',
        backgroundImage: 'linear-gradient(-20deg,#003661,#004985)'
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
        textDecoration: 'none',
        fontFamily: 'Open Sans',
        paddingBottom: '1.5rem',
        fontSize: '1.5rem',
        textShadow: 'none',
        backgroundImage: 'none',
        color: 'white'
      },
      bmOverlay: {
        background: 'rgba(0, 0, 0, 0)'
      },
      bmMenuWrap: {
        top: '0',
        width: '75vw'
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