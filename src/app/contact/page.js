import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from './contact.module.css'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
  <>
  <div className={styles.container}>
      <h1>Contact Us</h1>
      <ContactCard/>
      <section className={styles.contact_section}>
      <h2>We'd love to hear <span> from you</span></h2>
      <ContactForm/>
      </section>
    </div>
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.927001396656!2d85.33981835!3d27.6946846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2eaf9%3A0xc5670a9173e161de!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1696576497031!5m2!1sen!2snp" width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
  </>
  )
}

export default Contact