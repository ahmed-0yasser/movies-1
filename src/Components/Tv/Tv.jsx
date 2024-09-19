

import axios from 'axios';
import MediaItem from '../MediaItem/MediaItem';

import React, { useEffect, useState } from 'react'

 import Helmet from 'react-helmet'

export default function Tv() {



  const [TrendingTv,setTrendingTv] =useState([])

  async function getTv(mediaType,func){

    let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=63b28a7cebfb778360d9135a2575ac86`);
  func(data.results)


    }


  useEffect (()=>{
    getTv('tv',setTrendingTv)
  },[])
  return <>
   <Helmet>
                <meta charSet="utf-8" />
                <title>Tv.....</title>
               
            </Helmet>


    <div className='row' >
    


    {TrendingTv.map((movie,index)=><MediaItem movie={movie} key={index}/>)}
 

    
 
    </div>


    






 
</>

}
