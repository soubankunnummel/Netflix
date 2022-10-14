import axios from '../../axios'
import React from 'react'
import YouTube from 'react-youtube'
import { useEffect,useState } from 'react'
import { img_url,API_KEY} from '../../constants/constants'
import './RowPost.css'



function RowPost(props) {
  const [movie,setMovie] = useState([])
  const [urlId,setUrlId] = useState('')


  useEffect (() => {
    axios.get(props.url).then((respons) => {
      console.log(respons.data.results);
      setMovie(respons.data.results)
    }).catch(err=>{
      // alert('Net work err')
    })
    
  }, [])
  const  opts = {
    height: '390',
    width: '100%',
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
       autoplay: 1,
       
       
      },
  };
  
  const handleMovei = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((respons)=> {
      if(respons.data.length!==0){
        setUrlId(respons.data.results[0])
      }else{
        console.log('arry not fount');
      }
    })
  }

  const handleMouseLeave = () => {
   setUrlId(null);
  }
  
  return (
    <div className='row'>
        <h1>{props.title}</h1>
      <div className="posters">
      {movie.map((obj) => 

        <img  
        onMouseEnter={()=> handleMovei(obj.id) } className={props.isSmall ?  'smallPoster' :'poster'}
         alt="poster"  src={`${img_url+obj.backdrop_path}`}onMouseLeave={() =>handleMouseLeave()}
          />
         
        
   
      )}

        
      </div>
      { urlId && <YouTube  videoId={urlId.key} opts={opts} /> }
    </div>
  )
}

export default RowPost
