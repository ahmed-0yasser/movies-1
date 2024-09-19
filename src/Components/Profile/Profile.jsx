
// import React from 'react'

// export default function Profile() {
//   return (
//     <div>Profile</div>
//   )
// }







import React from 'react'

export default function Profile({userDate}) {
    let {first_name,last_name,age,email} =userDate
  return (<>
  <div className='profile w-50 bg-info py-4 my-4 m-auto text-center'>
   <h4>Name:{first_name}{last_name} </h4>
   <h4 className='my-4'>Age:{age}</h4>
   <h4>Email:{email}</h4></div>
   </>
  )
}



