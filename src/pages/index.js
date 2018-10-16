import React, { Component } from 'react'
import styles from '../styles/index.module.css'
import classNames from 'classnames'
import logo from '../img/avcdWhiteSmall.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import mediaRack from '../img/media-rack.jpg'
import meaculpa from '../img/meaculpa.jpg'
import savannah from '../img/savannah.jpg'
import tv from '../img/tv.jpg'
import yacht2 from '../img/yacht2.jpeg'
import muchoMasSalon from '../img/mucho-mas-salon.jpg'
import cabin from '../img/cabin.jpg'
import maramarack from '../img/maramarack2.jpg'

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
          <Element name="scrollHere"></Element>
            <div className={styles.containerContent}>
              <div className={styles.flexCapability}>
                <div className={styles.boxSystems}>
                  <h2>Systems We Design & Build</h2>
                  <ul>
                    <li>Custom Audio/Video Entertainment Systems</li>
                    <li>Dedicated Digital Surround Sound Theater</li>
                    <li>Video Walls</li>
                    <li>Satellite (domestic and foreign)</li>
                    <li>Media Storage Systems/On-Demand Audio/Video</li>
                    <li>Lighting Design and Control Systems</li>
                    <li>Data/Networking</li>
                    <li>Phone Systems</li>
                    <li>Security Systems</li>
                  </ul>
                </div>
                <img src={savannah} className={styles.imageOne}></img>
              </div>
              <div className={styles.testimonial}>
                <p>
                “AVCD designed, installed and have been responsible for the maintenance of the AV and IT 
                infrastructure on board M/Y MUCHOS MAS. There work has always been of the highest caliber 
                and continue to support the vessel at all times to troubleshoot any issues that arise on 
                board and have been a pleasure to work with both during the yacht build, and supporting the 
                yacht’s day-to-day operations. I would recommend AVCD to any yacht Captain or management 
                company looking to update, refit, or new build design and install. <br></br>- Captain Troy Dougherty, M/Y Muchos Mas.
                </p>
              </div>
              <div className={styles.flexCapabilityTwo}>
                <img src={muchoMasSalon} className={styles.imageTwo}></img>
                <div className={styles.boxSupport}>
                  <h2>Who We Support</h2>
                  <h4>Marine</h4>
                  <ul>
                    <li>Yachts</li>
                    <li>Fishing Vessels</li>
                    <li>Expedition Vessels</li>
                  </ul>
                  <h4>Residential</h4>
                  <ul>
                    <li>Single Dwellings</li>
                    <li>Estates</li>
                    <li>Vacation Homes</li>
                    <li>Lodges</li>
                  </ul>
                </div>
              </div>
              <div className={styles.testimonial}>
                <p>
                  "Audio Visual Concepts & Design came onboard to improve the archaic control system of CV-9’s 
                  entertainment system that included Kaleidescape Movie & Music server, TVRO antenna & service, 
                  local disc players, and a large array amplifiers and speakers throughout the yacht. That was 
                  the first time for me where a AV technician could actually describe to me how the system was 
                  going to operate. In short order we had iPad controls, improved speaker systems and also detailed 
                  drawings of the entire system where the crew could easily be supported at a later time. For the next 
                  five years of heavy use we rarely had any issues to utilize that aspect." <br></br>– Captain Ethan Lee, M/Y CV-9  
                </p>
              </div>
              <div className={styles.flexCapability}>
                <div className={styles.boxServices}>
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
                <img src={cabin} className={styles.imageThree}></img>
              </div>
              <div className={classNames(styles.testimonial, styles.finalTestimonial)}>
                <p>
                  “I am the Captain of a 138ft M/Y that had the pleasure of working with AVDC during a complete refit of 
                  our yacht.  Throughout the process ACDV remained easily contactable, informative and flexible due to constant 
                  changes being made to the project and the scale of work dramatically increasing.  The professionalism did not 
                  end once installation had taken place and they have been onboard for any warranty issues as well as changes 
                  at the owners request.  I would highly recommend them for any up and coming projects that need to be carried 
                  out to a ‘super yacht’ standard and with professionalism that surpasses all other companies in the yacht business.” <br></br>- Captain Christopher Grant, M/Y Mea Culpa
                </p>
              </div>
            </div>
          <div className={styles.container}>
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
            <div className={styles.flexSupport}>
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
                  "Entertainment systems are so advanced you absolutely need the most knowledgeable system designer and support available.  
                  AV Concepts has proven time and time again the ability to bring together a world of entertainment that caters to the customer’s needs.  
                  Knowledge and support have been key factors to keeping things up to date and performing with outstanding results. After working 
                  with Steve & Cindy on both new & refit projects for many years it has been a pleasure to have their support.” - Captain John Doty, M/Y Onika
                </p>
              </div>
              <img src={maramarack}></img>
            </div>
          </div>
      </div>
    )
  }
}
export default IndexPage
