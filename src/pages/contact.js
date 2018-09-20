import React, { Component } from 'react'
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
      <div className={styles.container}>
        <h1 className={styles.title}>Contact Us</h1>
        <div>
          <p className={styles.tagline}>Don't hesitate to reach out to us. We'll get back to you shortly!</p>
        </div>
        <form className={styles.contactFlex} 
              method="POST"
              action="https://formspree.io/scott.o.ammon@gmail.com"
              name="info-form"
        >
          <label>*Full Name</label>
          <input
            name="name"
            type="text"
            className={styles.contactInput}
            required
          />
          <label>*Email</label>
          <input
            name="email"
            type="text"
            className={styles.contactInput}
            required
          />
          <label>Project</label>
          <input
            name="project"
            type="text"
            className={styles.contactInput}
          />
          <label>New Build or Refit</label>
          <input
            name="build"
            type="text"
            className={styles.contactInput}
          />
          <label>Timing for Project</label>
          <input
            name="timing"
            type="text"
            className={styles.contactInput}
          />
          <label>Comments</label>
          <textarea
            name="comments"
            type="text"
            rows="5"
            className={styles.contactInput}
          />
          <p>*Indicates required field</p>
          <button>Submit</button>
        </form>
        
      </div>
    )
  }
}

export default ContactPage
