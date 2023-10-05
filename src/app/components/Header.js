import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './Navbar'

function Header() {
  return (
    <header className={styles.main_header}>
      <div className={styles.navbar_brand}>
        <Link href='/'>
        <Image src='/logo.png' alt='movieflix' height={60} width={150} />
        </Link>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header