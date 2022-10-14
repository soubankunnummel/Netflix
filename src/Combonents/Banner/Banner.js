import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../constants/constants'
import axios from '../../axios'
import { img_url } from '../../constants/constants'
import './Banner.css'


function Banner() {
  const [movie,setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((respons) =>{
      console.log(respons.data.results[0]);
      setMovie(respons.data.results[2])
    })

  }, [])

  return (
    <div 
    style={{backgroundImage: `url(${movie ? img_url+movie.backdrop_path : ''})`} }
    className='banner'>
        <div className="content">
           <h1 className="title">{movie ? movie.title : ''}</h1>
           <div className="banner_buttons">
            <button className="button">Play</button>
            <button className="button">More info</button>
           </div>
           <p className="description">{movie ? movie.overview : ''}  </p>
        </div>
        <div className="fade"></div>
     
    </div>
  )
}

export default Banner
