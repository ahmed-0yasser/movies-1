import React from 'react'
import { Link } from 'react-router-dom'

export default function MediaItem({movie}) {
  return <><div className='col-md-2'> 


<Link to={'/moviedetails/'+movie.id+'/'+movie.media_type+'/'+movie.name}>

  <div className='movie position-relative '> 
{movie.poster_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}/>:''}
{movie.profile_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.profile_path}/>:'' }
   <h6 className='h6'>{movie.title} {movie.name} </h6>
   <div className='vote p-2 text-center position-absolute top-0 end-0'>{movie.vote_average?.toFixed(1)}</div>
   </div>


   </Link>



</div></>
}
