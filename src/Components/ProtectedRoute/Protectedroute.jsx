import React from 'react'
import { useNavigate } from 'react-router-dom'
import Login from '../Login/Login'








export default function Protectedroute( {userDate,children,saveUserDate}) {



  if( userDate ===null){

return <Login saveUserDate={saveUserDate}/>
}
else
{
return children
}
}