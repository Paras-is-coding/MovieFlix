import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';


function MovieCard(ele) {
    const {id,type,title,synopsis} = ele.jawSummary;
  return (
    <div className={styles.card}>
        <div className={styles.card_image}>
            <Image src={ele.jawSummary.backgroundImage.url} alt={title} width={250} height={200} />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0,18)}</h2>
          <p>{synopsis.substring(0,70) + "..."}</p>

          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
    </div>

  )
}

export default MovieCard