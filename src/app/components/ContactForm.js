import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'
 
const mulish = Mulish({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

function ContactForm() {

    
  return (
    <form className={styles.contact_form}> 
    <div className={styles.input_field}>
        <label htmlFor="username">
            Username:
        <input type='text' name='username' id='username' placeholder='Enter your name' className={mulish.className}/>
        </label>

     </div>
    <div className={styles.input_field}>
        <label htmlFor="email">
            Email:
        <input type='email' name='email' id='email' placeholder='Enter your email' className={mulish.className}/>
        </label>

     </div>
    <div className={styles.input_field}>
        <label htmlFor="phone">
            Phone:
        <input type='text' name='phone' id='phone' placeholder='Enter your phone' className={mulish.className}/>
        </label>

     </div>
    <div className={styles.input_field}>
        <label htmlFor="text">
            Message:
        <textarea name='message' id='message' placeholder='Enter your message' className={mulish.className}/>
        </label>

     </div>
     <div>
        <button type='submit' className={mulish.className}>Send Message</button>
     </div>
    </form>
  )
}

export default ContactForm