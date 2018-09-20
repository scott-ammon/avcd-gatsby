import React from 'react'
import styles from '../styles/index.module.css'

const IndexPage = () => (
  <div>
    <div className={styles.background}>
      <div className={styles.container}>
        <div className={styles.headerFlex}>
          <h1>AV Concepts & Design</h1>
          <h2 className={styles.description}>
            We are a team of professional 
            audio/video engineers and systems integrators offering 
            customized technology solutions for the discriminating client.
          </h2>
        </div>
      </div>
    </div>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div>
            <h2>Scope</h2>
            <ul>
              <li>Custom Audio/Video Entertainment Systems <br></br>in the Marine and Residential Environments</li>
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
            <h2>Services</h2>
            <ul>
              <li>Specifications & Proposals</li>
              <li>Project Management</li>
              <li>AutoCAD Engineering</li>
              <li>Procurement</li>
              <li>Installation</li>
              <li>Programming & Commissioning</li>
              <li>Ongoing Support</li>
            </ul>
          </div>
        </div>
        <div>
          <h2>Trusted Support</h2>
          <p>Customer Service is what makes A/V Concepts and Design stand out from our competitors.</p>
          <p> 
            Neither the size nor the scope of a project is our concern, rather it is our professional manner, 
            and our proven ability to work with the project team to get the job done on time, and as expected. 
            We offer 24 hour, 365 day a year service and support, with a staff member on call for your convenience.
          </p>
          <p>
            “We believe Audio Video Concepts and Design to be one of the top firms in the world. Their attention 
            to detail, high quality design, excellent communications and exceptional customer service help us to 
            simplify the construction and outfitting process…” – Mark Masciarotte, Owner’s Representative
          </p>
        </div>
        <div>
          <h2>Management Approach</h2>
          <h4>Privacy</h4>
          <p>From the beginning of a project, we respect the need for absolute privacy.</p>
          <h4>Communications</h4>
          <p>
            We understand the importance of timely, thorough, and well-documented communications 
            for the client, the interior design team, and particularly the shipyard. Throughout every 
            step of the project, we provide thorough and timely documentation including AutoCAD drawings and meeting notes.
          </p>
          <h4>Documentation</h4>
          <p>
            We pride ourselves on providing outstanding technical documentation, including proactive details such as 
            color-coding to ensure comprehension across language barriers.
          </p>
          <h4>Attention</h4>
          <p>
            Our availability and flexibility are critical when working on projects of this caliber. We have first-hand 
            experience in the idiosyncrasies of building a boat, and a proven track record in providing ongoing support.
          </p>
          <h4>Personal Attention</h4>
          <p>
            Steve Segall is not only the president of our company, he is a hands-on project manager and engineer who 
            will be directly involved in your project from beginning to end.
          </p>
        </div>
      </div>
  </div>
)

export default IndexPage
