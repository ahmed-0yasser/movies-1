import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'



export default function Navbar({userDate,logOut}) {
 
  return <nav className='Navbar  flex-md-row flex-colume d-flex justify-content-between p-2'>
  <div className="left-nav flex-md-row flex-colume  d-flex align-items-center">
    <h1 className=' logo  m-0 pe-3'>Cima <span className='logo2'> Club</span>
</h1>

{userDate ? <>
  <ul className='list-unstyled flex-md-row flex-column d-flex m-0 align-items-center'>
    <li className='px-2'> <Link to='home'>Home</Link>   </li>
    <li className='px-2'> <Link to='movies'>Movies</Link>   </li>
    <li className='px-2'> <Link to='tv'>Tv</Link>   </li>
    <li className='px-2'> <Link to='people'>People</Link>   </li>
  </ul>
  </>
 :''}



  </div>


  <div className="right-nav  flex-md-row flex-colume d-flex align-items-center">
    <div className="social-media">
    <i className=" mx-2 fa-brands fa-facebook"></i>
    <i className=" mx-2 fa-brands fa-instagram"></i>
    <i className=" mx-2 fa-brands fa-twitter"></i>
    <i className=" mx-2  fa-brands fa-spotify"></i>
    <i className=" mx-2 fa-brands fa-youtube"></i>
    </div>

<ul className='list-unstyled flex-md-row flex-colume d-flex m-0 align-items-center"' >

{userDate?<>
  <span className='px-2'onClick={logOut}>Logout</span>
  <li className='px-2'><Link to='profile'>Profile</Link></li>
  </>:<> 
   <li className='px-2'><Link to='login'>Login</Link></li>
<li className='px-2'><Link to='register'>Register</Link></li>

</>}

</ul>





  </div>




  </nav>

  
  
  
  
  
  
  
}
