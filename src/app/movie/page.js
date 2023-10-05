import React from 'react'
import styles from '@/app/styles/common.module.css'
import MovieCard from '../components/MovieCard';

async function Movie() {

 await new Promise(resolve => setTimeout(resolve,1000)); // just to see loader remove this line

const url = process.env.RAPID_KEY;
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
  main_data = result.titles;
	// console.log(result.titles);
  } catch (error) {
	console.error(error);
    }
  return(
    <>
    <div className={styles.movieSection}>
      <div className={styles.container}>
      <h1>Series & Movie</h1>
      <div className={styles.card_section}>
      {
        main_data.map((ele)=>{
          return <MovieCard key={ele.id} {...ele}/>
        })
      }
       </div>
      </div>
    </div>
    </>
  )
}

export default Movie