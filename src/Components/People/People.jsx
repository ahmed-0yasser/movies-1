import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MediaItem from '../MediaItem/MediaItem';
import Helmet from 'react-helmet'
export default function People() {

const[Trendingperson,setTrendingperson]=useState([])
  async function getpeople(mediaType,func){

    let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=63b28a7cebfb778360d9135a2575ac86`);
    func(data.results)
console.log(data.results)

    }


  useEffect (()=>{
    getpeople('person',setTrendingperson)
  },[])

  return (<>


  
<Helmet>
                <meta charSet="utf-8" />
                <title>person..</title>
               
            </Helmet>
  
            <div className='row' >
    


    {Trendingperson.map((movie,index)=><MediaItem movie={movie} key={index}/>)}
 

    
 
    </div>


 </> )
}
