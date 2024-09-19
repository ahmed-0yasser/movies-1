import React, { useEffect, useState } from 'react'
// import Trendingmovies from './Movies'
import MediaItem from '../MediaItem/MediaItem';
import axios from 'axios';

import Helmet from 'react-helmet'

export default function Movies() {


  const [Trendingmovies,setTrendingmovies] =useState([])

  async function getMovies(mediaType,func){

    let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=63b28a7cebfb778360d9135a2575ac86`);
  func(data.results)


    }



  useEffect (()=>{
    getMovies('movie',setTrendingmovies)
  },[])
  return <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Movies.....</title>
               
            </Helmet>


    <div>movies</div>

    <div className='row' >
   


    {Trendingmovies.map((movie,index)=><MediaItem movie={movie} key={index}/>)}
{/*      
      <div className='movie position-relative'>
      <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}/>
        <h6>{movie.title}</h6>
        <div className='vote p-2 text-center position-absolute top-0 end-0'>{movie.vote_average.toFixed(1)}</div>
      
      </div>
      */}
 

    
 
    </div>


    






 
</>
}
//






// <div className='movie position-relative '> 
// {movie.poster_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}/>:''}
// {movie.profile_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.profile_path}/>:'' }
//    <h6 className='h6'>{movie.title} {movie.name} </h6>
//    <div className='vote p-2 text-center position-absolute top-0 end-0'>{movie.vote_average?.toFixed(1)}</div>
//    </div>


























