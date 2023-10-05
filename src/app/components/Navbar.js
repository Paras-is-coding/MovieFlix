import React from 'react'
import styles from '@/app/styles/navbar.module.css'
import Link from 'next/link'
function Navbar() {
  return (
    <nav className={styles.navbar}>
        <div className=''>
            <ul className={styles.navbarList}>
                <li className={styles.navbarIteam}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navbarIteam}>
                    <Link href="/about">About</Link>
                </li>
                <li className={styles.navbarIteam}>
                    <Link href="/movie">Movie</Link>
                </li>
                <li className={styles.navbarIteam}>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar