import React, { Component } from 'react'
import styles from '../styles/index.module.css'
import logo from '../img/avcdWhiteSmall.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

import * as Scroll from 'react-scroll'
const Element = Scroll.Element;
const ScrollLink = Scroll.Link;

class IndexPage extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className={styles.background}>
          <div className={styles.container}>
            <div className={styles.headerFlex}>
              <img className={styles.logo} src={logo}></img>
              <h2 className={styles.description}>
                We are a team of professional 
                audio/video engineers and systems integrators offering 
                customized technology solutions for the discerning client.
                <br></br>
                <br></br>
                <span className={styles.tagline}>"Where Elegance Embraces Technology"</span>
              </h2>
            </div>
          </div>
        </div>
        <div className={styles.clickMe}><ScrollLink to='scrollHere' smooth={true} offset={-50}><FontAwesomeIcon className={styles.downArrow} icon={faArrowDown} size='2x'/></ScrollLink></div>
          <div id="container" className={styles.container}>
          <Element name="scrollHere"></Element>
            <div className={styles.flexContainer}>
              <div>
                <h2>Systems We Design & Build</h2>
                <ul>
                  <li>Custom Audio/Video Entertainment Systems</li>
                  <li>Dedicated Digital Surround Sound Theater</li>
                  <li>Satellite (domestic and foreign)</li>
                  <li>Media Storage Systems/On-Demand Audio/Video</li>
                  <li>Lighting Design and Control Systems</li>
                  <li>Data/Networking</li>
                  <li>Phone Systems</li>
                  <li>Security Systems</li>
                </ul>
              </div>
              <div>
                <h2>Who We Support</h2>
                <h4>Marine</h4>
                <ul>
                  <li>Yachts</li>
                  <li>Fishing Vessels</li>
                  <li>Expedition Vessels</li>
                </ul>
                <h4>Residential</h4>
                <ul>
                  <li>Single Dwelling</li>
                  <li>Estates</li>
                  <li>Ranches / Lodges</li>
                </ul>
              </div>
              <div>
                <h2>Services We Offer</h2>
                <ul>
                  <li>Site Surveys</li>
                  <li>Written Specifications</li>
                  <li>Project Management</li>
                  <li>AutoCAD Engineering</li>
                  <li>Procurement</li>
                  <li>Installation</li>
                  <li>Programming & Commissioning</li>
                  <li>Ongoing Support 24/7</li>
                </ul>
              </div>
            </div>
            <hr></hr>
            <div className={styles.management}>
              <h2>Management Approach</h2>
              <div className={styles.mgmtFlex}>
                <div className={styles.mgmt}>
                  <FontAwesomeIcon icon={faHandshake} size='4x'/>
                  <h4>Communication</h4>
                  <p>
                    We understand the importance of timely, thorough, and well-documented communications 
                    for the client, the interior design team, and particularly the shipyard. Throughout every 
                    step of the project, we provide thorough and timely documentation including AutoCAD drawings and meeting notes.
                  </p>
                </div>
                <div className={styles.mgmt}>
                  <FontAwesomeIcon icon={faFile} size='4x'/>
                  <h4>Documentation</h4>
                  <p>
                    We pride ourselves on providing outstanding technical documentation, including proactive details such as 
                    color-coding to ensure comprehension across language barriers.
                  </p>
                </div>
              </div>
              <div className={styles.mgmtFlex}>
                <div className={styles.mgmt}>
                  <FontAwesomeIcon icon={faUsers} size='4x'/>
                  <h4>Attention</h4>
                  <p>
                    Our availability and flexibility are critical when working on projects of this caliber. We have first-hand 
                    experience in the idiosyncrasies of building a boat, and a proven track record in providing ongoing support.
                  </p>
                </div>
                <div className={styles.mgmt}>
                  <FontAwesomeIcon icon={faLock} size='4x'/>
                  <h4>Privacy</h4>
                  <p>
                    From the beginning of a project, we respect the need for absolute privacy.
                  </p>
                </div>
              </div>
            </div>
            <hr></hr>
            <div className={styles.support}>
              <h2>Trusted Support</h2>
              <p>Customer Service is what makes A/V Concepts and Design stand out from our competitors.</p>
              <p> 
                Neither the size nor the scope of a project is our concern, rather it is our professional manner, 
                and our proven ability to work with the project team to get the job done on time, and as expected. 
                We offer 24 hour, year-round service and support.
              </p>
              <p>Worldwide Support. Representation in Washington & Florida.</p>
              <p className={styles.quote}>
                “We believe Audio Video Concepts and Design to be one of the top firms in the world. Their attention 
                to detail, high quality design, excellent communications and exceptional customer service help us to 
                simplify the construction and outfitting process…” – Mark Masciarotte, Owner’s Representative
              </p>
            </div>
          </div>
      </div>
    )
  }
}
export default IndexPage
