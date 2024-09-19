import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login({saveUserDate}) {

let navigate =useNavigate();
   const [isloding ,setIsloding] =useState(false)
   const [errorlist, setErrorlest]=useState([])
   const [error ,setError] =useState('')
   const [user,setUser] = useState({
      email:'',
      password:''
   })


   function getUserData(eventInfo){
    let myuser ={...user};
    myuser[eventInfo.target.name] = eventInfo.target.value;
    setUser(myuser)



    
   }
   async function sendLoginDataToApi(){
 let {data}  =await axios.post(`https://movies-api.routemisr.com/signin`,user );

 
if  (data.message == 'success'){

  setIsloding(false);
  localStorage.setItem('userToken',data.token)
 
  navigate('/home')

  saveUserDate()
}
else{
  setIsloding(false)
  setError(data.message)
}




   }




   function submitLoginForm(e) 
   {
    setIsloding(true)
    e.preventDefault();
    
    let validation =validateLoginForm()
   if(validation.error){
    setIsloding(false)
    setErrorlest(validation.error.details)
   }
   else{

   }

   sendLoginDataToApi();

   }


   function validateLoginForm()
   {
    let schema =Joi.object({
      email :Joi.string().email({ minDomainSegments: 2,tlds: { allow: ['com', 'net'] } }).required(),
      password:Joi.string().required().pattern(/^[A-Z][a-z]{3,6}/),

    })
    return schema.validate(user,{abortEarly:false });
   

   }





  return <>



     {errorlist.map((err,index)=> {
     if(err.context.label==='password') {
      return <div key={index} className='alert alert-danger my-2'>password invalid </div> 
     }
     else{
      return <div key={index} className='alert alert-danger my-2'>{err.message}</div> 
     }
    }

      )}

       {error.length>0?<div className='alert alert-danger my-2'>{error}</div>:''}
  
        <form onSubmit={submitLoginForm} >
         <h1>Login form</h1>
 
          <label htmlFor='email'> email:</label>
          <input onChange={getUserData}  type="text" className=' my-input form-control  my-2' name='email' id=' email' />

          <label htmlFor='password'> password:</label>
          <input onChange={getUserData}  type="password" className=' my-input form-control  my-2' name='password' id=' password' />

        <button type='submit' className='btn btn-info'>Login</button>
         {isloding == true?<i className="fas fa-spinner fa-spin"></i>:''}



        </form>
  
  
  
  
  
  
  </>
    
 
}
