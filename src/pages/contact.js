import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from "../styles/contact.module.css"

class ContactPage extends Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return  (
      <div>
        <h1>Contact Us</h1>
        <div>
          <p>A/V Concepts & Design 15336 NE 96th Place, #C-3; Redmond, WA 98052 USA</p>
          <p>Phone:	+1 (425) 881-5621</p>
          <p>Fax:	+1 (425) 883-3952</p>
        </div>
        <form className={styles.contactFlex} 
              method="POST"
              action="https://formspree.io/scott.o.ammon@gmail.com"
              name="info-form"
        >
          <label>
            Name
            <input
              name="name"
              type="text"
              className={styles.contactInput}
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="text"
              className={styles.contactInput}
              required
            />
          </label>
          <label>
            Project
            <input
              name="project"
              type="text"
              className={styles.contactInput}
            />
          </label>
          <label>
            New Build or Refit
            <input
              name="build"
              type="text"
              className={styles.contactInput}
            />
          </label>
          <label>
            Timing for Project
            <input
              name="timing"
              type="text"
              className={styles.contactInput}
            />
          </label>
          <label>
            Comments
            <textarea
              name="comments"
              type="text"
              rows="5"
              className={styles.contactInput}
            />
          </label>
          <button>Submit</button>
        </form>
        
      </div>
    )
  }
}

export default ContactPage
