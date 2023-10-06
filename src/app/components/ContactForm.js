'use client'
import styles from '@/app/contact/contact.module.css'
import { Mulish } from 'next/font/google'
import { useState } from 'react'
 
const mulish = Mulish({
  weight: ['200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
  display: 'swap',
})

function ContactForm() {

  const [user,setUser] = useState({
    username:"",
    email:"",
    phone:"",
    message:""
  });
  const [status,setStatus] = useState("")

  const handleChange = (e)=>{
    const name = e.target.name;
    const value = e.target.value;
    setUser((prevUser)=>({...prevUser,[name]:value}))
  }
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch('/api/contact',{
        method:'POST',
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          username:user.username,
          email:user.email,
          phone:user.phone,
          message:user.message
        })
      })

       //setting the status based on the status on response of API route
  if(response.status == 200){
    setUser({
      username:"",
      email:"",
      phone:"",
      message:""
    })
    setStatus("success");
  }else{
    setStatus("error");
  }

    } catch (error) {
      console.log(error)
    }
  }
    
 

  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}> 
    <div className={styles.input_field}>
        <label htmlFor="username">
            Username:
        <input type='text' name='username' id='username' placeholder='Enter your name' className={mulish.className} required value={user.username} onChange={handleChange}/>
        </label>

     </div>
    <div className={styles.input_field}>
        <label htmlFor="email">
            Email:
        <input type='email' name='email' id='email' placeholder='Enter your email' className={mulish.className}  required value={user.email} onChange={handleChange}/>
        </label>

     </div>
    <div className={styles.input_field}>
        <label htmlFor="phone">
            Phone:
        <input type='number' name='phone' id='phone' placeholder='Enter your phone' className={mulish.className}  required value={user.phone} onChange={handleChange}/>
        </label>

     </div>
    <div className={styles.input_field}>
        <label htmlFor="text">
            Message:
        <textarea name='message' id='message' placeholder='Enter your message' className={mulish.className}  required value={user.message} onChange={handleChange}/>
        </label>

     </div>
     <div>
        {status == "success" && <p className={styles.success_msg}>Thank you for your message!</p>}
        {status == "error" && <p className={styles.error_msg}>There was error submitting your message!</p>}

        <button type='submit' className={mulish.className}>Send Message</button>
     </div>
    </form> 
  )
}

export default ContactForm