import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styles from '../styles/layout.module.css'
import favicon from '../img/favicon.png'

const Layout = ({ children, data }) => (

  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Audio Video Concepts & Design, custom AV systems for yachts and residential spaces.' },
        { name: 'keywords', content: 'AVCD, audio video systems, yacht audio, marine audio, boat audio, seattle av systems' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    
    <Navbar />
    <div className={styles.container}>
      {children()}
    </div>
    <Footer />
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
