import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
  <>
      <ContactCard/>
      <section className={styles.contact_section}>
      <h2>We'd love to hear <span> from you</span></h2>
      <ContactForm/>
      </section>
  </>
  )
}

export default Contact