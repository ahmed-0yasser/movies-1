import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'



export default function Layout({userDate,logOut}) {
  return<>
  <Navbar logOut={logOut} userDate={userDate}/>

  <div className='container'>
  <Outlet></Outlet>
  </div>




  <Footer/>
  
  
  
  
  </>
    
  
}
