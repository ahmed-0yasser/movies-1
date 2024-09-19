import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import {Helmet} from 'react-helmet'



export default function MovieDetails() {

let params = useParams()  

const[ItemDetails ,setItemDetails] = useState ({})
const[Similar ,setSimilar] = useState ([])

async function getItemDetails() 
     {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${params.media_type}/${params.id}?api_key=3f9a9c8b7cd88bdbcca2ae7a3413f9d0`);
        setItemDetails(data);


    }
async function getSimilar() 
     {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${params.media_type}/${params.id}/similar?api_key=6405b6ccfd5dc803fa746c73bc6b9b1c`);
        setSimilar(data.results);


    }

    useEffect(() => {
          getItemDetails()
        getSimilar() 
      },[]);



  return <>
  <Helmet>
                <meta charSet="utf-8" />
                <title>{'ItemDetails.title'}</title>
               
            </Helmet>
  
  <div className='row'>
    <div className='col-md-3'>
    {ItemDetails.poster_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+ItemDetails.poster_path}/>:''}
{ItemDetails.profile_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+ItemDetails.profile_path}/>:'' }

    </div>
    <div className='col-md-9'>
      <h2 className='py-3'>{ItemDetails.name} {ItemDetails.title}</h2>
      <p className='muted py-3'>{ItemDetails.overview}</p>
<h6 className='py-2'>Vote_average :    { ItemDetails.vote_average&& <div className=' p-2 '>{ItemDetails.vote_average?.toFixed(1)}</div>} </h6>
<h6 className='py-2'>Vote_count :    { ItemDetails.vote_average&& <div className=' p-2  '>{ItemDetails.vote_average?.toFixed(1)}</div>} </h6>
    </div>

  </div>
  <div className='row'>

    {Similar.map((movie,index)=>
    <div key={index} className='col-md-2'> 


    <Link to={'/moviedetails/'+movie.id+'/'+params.media_type+'/'+movie.name}>
    
      <div className='movie position-relative '> 
    {movie.poster_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}/>:''}
    {movie.profile_path? <img className='w-100' src={`https://image.tmdb.org/t/p/w500/`+movie.profile_path}/>:'' }
       <h6 className='h6'>{movie.title} {movie.name} </h6>
       <div className='vote p-2 text-center position-absolute top-0 end-0'>{movie.vote_average?.toFixed(1)}</div>
       </div>
    
    
       </Link>
    
    
    
    </div>)

    }



  </div>
  
  
  
  
  
  
  </>
   
  
}
