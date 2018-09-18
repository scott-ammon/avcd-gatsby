import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive';

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MobileMenu from '../components/MobileMenu'
// import './index.css'
import styles from '../styles/layout.module.css'

const Layout = ({ children, data }) => (

  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <MediaQuery query="(max-width: 550px)">
      <MobileMenu></MobileMenu>
    </MediaQuery>
    <Navbar siteTitle={data.site.siteMetadata.title} />
    <div className={styles.container}>
      {children()}
    </div>
    <Footer></Footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
