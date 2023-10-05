import styles from '@/app/styles/common.module.css'
import Link from 'next/link'

function NotFound() {
  return(
    <section className={styles.container}>
        <div className={styles.error_page}>
            <h1>404</h1>
            <h2>Not Found</h2>
            <p>Could not found the requested source.</p>
            <Link href='/'>
                <button>
                    Goto Home Page
                </button>
            </Link>
        </div>
    </section>
  )
}

export default NotFound
 
