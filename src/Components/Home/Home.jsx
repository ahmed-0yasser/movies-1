import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MediaItem from '../MediaItem/MediaItem';
import  Helmet   from 'react-helmet'






export default function Home() {

  const [Trendingmovies,setTrendingmovies] =useState([])
  const [TrendingTv,setTrendingTv] =useState([])
  const [Trendingperson,setTrendingperson] =useState([])

 async function gettrending(mediaType,func){

  let {data} =await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=63b28a7cebfb778360d9135a2575ac86`);
func(data.results)

}




useEffect(()=>{




  gettrending('movie',setTrendingmovies)
  gettrending('tv',setTrendingTv)
  gettrending('person',setTrendingperson)
},[])













  return <>




<Helmet>
                <meta charSet="utf-8" />
                <title>Home.....</title>
               
            </Helmet>
  {/* start movies */}
     <div className='row mt-5'>
     <div className='col-md-4 d-flex aling-items-center '>
      <div>
      <div className='brdr mb-3 w-25'></div>
      <h2 className='h3'>Trending  <br/>Movies <br/>to watch Right Now</h2>
      <p className='muted py-3'>most watched movies by Days</p>
      <div className='brdr mt-3 w-100'></div>
      </div>
     </div>




    {Trendingmovies.slice(0,10).map((movie,index)=><MediaItem movie={movie} key={index}/>)}
    </div>
{/* end movies */}

{/* start brdr */}
<div className='brdr mt-3 w-100'></div>
{/* end brdr */}


{/* start tv */}
    <div className='row mt-5 py-5'>
     <div className='col-md-4 d-flex aling-items-center '>
      <div>
      <div className='brdr mb-3 w-25'></div>
      <h2 className='h3'>Trending  <br/>Tv <br/>to watch Right Now</h2>
      <p className='muted py-3'>most watched movies by Days</p>
      <div className='brdr mt-3 w-100'></div>
      </div>
     </div>

    {TrendingTv.slice(0,10).map((Tv,index)=><MediaItem movie={Tv} key={index}/>)}
    </div>
    {/* end tv */}
{/* start brdr */}
    <div className='brdr mt-3 w-100'></div>
{/* end brdr */}

{/* start person */}

    <div className='row mt-5'>
     <div className='col-md-4 d-flex aling-items-center '>
      <div>
      <div className='brdr mb-3 w-25'></div>
      <h2 className='h3'>Trending  <br/>person  <br/>to watch Right Now</h2>
      <p className='muted py-3'>most watched movies by Days</p>
      <div className='brdr mt-3 w-100'></div>
      </div>
     </div>

    {Trendingperson.slice(0,10).map((movie,index)=><MediaItem movie={movie} key={index}/>)}
    </div>

{/* end person */}
    </>
}
