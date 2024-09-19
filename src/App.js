import logo from './logo.svg';
import './App.css';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Movies from './Components/Movies/Movies';
import People from './Components/People/People';
import Tv from './Components/Tv/Tv';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Profile from './Components/Profile/Profile';
import Protectedroute from './Components/ProtectedRoute/Protectedroute';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import { Offline, Online } from 'react-detect-offline';


function App() {


useEffect(()=>{
  if(localStorage.getItem('userToken')!==null)
  {
    saveUserDate()
  }
},[])




const[userDate,setuserdate] =useState(null);  


function saveUserDate() {
  let encodedToken =localStorage.getItem('userToken');
  let decodedToken = jwtDecode(encodedToken);
  setuserdate(decodedToken); 

}  
// function logOut(){
//   localStorage.removeItem('usertoken');
//   setuserdate(null);
//   return<Navigate to='/login'/>

// }

let routers = createBrowserRouter([
  {path:'/',element:<Layout userDate={userDate}/>, children:[
    {path:'home',element:<Protectedroute saveUserDate={saveUserDate} userDate={userDate}><Home/></Protectedroute>}, 
    {path:'people',element:<Protectedroute saveUserDate={saveUserDate} userDate={userDate}><People/></Protectedroute>} ,
    {path:'profile',element:<Protectedroute saveUserDate={saveUserDate} userDate={userDate}><Profile userDate={userDate}/></Protectedroute>} ,
    {path:'movies',element:<Protectedroute  saveUserDate={saveUserDate}userDate={userDate}><Movies/></Protectedroute>} ,
    {path:'tv',element:<Protectedroute saveUserDate={saveUserDate} userDate={userDate}><Tv/></Protectedroute>} ,  
    {path:'moviedetails/:id/:media_type/:name',element:<Protectedroute saveUserDate={saveUserDate} userDate={userDate}><MovieDetails/></Protectedroute>} ,  
    {path:'register',element:<Register/>} ,
    {index:true ,element:<Login  saveUserDate={saveUserDate} />}
   
  ]}
]) 
  return<>
 <div>
 
    <Offline><div className='offline'> (You Are offline!)</div></Offline>
  </div>



  <RouterProvider router={routers }/>
  </>
  
  
}

export default App;
