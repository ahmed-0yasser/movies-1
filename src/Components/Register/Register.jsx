import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Register() {

let navigate =useNavigate();
   const [isloding ,setIsloding] =useState(false)
   const [errorlist, setErrorlest]=useState([])
   const [error ,setError] =useState('')
   const [user,setUser] = useState({
      first_name:'',
      last_name:'',
      age:0,
      email:'',
      password:''
   })


   function getUserData(eventInfo){
    let myuser ={...user};
    myuser[eventInfo.target.name] = eventInfo.target.value;
    // myuser.first_name = eventInfo.target.value
    setUser(myuser)



    console.log(user)
   }
   async function sendRegisterDataToApi(){
 let {data}  =await axios.post(`https://movies-api.routemisr.com/signup`,user );

 
if(data.message  =='success'){

  setIsloding(false)
  navigate('/home')
}
else{
  setIsloding(false)
  setError(data.message)
}




   }




   function submitRegisterForm(e) 
   {
    setIsloding(true)
    e.preventDefault();
    
    let validation =validateRegisterForm()
   if(validation.error){
    setIsloding(false)
    setErrorlest(validation.error.details)
   }
   else{

   }

   sendRegisterDataToApi();

   }


   function validateRegisterForm()
   {
    let schema =Joi.object({
      first_name:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
      last_name:Joi.string().pattern(/^[A-Z]/).min(3).max(10).required(),
      age     :Joi.number().min(16).max(60).required(),
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
  
        <form onSubmit={submitRegisterForm} >
          <label htmlFor='first_name'> first_name:</label>
          <input onChange={getUserData} type="text" className=' my-input form-control  my-2' name='first_name' id=' first_name' />
          
          <label htmlFor='last_name'> last _name:</label>
          <input onChange={getUserData} type="text" className=' my-input form-control  my-2' name='last_name' id=' last_name' />

          <label htmlFor='age'> age:</label>
          <input onChange={getUserData}  type="number" className=' my-input form-control  my-2' name='age' id=' age' />

          <label htmlFor='email'> email:</label>
          <input onChange={getUserData}  type="text" className=' my-input form-control  my-2' name='email' id=' email' />

          <label htmlFor='password'> password:</label>
          <input onChange={getUserData}  type="password" className=' my-input form-control  my-2' name='password' id=' password' />

        <button type='submit' className='btn btn-info'>Register</button>
         {isloding == true?<i className="fas fa-spinner fa-spin"></i>:''}



        </form>
  
  
  
  
  
  
  </>
    
 
}
