import React from 'react'
import styles from '@/app/styles/common.module.css'
import Image from 'next/image';

async function Page({params}) {
  const id = params.id;
 
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
const options= {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key' : 'e0487186admsh070da23dd37a2d6p102be2jsn1092918a6ecb',
    'X-RapidAPI-Host' : 'netflix-data.p.rapidapi.com'
  }
};
let main_data;
 try {
	const response = await fetch(url, options);
	const result = await response.json();
  main_data = result[0].details;
	// console.log(result.titles);
  } catch (error) {
	console.error(error);
    }


  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>Netflix \ <span>{main_data.type}</span></h2>
      <div className={styles.card_section}>
        <div>
          <Image src={main_data.backgroundImage.url} alt={main_data.title} width={600} height={300} />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  )
}

export default Page